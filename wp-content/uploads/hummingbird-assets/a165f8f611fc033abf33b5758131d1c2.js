/**handles:media-player**/
String.prototype.toFormattedDuration=function(){var t=parseInt(this,10),o=Math.floor(t/3600),r=Math.floor((t-3600*o)/60),a=t-3600*o-60*r;return o<10&&(o="0"+o),r<10&&(r="0"+r),a<10&&(a="0"+a),o>0?o+":"+r+":"+a:r+":"+a};