import{i as w,c as D,a as V}from"./index-9ea2a064.js";(function(n,_){const x=f,a=n();for(;[];)try{if(parseInt(x(345))/1+-parseInt(x(350))/2+-parseInt(x(351))/3+-parseInt(x(346))/4*(-parseInt(x(344))/5)+-parseInt(x(357))/6+parseInt(x(354))/7*(parseInt(x(355))/8)+-parseInt(x(359))/9*(-parseInt(x(352))/10)===_)break;a.push(a.shift())}catch(o){a.push(a.shift())}})(u,958441);function u(){const n=["40OuFYtj","min","9610758rplwDc","velocityX","9351OOHWXn","defaultView","2126185joaSpI","1193365GiDLEA","12JtUiMZ","innerWidth","ownerDocument","deltaX","2617190mCblsm","4346859LeVjoa","18840YnxKyi","goback-swipe","1247722sOQQOV"];return u=function(){return n},u()}function f(n,_){const x=u();return f=function(a,o){return a=a-344,x[a]},f(n,_)}const v=(n,_,x,a,o)=>{const r=f,p=n[r(348)][r(360)];let i=w(n);const O=t=>{const e=r,c=50,{startX:s}=t;return i?s>=p[e(347)]-c:s<=c},h=t=>{const e=r;return i?-t[e(349)]:t[e(349)]},y=t=>{const e=r;return i?-t[e(358)]:t[e(358)]},M=t=>(i=w(n),O(t)&&_()),S=t=>{const e=r,c=h(t),s=c/p[e(347)];a(s)},X=t=>{const e=r,c=h(t),s=p.innerWidth,d=c/s,b=y(t),g=s/2,l=b>=0&&(b>.2||c>g),j=l?1-d:d,I=j*s;let m=0;if(I>5){const k=I/Math.abs(b);m=Math[e(356)](k,540)}o(l,d<=0?.01:V(0,d,.9999),m)};return D({el:n,gestureName:r(353),gesturePriority:40,threshold:10,canStart:M,onStart:x,onMove:S,onEnd:X})};export{v as createSwipeBackGesture};
