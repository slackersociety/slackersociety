/**handles:SFSIjqueryrandom-shuffle**/
window.Manipulator=function(e){"use strict";var t=window.console&&"function"==typeof window.console.log,n=function(t){var n=this;n.$el=e(t),n.init()};return n.prototype.init=function(){var e=this;e.initShuffle(),e.setupEvents()},n.prototype.initShuffle=function(){this.$el.shuffle({itemSelector:".shuffeldiv",speed:250,easing:"ease",columnWidth:function(t){return parseInt(e(".shuffeldiv").css("width"))},gutterWidth:function(t){return parseInt(e(".shuffeldiv").css("margin-left"))}}),this.shuffle=this.$el.data("shuffle")},n.prototype.setupEvents=function(){var t=this;e("#sfsi_wDiv").on("click",e.proxy(t.onRandomize,t)),t.$el.on("removed.shuffle",function(e,t,n){})},n.prototype.onAddClick=function(){var t=this,n=5,o=document.createDocumentFragment(),i=t.$el[0],s=[],f,r=["w2","h2","w3"],u,a,h,l;for(a=0;a<n;a++)h=Math.random(),u=document.createElement("div"),u.className="shuffeldiv",h>.8&&(l=Math.floor(3*Math.random()),u.className=u.className+" "+r[l]),s.push(u),o.appendChild(u);i.appendChild(o),f=e(s),t.shuffle.appended(f)},n.prototype.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},n.prototype.onRemoveClick=function(){var t=this,n=t.shuffle.visibleItems,o=Math.min(3,n),i=[],s=0,f=e();if(n){for(;s<o;s++)i.push(t.getRandomInt(0,n-1));e.each(i,function(e,n){f=f.add(t.shuffle.$items.eq(n))}),t.shuffle.remove(f)}},n.prototype.onRandomize=function(){var e=this,t={randomize:!0};e.shuffle.sort(t)},n}(jQuery);