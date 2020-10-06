!function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=0)}([function(t,n,o){"use strict";o.r(n);var e=function(){function t(t){this.cnv=t;var n=t.getContext("2d");if(!n)throw new Error("Failed to get 2D context");this.ctx=n}return t.prototype.drawLetter=function(t,n,o){return!(t>39||n>19||o.length>1)&&(this.ctx.fillStyle="white",this.ctx.font="20px Arial",this.ctx.fillText(o,20*t+1,20*(n+1)),!0)},t.prototype.drawPixel=function(t,n){this.ctx.fillStyle="white",this.ctx.fillRect(5*t,5*n,5,5)},t.prototype.drawPixelRaw=function(t,n){this.ctx.fillStyle="white",this.ctx.fillRect(t,n,1,1)},t.prototype.clear=function(){this.ctx.clearRect(0,0,this.cnv.width,this.cnv.height)},t}(),r=function(){function t(t){if("number"==typeof t)this.val=t;else if(8==t.length){for(var n=0,o=7;o>=0;o--)n+=+t[o]*Math.pow(2,7-o);this.val=n}else this.val=0,console.trace("EightBit received an invalid boolean array:",t)}return t.prototype.toBin=function(){for(var t="",n=this.val;n;)t=n%2+t,n=Math.floor(n/2);for(;t.length<8;)t="0"+t;return t},t.prototype.toHex=function(){for(var t="",n=this.val;n;)t=n%16>9?["A","B","C","D","E","F","G"][n%16-10]+t:n%16+t,n=Math.floor(n/16);return"0x"+(t.length?t:0)},t.prototype.toInt=function(){return this.val},t.prototype.toArr=function(){return this.toBin().split("").map((function(t){return Boolean(NaN)}))},t.prototype.toString=function(){return this.toBin()},t}(),i={add:function(t,n){return new r(t.toInt()+n.toInt())},dif:function(t,n){return new r(t.toInt()-n.toInt())},invdif:function(t,n){return new r(n.toInt()-t.toInt())},mult:function(t,n){return new r(t.toInt()*n.toInt())},div:function(t,n){return new r(Math.floor(t.toInt()/n.toInt()))},fdiv:function(t,n){return new r(0)},and:function(t,n){for(var o=t.toBin(),e=n.toBin(),i="",c=0;c<8;c++)i+=o[c]==e[c]?"1":"0";return new r(i)},or:function(t,n){for(var o=t.toBin(),e=n.toBin(),i="",c=0;c<8;c++)i=i+ +o[c]||+e[c]?"1":"0";return new r(i)},xor:function(t,n){return new r(0)},not:function(t,n){for(var o=t.toBin(),e="",i=0;i<8;i++)e+=+!Math.floor(+o[i]);return new r(e)},shiftLeft:function(t,n){return new r(0)},gt:function(t,n){return new r(+(t.toInt()>n.toInt()))},st:function(t,n){return new r(+(t.toInt()<n.toInt()))},shiftRight:function(t,n){return new r(0)}};!function(){function t(t){this._val=Array(t).fill(new r(0))}t.prototype.getIndex=function(t){if(this._val.length>t)return this._val[t];throw new Error("Index out of range. i="+t+", len="+this._val.length)}}();function c(t){for(var n={},o=0;o<t;o++)n[o]=new r(0);return n}var l={mem:c(1024),get x(){return this.mem[0].toInt()},set x(t){this.mem[0]=new r(t<40?t:0)},get y(){return this.mem[1].toInt()},set y(t){this.mem[1]=new r(t<20?t:0)},set char(t){this.mem[40*this.y+this.x+2]=new r(t)},get char(){return this.mem[40*this.y+this.x+2].toInt()},rom:{0:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],32:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],65:[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1],66:[1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1],67:[0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1],68:[1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0],69:[1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1],70:[1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0],71:[0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0],72:[1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1],73:[0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1],74:[1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0],75:[1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1],76:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1],77:[1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1],78:[1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1],79:[0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0],80:[1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0],81:[0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1],82:[1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1],83:[0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0],84:[0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],85:[1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1],86:[1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0],87:[1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1],88:[1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1],89:[1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0],90:[1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1]}};function u(t,n){for(var o=[],e=0;e<n;e++){for(var r=[],i=0;i<t;i++)r.push(!1);o.push(r)}return o}var a=function(){function t(t,n,o){void 0===t&&(t=200),void 0===n&&(n=100),this.vram=u(t,n),this.mode=0,this.x=t,this.y=n,this.canvas=o}return t.prototype.render=function(){if(0==this.mode)for(var t=0;t<100;t++)for(var n=0;n<200;n++)this.vram[t][n]=n%5!=0&&l.rom[l.mem[40*Math.floor(t/5)+Math.floor(n/5)+2].toInt()][n%5-1+t%5*4]},t.prototype.display=function(t){void 0===t&&(t=!0),t&&this.canvas.clear();for(var n=0;n<100;n++)for(var o=0;o<200;o++)this.vram[n][o]&&this.canvas.drawPixel(o,n)},t.prototype.clearMemory=function(){this.vram=u(this.x,this.y)},t}(),f=function(){},s=function(){var t=this;return{this:this,0:f,1:f,2:function(){t.valBlock[t.valBlock[t.counter].toInt()]=new r(0)},3:function(){t.valBlock[t.valBlock[t.counter].toInt()]=t.normal},4:function(){t.normal=t.valBlock[t.counter]},5:function(){t.valBlock[t.valBlock[t.counter].toInt()]=t.carry},6:function(){t.normal=t.valBlock[t.counter]},7:function(){t.counter=t.valBlock[t.counter].toInt()},8:function(){1==t.normal.toInt()&&(t.counter=t.valBlock[t.counter].toInt())},9:f,10:function(){t.normal=t.ALU.add(t.normal,t.valBlock[t.counter])},11:function(){t.normal=t.ALU.dif(t.normal,t.valBlock[t.counter])},12:function(){t.normal=t.ALU.invdif(t.normal,t.valBlock[t.counter])},13:function(){t.normal=t.ALU.mult(t.normal,t.valBlock[t.counter])},14:function(){t.normal=t.ALU.div(t.normal,t.valBlock[t.counter])},15:f,16:f,17:f,18:function(){t.normal=t.ALU.and(t.normal,t.valBlock[t.counter])},19:function(){t.normal=t.ALU.or(t.normal,t.valBlock[t.counter])},20:function(){t.normal=t.ALU.xor(t.normal,t.valBlock[t.counter])},21:function(){t.normal=t.ALU.not(t.normal,t.valBlock[t.counter])},22:f,23:f,24:function(){t.normal=t.ALU.st(t.normal,t.valBlock[t.counter])},25:function(){t.normal=t.ALU.gt(t.normal,t.valBlock[t.counter])},26:f,27:f,28:f,29:f,30:f,31:f,32:f,33:f,34:f,35:f,36:f,37:f,38:f,39:f,40:f,41:function(){t.video.clearMemory(),t.video.display()},42:function(){t.video.render(),t.video.display()},43:f,44:f,45:function(){t.KASCII.y=t.valBlock[t.counter].toInt()},46:function(){t.KASCII.x=t.valBlock[t.counter].toInt()},47:function(){t.KASCII.char=t.valBlock[t.counter].toInt()},48:function(){t.KASCII.char=t.valBlock[t.counter].toInt(),t.KASCII.x=t.KASCII.x+1,0==t.KASCII.x&&(t.KASCII.y=t.KASCII.y+1)},49:function(){t.KASCII.mem=c(1024)},50:f,51:f}},v=function(){function t(t,n){this.ALU=i,this.insBlock=c(t),this.valBlock=c(t),this.normal=new r(0),this.carry=new r(0),this.counter=0,this.cacheSize=t,this.KASCII=l,this.Decoder=s.bind(this),this.video=new a(200,100,n)}return t.prototype.setIns=function(t,n){this.insBlock[t]=n},t.prototype.setVal=function(t,n){this.valBlock[t]=n},t.prototype.clk=function(){var t={ins:this.insBlock[this.counter],val:this.valBlock[this.counter],current:this.counter};return this.Decoder[t.ins.toInt()](),this.counter++,this.counter>=this.cacheSize&&(this.counter=0),t},t}(),h=document.getElementById("screen"),d=document.getElementById("clk"),m=document.getElementById("write"),I=document.getElementById("clkBtn"),p={ins:function(){for(var t=[],n=0;n<8;n++)t.push(document.getElementById("i"+n));return t}(),val:function(){for(var t=[],n=0;n<8;n++)t.push(document.getElementById("v"+n));return t}()},y=[document.getElementById("ins"),document.getElementById("val")],B=y[0],w=y[1];function x(t,n,o){B&&w&&(B.innerText=t[o].toInt().toString(),w.innerText=n[o].toInt().toString());for(var e=0;e<=7;e++){var r=p.ins[e],i=p.val[e];r&&i&&(r.innerText=t[e].toInt().toString(),r.classList.remove("current"),i.innerText=n[e].toInt().toString(),i.classList.remove("current"))}var c=p.ins[o],l=p.val[o];c&&l&&(c.classList.add("current"),l.classList.add("current"))}if(h&&d&&m&&I){h.height=400,h.width=800;var k=new v(8,new e(h));I.addEventListener("click",(function(){k.clk(),x(k.insBlock,k.valBlock,k.counter)})),m.addEventListener("click",(function(){for(var t,n,o=0;o<=7;o++)k.setIns(o,new r(+((null===(t=p.ins[o])||void 0===t?void 0:t.innerText)||0))),k.setVal(o,new r(+((null===(n=p.val[o])||void 0===n?void 0:n.innerText)||0))),x(k.insBlock,k.valBlock,k.counter);console.log(k)}))}}]);