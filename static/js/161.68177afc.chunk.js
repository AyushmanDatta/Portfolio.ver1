(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[161],{161:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});n(791);var r=n(87),s=n(842),i=n(892),a=n.n(i),u=n(184);const c=t=>{let{data:e}=t;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("/Portfolio.ver1").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},o=[{title:"Sign Language Translation",subtitle:"",link:"https://github.com/AyushmanDatta/Sign-Language-Translation",image:"/images/projects/sign-language-translation.jpeg",date:"2022-11-20",desc:"This uses computer vision using openCV and mediapipe as it's base.This ml model has been trained to detect all the alphabets and number from 1-10 in the ASL"},{title:"Education_Dashboard",subtitle:"Participated in OSSOME Hacks by GithubSRM",link:"https://github.com/MyselfAkashYadav/Education_Dashboard",image:"/images/projects/Education_Dashboard.jpeg",date:"2023-09-15",desc:"Created a Education dashboard with a teacher side and a student side for teachers. We implemented AI models for  and nutrient deficiencies at an affordable price for the developing world."},{title:"Music Player",subtitle:"",link:"",image:"/images/projects/Music_Player.jpeg",date:"2023-10-28",desc:"A local music player built on the java framework"},{title:"Student Recruitment Portal",subtitle:"",image:"/images/projects/RMS.jpeg",date:"2023-11-07",desc:"A student management portal for the administration.It contains all the information about a student. Students can be sorted based on their grade, graduation year, and other parameters"}],d=()=>(0,u.jsx)(s.Z,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),o.map((t=>(0,u.jsx)(c,{data:t},t.title)))]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",u="day",c="week",o="month",d="quarter",h="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},M={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,o),i=n-s<0,a=e.clone().add(r+(i?-1:1),o);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:h,w:c,d:u,D:l,h:a,m:i,s:s,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=g;var b="$isDayjsObject",D=function(t){return t instanceof x||!(!t||!t[b])},S=function t(e,n,r){var s;if(!e)return v;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),n&&(y[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!r&&s&&(v=s),s||!r&&v},j=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=M;w.l=S,w.i=D,w.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function g(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return w},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return j(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<j(t)},p.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!w.u(e)||e,d=w.p(t),f=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,p=this.$D,M="set"+(this.$u?"UTC":"");switch(d){case h:return r?f(1,0):f(31,11);case o:return r?f(1,g):f(0,g+1);case c:var v=this.$locale().weekStart||0,y=($<v?$+7:$)-v;return f(r?p-y:p+(6-y),g);case u:case l:return m(M+"Hours",0);case a:return m(M+"Minutes",1);case i:return m(M+"Seconds",2);case s:return m(M+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,c=w.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[u]=d+"Date",n[l]=d+"Date",n[o]=d+"Month",n[h]=d+"FullYear",n[a]=d+"Hours",n[i]=d+"Minutes",n[s]=d+"Seconds",n[r]=d+"Milliseconds",n)[c],m=c===u?this.$D+(e-this.$W):e;if(c===o||c===h){var $=this.clone().set(l,1);$.$d[f](m),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[w.p(t)]()},p.add=function(r,d){var l,f=this;r=Number(r);var m=w.p(d),$=function(t){var e=j(f);return w.w(e.date(e.date()+Math.round(t*r)),f)};if(m===o)return this.set(o,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===u)return $(1);if(m===c)return $(7);var g=(l={},l[i]=e,l[a]=n,l[s]=t,l)[m]||1,p=this.$d.getTime()+r*g;return w.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),i=this.$H,a=this.$m,u=this.$M,c=n.weekdays,o=n.months,d=n.meridiem,h=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},l=function(t){return w.s(i%12||12,t,"0")},m=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace($,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,o,3);case"MMMM":return h(o,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,c,2);case"ddd":return h(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,l,f){var m,$=this,g=w.p(l),p=j(r),M=(p.utcOffset()-this.utcOffset())*e,v=this-p,y=function(){return w.m($,p)};switch(g){case h:m=y()/12;break;case o:m=y();break;case d:m=y()/3;break;case c:m=(v-M)/6048e5;break;case u:m=(v-M)/864e5;break;case a:m=v/n;break;case i:m=v/e;break;case s:m=v/t;break;default:m=v}return f?m:w.a(m)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return w.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),k=x.prototype;return j.prototype=k,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",u],["$M",o],["$y",h],["$D",l]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,x,j),t.$i=!0),j},j.locale=S,j.isDayjs=D,j.unix=function(t){return j(1e3*t)},j.en=y[v],j.Ls=y,j.p={},j}()}}]);
//# sourceMappingURL=161.68177afc.chunk.js.map