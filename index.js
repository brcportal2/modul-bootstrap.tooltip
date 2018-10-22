'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};if('undefined'==typeof jQuery)throw new Error('Bootstrap\'s JavaScript requires jQuery');+function(a){'use strict';var b=a.fn.jquery.split(' ')[0].split('.');if(2>b[0]&&9>b[1]||1==b[0]&&9==b[1]&&1>b[2])throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')}(jQuery),+function(a){'use strict';var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init('tooltip',a,b)};b.VERSION='3.3.2',b.TRANSITION_DURATION=150,b.DEFAULTS={animation:!0,placement:'top',selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:!1,container:!1,viewport:{selector:'body',padding:0},preventHideOnFocus:!1,innerPrefix:'.tooltip-inner',arrowPrefix:'.tooltip-arrow',offset:{top:0,left:0}},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e,f=this.options.trigger.split(' '),g=f.length;g--;)if(e=f[g],'click'==e)this.$element.on('click.'+this.type,this.options.selector,a.proxy(this.toggle,this));else if('manual'!=e){var h='hover'==e?'mouseenter':'focusin',j='hover'==e?'mouseleave':'focusout';this.$element.on(h+'.'+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(j+'.'+this.type,this.options.selector,a.proxy(this.leave,this))}this.options.selector?this._options=a.extend({},this.options,{trigger:'manual',selector:''}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&'number'==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data('bs.'+this.type);return c&&c.$tip&&c.$tip.is(':visible')?void(c.hoverState='in'):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data('bs.'+this.type,c)),clearTimeout(c.timeout),c.hoverState='in',c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){'in'==c.hoverState&&c.show()},c.options.delay.show)):c.show())},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data('bs.'+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data('bs.'+this.type,c)),clearTimeout(c.timeout),c.hoverState='out',c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){'out'==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.updatePlacement=function(){var b=this.tip(),c='function'==typeof this.options.placement?this.options.placement.call(this,b[0],this.$element[0]):this.options.placement,d=/\s?auto?\s?/i,e=d.test(c);e&&(c=c.replace(d,'')||'top'),b.addClass(c);var f=this.getPosition(),g=b[0].offsetWidth,h=b[0].offsetHeight;if(e){var i=c,j=this.options.container?a(this.options.container):this.$element.parent(),k=this.getPosition(j);c='bottom'==c&&f.bottom+h>k.bottom?'top':'top'==c&&f.top-h<k.top?'bottom':'right'==c&&f.right+g>k.width?'left':'left'==c&&f.left-g<k.left?'right':c,b.removeClass(i).addClass(c)}var l=this.getCalculatedOffset(c,f,g,h,this.options.offset);this.applyPlacement(l,c)},b.prototype.show=function(){var c=a.Event('show.bs.'+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(c);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(c.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr('id',g),this.$element.attr('aria-describedby',g),this.options.animation&&f.addClass('fade');var h='function'==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,'')||'top'),f.detach().css({top:0,left:0,display:'block'}).addClass(h).data('bs.'+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h='bottom'==h&&k.bottom+m>p.bottom?'top':'top'==h&&k.top-m<p.top?'bottom':'right'==h&&k.right+l>p.width?'left':'left'==h&&k.left-l<p.left?'right':h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m,this.options.offset);this.applyPlacement(q,h),this.options.preventHideOnFocus&&(f.on('mouseenter',function(){clearTimeout(e.timeout)}),f.on('mouseleave',function(){e.hide()}));var r=function(){var a=e.hoverState;e.$element.trigger('shown.bs.'+e.type),e.hoverState=null,'out'==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass('fade')?f.one('bsTransitionEnd',r).emulateTransitionEnd(b.TRANSITION_DURATION):r()}if(this.options.autoHide){var s=this;clearInterval(this.timeoutAutoHide),this.timeoutAutoHide=setTimeout(function(){s.hide()},this.options.autoHide)}},b.prototype.recalculatePosition=function(){var b=a.Event('show.bs.'+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip(),d='function'==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=this.getPosition(),f=c[0].offsetWidth,g=c[0].offsetHeight,h=this.getCalculatedOffset(d,e,f,g,this.options.offset);this.applyPlacement(h,d),this.options.preventHideOnFocus&&(c.on('mouseenter',function(){clearTimeout(that.timeout)}),c.on('mouseleave',function(){that.hide()}))}},b.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css('margin-top'),10),h=parseInt(d.css('margin-left'),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function c(a){var b=Math.round;d.css({top:b(a.top),left:b(a.left)})}},b),0),d.addClass('in');var i=d[0].offsetWidth,j=d[0].offsetHeight;'top'==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?'offsetWidth':'offsetHeight';d.offset(b),this.replaceArrow(m,d[0][n],l)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?'left':'top',50*(1-a/b)+'%').css(c?'top':'left','')},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(this.options.innerPrefix)[this.options.html?'html':'text'](b),a.removeClass('fade in top bottom left right')},b.prototype.hide=function(c){function d(){'in'!=f.hoverState&&g.detach(),f.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+f.type),c&&c()}var f=this,g=this.tip(),h=a.Event('hide.bs.'+this.type);if(this.$element.trigger(h),!h.isDefaultPrevented())return g.removeClass('in'),a.support.transition&&this.$tip.hasClass('fade')?g.one('bsTransitionEnd',d).emulateTransitionEnd(b.TRANSITION_DURATION):d(),this.hoverState=null,this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr('title')||'string'!=typeof a.attr('data-original-title'))&&a.attr('data-original-title',a.attr('title')||'').attr('title','')},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d='BODY'==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},b.prototype.getCalculatedOffset=function(a,b,c,d,e){return'bottom'==a?{top:e.top+b.top+b.height,left:e.left+b.left+b.width/2-c/2}:'top'==a?{top:e.top+b.top-d,left:e.left+b.left+b.width/2-c/2}:'left'==a?{top:e.top+b.top+b.height/2-d/2,left:e.left+b.left-c}:{top:e.top+b.top+b.height/2-d/2,left:e.left+b.left+b.width}},b.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr('data-original-title')||('function'==typeof c.title?c.title.call(b[0]):c.title),a},b.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(this.options.arrowPrefix)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data('bs.'+this.type),!c&&(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data('bs.'+this.type,c))),c.tip().hasClass('in')?c.leave(c):c.enter(c)},b.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off('.'+a.type).removeData('bs.'+a.type)})};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data('bs.tooltip'),f='object'==('undefined'==typeof c?'undefined':_typeof(c))&&c;(e||'destroy'!=c)&&(!e&&d.data('bs.tooltip',e=new b(this,f)),'string'==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery);
