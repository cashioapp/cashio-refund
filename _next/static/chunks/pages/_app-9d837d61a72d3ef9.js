(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6010:function(e,r,t){"use strict";function n(e){var r,t,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})},6363:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1880)}])},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,u=(a=t(7294))&&a.__esModule?a:{default:a},i=t(1003),l=t(880),c=t(9246);var f={};function s(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var p=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),a=u.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),p=a.href,d=a.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=u.default.createElement("a",null,h));var g=(r=u.default.Children.only(h))&&"object"===typeof r&&r.ref,x=o(c.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],E=u.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);u.default.useEffect((function(){var e=w&&t&&i.isLocalURL(p),r="undefined"!==typeof b?b:n&&n.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(n,p,d,{locale:r})}),[d,p,w,b,t,n]);var _={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,u,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:u}))}(e,n,p,d,v,y,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(p)&&s(n,p,d,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var O="undefined"!==typeof b?b:n&&n.locale,A=n&&n.isLocaleDomain&&i.getDomainLocale(d,O,n&&n.locales,n&&n.domainLocales);_.href=A||i.addBasePath(i.addLocale(d,O,n&&n.defaultLocale))}return u.default.cloneElement(r,_)};r.default=p},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),p=s[0],d=s[1],h=o(a.useState(r?r.current:null),2),v=h[0],y=h[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||p||e&&e.tagName&&(f.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=l.get(n):(r=l.get(t),c.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,u=n.elements;return u.set(e,r),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:t}))}),[n,v,t,p]);return a.useEffect((function(){if(!i&&!p){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){r&&y(r.current)}),[r]),[m,p]};var a=t(7294),u=t(4686),i="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},1880:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n=t(5893),o=(t(6774),t(9008)),a=(t(7294),t(6010)),u=t(1664),i=t(1163),l=function(e){var r=(0,i.useRouter)().asPath===e.href;return(0,n.jsx)(u.default,{href:e.href,children:(0,n.jsx)("a",{className:(0,a.Z)("hover:text-blue-400",r?"text-neutral-800":"text-neutral-300","px-5 text-2xl",e.className),children:e.name})})},c=function(e){return(0,n.jsxs)("div",{className:(0,a.Z)("flex w-full flex-row justify-center py-5"),children:[(0,n.jsx)(l,{href:"/",name:"home"}),(0,n.jsx)(l,{href:"/create",name:"create"})]})};function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){f(e,r,t[r])}))}return e}var p=function(e){var r=e.Component,t=e.pageProps;return(0,n.jsx)("div",{className:"flex min-h-screen w-full flex-col items-center bg-neutral-50",children:(0,n.jsxs)("div",{className:"flex w-[700px] max-w-full flex-col items-center px-4",children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Cashio Refund"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"})]}),(0,n.jsxs)("div",{className:"mt-5 flex flex-row items-center",children:[(0,n.jsx)("img",{src:"/cashio.png",height:"48px",width:"48px"}),(0,n.jsx)("p",{className:"ml-2 text-2xl",children:"cashio.app refunds"})]}),(0,n.jsx)(c,{}),(0,n.jsx)(r,s({},t))]})})}},6774:function(){},9008:function(e,r,t){e.exports=t(3121)},1664:function(e,r,t){e.exports=t(1551)},1163:function(e,r,t){e.exports=t(880)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(6363),r(880)}));var t=e.O();_N_E=t}]);