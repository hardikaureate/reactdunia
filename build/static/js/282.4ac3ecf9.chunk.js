"use strict";(self.webpackChunkreacthtmlproject=self.webpackChunkreacthtmlproject||[]).push([[282],{1282:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(7313),i=n(7977),a=n(6417),s=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:"main",class:"alt",children:(0,a.jsx)("section",{id:"one",children:(0,a.jsx)("div",{class:"inner",children:(0,a.jsxs)("div",{class:"row",children:[(0,a.jsxs)("div",{class:"col-3 col-12-medium numberCounter",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)(i.ZP,{end:758,duration:5,delay:3}),"+"]}),(0,a.jsx)("p",{children:"Cup of Tea"})]}),(0,a.jsxs)("div",{class:"col-3 col-12-medium numberCounter",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)(i.ZP,{end:81,duration:5,delay:3}),"K"]}),(0,a.jsx)("p",{children:"Working Hours"})]}),(0,a.jsxs)("div",{class:"col-3 col-12-medium numberCounter",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)(i.ZP,{end:238,duration:5,delay:3}),"+"]}),(0,a.jsx)("p",{children:"Software"})]}),(0,a.jsxs)("div",{class:"col-3 col-12-medium numberCounter",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)(i.ZP,{end:8.4,duration:5,delay:3}),"+"]}),(0,a.jsx)("p",{children:"Years"})]})]})})})})})},o=(0,r.lazy)((function(){return n.e(5).then(n.bind(n,8005))})),u=(0,r.lazy)((function(){return n.e(453).then(n.bind(n,8453))})),l=(0,r.lazy)((function(){return Promise.resolve().then(n.bind(n,9174))})),c=(0,r.lazy)((function(){return Promise.resolve().then(n.bind(n,2143))})),f=function(){return(0,a.jsx)("div",{children:(0,a.jsxs)(r.Suspense,{fallback:(0,a.jsx)("div",{style:{position:"fixed",left:"0%",top:"0%",zIndex:"9999",backgroundColor:"lavender",width:"100%",height:"100%"}}),children:[(0,a.jsx)(o,{}),(0,a.jsx)(u,{}),(0,a.jsx)(l,{title:"Sacheu Beauty Products"}),(0,a.jsx)(s,{}),(0,a.jsx)(c,{})]})})}},5010:function(t,e,n){n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(e/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,a,s=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){a="";for(var u=0,l=n.length;u<l;++u)0!==u&&u%3==0&&(a=i.options.separator+a),a=n[l-u-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},7977:function(t,e,n){var r=n(7313),i=n(5010);function a(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var s=a(r);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(t){var e=r.useRef(t);return d((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},g=function(t){var e=r.useMemo((function(){return u(u({},m),t)}),[t]),n=e.ref,a=e.startOnMount,s=e.enableReinitialize,o=e.delay,l=e.onEnd,c=e.onStart,d=e.onPauseResume,g=e.onReset,V=e.onUpdate,v=f(e,p),y=r.useRef(),b=r.useRef(),x=r.useRef(!1),j=h((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,d=e.start,h=e.suffix,p=e.useEasing;return new i.CountUp(t,o,{startVal:d,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:h,useEasing:p,useGrouping:!!f})}("string"===typeof n?n:n.current,v)})),E=h((function(t){var e=y.current;if(e&&!t)return e;var n=j();return y.current=n,n})),O=h((function(){var t=function(){return E(!0).start((function(){null===l||void 0===l||l({pauseResume:w,reset:F,start:R,update:P})}))};o&&o>0?b.current=setTimeout(t,1e3*o):t(),null===c||void 0===c||c({pauseResume:w,reset:F,update:P})})),w=h((function(){E().pauseResume(),null===d||void 0===d||d({reset:F,start:R,update:P})})),F=h((function(){b.current&&clearTimeout(b.current),E().reset(),null===g||void 0===g||g({pauseResume:w,start:R,update:P})})),P=h((function(t){E().update(t),null===V||void 0===V||V({pauseResume:w,reset:F,start:R})})),R=h((function(){F(),O()})),A=h((function(t){a&&(t&&F(),O())}));return r.useEffect((function(){x.current?s&&A(!0):(x.current=!0,A())}),[s,x,A,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){F()}}),[F]),{start:R,pauseResume:w,reset:F,update:P,getCountUp:E}},V=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,o=t.style,l=f(t,V),d=s.default.useRef(null),p=s.default.useRef(!1),m=g(u(u({},l),{},{ref:d,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),v=m.start,y=m.reset,b=m.update,x=m.pauseResume,j=m.getCountUp,E=h((function(){v()})),O=h((function(e){t.preserveValue||y(),b(e)})),w=h((function(){"function"!==typeof t.children||d.current instanceof Element?j():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){w()}),[w]),r.useEffect((function(){p.current&&O(t.end)}),[t.end,O]);var F=n&&t;return r.useEffect((function(){n&&p.current&&E()}),[E,n,F]),r.useEffect((function(){!n&&p.current&&E()}),[E,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"===typeof a?a({countUpRef:d,start:v,reset:y,update:b,pauseResume:x,getCountUp:j}):s.default.createElement("span",c({className:e,ref:d,style:o},i))}}}]);