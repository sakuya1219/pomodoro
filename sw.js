if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let a={};const o=s=>n(s,l),c={module:{uri:l},exports:a,require:o};e[l]=Promise.all(i.map((s=>c[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"84569e7313c6be7bb617bf9af87eaf7b"},{url:"android-chrome-512x512.png",revision:"cd87200b47f432cf59dbad777163b0b7"},{url:"apple-touch-icon.png",revision:"c58544356ab9aa3f2990abe720365a17"},{url:"assets/index-BlHuJU4K.css",revision:null},{url:"assets/index-Dd8mixFN.js",revision:null},{url:"assets/index-DeQV6baX.js",revision:null},{url:"assets/list-Bx_nP95b.css",revision:null},{url:"assets/list-DfFWLr8F.js",revision:null},{url:"assets/list-Dw--SHPy.js",revision:null},{url:"assets/materialdesignicons-webfont-CgCzGbLl.woff",revision:null},{url:"assets/materialdesignicons-webfont-CYDMK1kx.woff2",revision:null},{url:"assets/materialdesignicons-webfont-D3kAzl71.ttf",revision:null},{url:"assets/materialdesignicons-webfont-DttUABo4.eot",revision:null},{url:"assets/settings-BnfVYIlc.js",revision:null},{url:"assets/settings-Bus4kXDb.js",revision:null},{url:"assets/settings-COwaFn8q.css",revision:null},{url:"assets/tomato-tm_sgEMz.png",revision:null},{url:"assets/VInput-Ce3uzalR.css",revision:null},{url:"assets/VInput-D4hJj8Ss.js",revision:null},{url:"assets/VRow-DYr8syiA.js",revision:null},{url:"favicon-16x16.png",revision:"3a8982740c01c519243d367b16cc895f"},{url:"favicon-32x32.png",revision:"71ff740da7b8f55f954a937428377417"},{url:"favicon.ico",revision:"8d08b4244284a833eaf79f67fdbb911a"},{url:"index.html",revision:"e3a1666225e5a9bc56a9adcbe0e03b98"},{url:"mstile-150x150.png",revision:"aff603737d48ad6f4b5a1db08b572c7d"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"0f32d91aa0e0afe204832bc521c130b4"},{url:"splashscreens/ipad_splash.png",revision:"f72431bb83a6a6f7bcf072c3f4f54e35"},{url:"splashscreens/ipadpro1_splash.png",revision:"7e08c658806960e0b9063216635f7c2a"},{url:"splashscreens/ipadpro2_splash.png",revision:"c4fd41c914f3757805688084d88ec13c"},{url:"splashscreens/ipadpro3_splash.png",revision:"d5e9d88e08949cd55c12ce3b46938d1d"},{url:"splashscreens/iphone5_splash.png",revision:"9e51db455d9ca2601e1801bd7fab3cc2"},{url:"splashscreens/iphone6_splash.png",revision:"ee2a56329304bf2267705c51a65b7a1f"},{url:"splashscreens/iphoneplus_splash.png",revision:"223b44620f7e15425c8f4d6d6de851ec"},{url:"splashscreens/iphonex_splash.png",revision:"3e89d406d8022b1a2dee90085c6d7389"},{url:"splashscreens/iphonexr_splash.png",revision:"310ec57bf8838ba3ff5dd68e720b5471"},{url:"splashscreens/iphonexsmax_splash.png",revision:"4bfb111e7e1c558b26140670ef03ae92"},{url:"./android-chrome-192x192.png",revision:"84569e7313c6be7bb617bf9af87eaf7b"},{url:"./android-chrome-512x512.png",revision:"cd87200b47f432cf59dbad777163b0b7"},{url:"manifest.webmanifest",revision:"462ff90d7d8d85e1ff70ae22943f450c"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
