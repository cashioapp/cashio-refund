import {
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js'
import bs58 from 'bs58'
import clsx from 'clsx'
import React, { FC } from 'react'

interface Props {
  message: string
  onSubmit: any
  className: string
}

const Sign: FC<Props> = (props) => {
  const handler = async () => {
    try {
      const solana: any = (window as any).solana
      if (!solana || !solana.signMessage)
        throw new Error('Please install Phantom wallet')
      await solana.connect()
      const encodedMessage = new TextEncoder().encode(props.message)

      let publicKey: PublicKey
      let signature: string = ''
      let message: string

      try {
        const signedMessage = await solana.signMessage(encodedMessage, 'utf8')
        publicKey = signedMessage.publicKey
        signature = signedMessage.signature.toString('base64')
        message = Buffer.from(props.message).toString('base64')
      } catch (e) {
        alert(
          "We couldn't sign the message using Phantom. This will instead send a memo. The transaction will not be sent and you will not pay any fees."
        )

        const resp = await solana.request({ method: 'connect' })
        publicKey = resp.publicKey

        const transaction = new Transaction()
        transaction.add(
          new TransactionInstruction({
            keys: [],
            programId: new PublicKey(
              'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
            ),
            data: Buffer.from(props.message),
          })
        )
        transaction.recentBlockhash =
          '9YGGfyNSMxkBHshCqMiP3WGkuHieQvfxGikjFZFTX4Gi'
        transaction.feePayer = publicKey
        const rawTX = transaction.serializeMessage()
        const a = await solana.request({
          method: 'signTransaction',
          params: {
            message: bs58.encode(rawTX),
          },
        })
        publicKey = new PublicKey(a.publicKey)
        signature = Buffer.from(bs58.decode(a.signature)).toString('base64')
        message = rawTX.toString('base64')
      }

      props.onSubmit({
        publicKeyBuffer: publicKey,
        publicKey: publicKey.toBase58(),
        message,
        signature: signature,
      })
    } catch (e: any) {
      if (e.message && !e.message.includes('User rejected')) {
        alert(e.message)
      }
    }
  }

  return (
    <button
      className={clsx(
        'rounded-lg bg-blue-400 px-2 py-1 text-neutral-100',
        'border-none text-lg outline-none',
        props.className
      )}
      onClick={handler}
    >
      sign message
    </button>
  )
}

export default Sign
