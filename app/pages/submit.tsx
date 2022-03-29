import type { NextPage } from 'next'

const Submit: NextPage = () => {
  return (
    <>
      <p className="mt-5 mb-5 text-neutral-800">
        Use this page to submit your refund request to the Cashio team. The
        Cashio team will later aggregate all of this information and send it to
        the attacker.
      </p>
      <p className="mb-5 text-neutral-800">
        If you cannot view the form below, please{' '}
        <a
          href="https://airtable.com/shrhisdFj9f1vJ5Wi"
          className="text-blue-400 hover:underline"
          target="_blank"
        >
          click on this link
        </a>
        . Please post questions in{' '}
        <a
          href="https://discord.com/invite/5Mvhfc8vnX"
          className="text-blue-400 hover:underline"
          target="_blank"
        >
          Discord
        </a>
        .
      </p>
      <p className="mb-5 text-red-500">
        As the hacker stated, "returns will start next week manually". The
        deadline to submit this form is April 3, 2022 at 00:00 UTC.
      </p>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrhisdFj9f1vJ5Wi?backgroundColor=green"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      ></iframe>
    </>
  )
}

export default Submit
