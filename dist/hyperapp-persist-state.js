!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";module.exports=function(e,t){t=void 0===t?{}:t;t=Object.assign({storage:"localStorage",clearPast:!0,version:1},t);var n=window[t.storage],i="app-state-v-"+t.version;return e.actions.__initPersist=function(e,o){var s=null;return n[i]&&(s=JSON.parse(n[i])),t.clearPast&&Object.keys(n).map(function(e){e!==i&&0===e.indexOf("app-state-v-")&&delete n[e]}),window.addEventListener("unload",o.__persistState),s||e},e.actions.__persistState=function(e){n[i]=JSON.stringify(e)},e.actions.__removePersist=function(e,t){delete n[i],window.removeEventListener("unload",t.__persistState)},e}});