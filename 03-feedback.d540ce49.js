function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,i,o,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function T(e){return l=e,f=setTimeout(j,t),c?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function j(){var e=g();if(O(e))return N(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,o-(e-l)):n}(e))}function N(e){return f=void 0,v&&r?y(e):(r=i=void 0,a)}function S(){var e=g(),n=O(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return T(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},S.flush=function(){return void 0===f?a:N(g())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),T={email:"",message:""};document.addEventListener("DOMContentLoaded",(e=>{const t=localStorage.getItem("feedback-form-state");if(null!==t){const e=JSON.parse(t);T.email=e.email,T.message=e.message,y.elements.email.value=T.email,y.elements.message.value=T.message}}));y.addEventListener("input",e(t)((e=>{if(e.preventDefault(),"INPUT"===e.target.nodeName)T.email=e.target.value;else{if("TEXTAREA"!==e.target.nodeName)return;T.message=e.target.value}localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)alert("Всі поля повинні бути заповнені !");else{e.currentTarget.reset();const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);console.log(n),localStorage.removeItem("feedback-form-state")}}));
//# sourceMappingURL=03-feedback.d540ce49.js.map
