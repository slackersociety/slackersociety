jQuery(document).ready(function($){
	'use strict';
    /* global jQuery, OT_UI, option_tree, ajaxurl, postL10n */

	var cbFinalScore = $('#cb_final_score'),
        cbGo = $('#cb_go'),
        cbLists = $('.cb-sortable');

	function cbScoreCalc() {

        var i = 0, cbTempTotal = 0;

        $( '#setting_cb_review_crits [id^="cb_review_crits_cb_cs_"]' ).each(function() {
            i +=1 ;
            cbTempTotal += parseFloat( $(this).val() );
            
        });
        var cbTotal = Math.round(cbTempTotal / i);

        $('#cb_final_score').val(cbTotal);

        if ( isNaN(cbTotal) ) { cbFinalScore.val(''); }

    } 

    cbGo.find(".ot-numeric-slider-wrap").each(function() {
        var hidden = $(this).find(".ot-numeric-slider-hidden-input"),
            value  = hidden.val(),
            helper = $(this).find(".ot-numeric-slider-helper-input");
        if ( ! value ) {
          value = hidden.data("min");
          helper.val(value)
        }
        $(this).find(".ot-numeric-slider").slider({
          min: hidden.data("min"),
          max: hidden.data("max"),
          step: hidden.data("step"),
          value: value, 
          slide: function(event, ui) {
            hidden.add(helper).val(ui.value).trigger('change');
            cbScoreCalc();
          },
          create: function() {
            hidden.val($(this).slider('value'));
          },
          change: function() {
            OT_UI.parse_condition();
            cbScoreCalc();
          }
        });
      });


    cbLists.sortable();

    jQuery(cbGo).on('change', '.ot-numeric-slider-hidden-input', function() {
        cbScoreCalc();
    });

    $('#setting_cb_review_crits').on('click', '.option-tree-setting-remove', function(event) {

        event.preventDefault();
        if ( $(this).parents('li').hasClass('ui-state-disabled') ) {
          alert(option_tree.remove_no);
          return false;
        }

        var agree = confirm(option_tree.remove_agree);

        if (agree) {

            var list = $(this).parents('ul');
            OT_UI.remove(this);
            setTimeout( function() { 
                OT_UI.update_ids(list); 
                cbScoreCalc();
            }, 200 );
            
        }
        return false;
    });

    $('#tax_meta_class_nonce').before('<h2 id="cb-header">15Zine Options</h2><h3 id="cb-subhead">General Options</h3>');
    $('#nonce-delete-mupload_cb_bg_image_field_id').closest('.form-field').before('<h3 id="cb-subhead">15Zine Background Options</h3>');  

    var cbHpb = $('#cb_hpb'),
        cbSectionA = $('#setting_cb_section_a'),
        cbSectionB = $('#setting_cb_section_b'),
        cbSectionC = $('#setting_cb_section_c'),
        cbSectionF = $('#setting_cb_section_f'),
        cbSelectedAd = cbHpb.find('.option-tree-ui-radio-image-selected[title^="Ad"]').closest('.option-tree-setting-body'),
        cbSelectedModule = cbHpb.find('.option-tree-ui-radio-image-selected[title^="Mo"]').closest('.option-tree-setting-body'),
        cbSelectedSlider = cbHpb.find('.option-tree-ui-radio-image-selected[title^="Sl"]').closest('.option-tree-setting-body'),
        cbSelectedCustom = cbHpb.find('.option-tree-ui-radio-image-selected[title^="Cu"]').closest('.option-tree-setting-body'),
        cbSelectedGrid = cbHpb.find('.option-tree-ui-radio-image-selected[title^="Gr"]').closest('.option-tree-setting-body'),
        cbLoadPostInput = cbHpb.find($("[id^='cbraj_']")),
        cbLoadPostInputVals = cbLoadPostInput.val();

    cbSectionA.before('<div id="setting_cb_title" class="format-settings"><div class="format-setting-wrap"><div class="format-setting-label"><h3 class="label">15Zine Homepage Builder</h3></div><div class="list-item-description">All the sections below are optional, allowing you to build any type of homepage you want. Remember to set "Page Attributes: Template" to "15Zine Drag & Drop Builder" and <strong>GET CREATIVE!</strong></div></div></div>');

    cbSelectedAd.each(function () {

        var cbCurrentSection = $(this).closest("[id^=setting_cb_section]").attr('id'),
            cbCurrentSectionID = cbCurrentSection.substr(cbCurrentSection.length - 1);
        $(this).cbSectionCode(cbCurrentSectionID, 'cbAd');

    });

    cbSelectedCustom.each(function () {

        var cbCurrentSection = $(this).closest("[id^=setting_cb_section]").attr('id'),
            cbCurrentSectionID = cbCurrentSection.substr(cbCurrentSection.length - 1);
        $(this).cbSectionCode(cbCurrentSectionID, 'cbCode');

    });

    cbSelectedModule.each(function () {

        var cbCurrentSection = $(this).closest("[id^=setting_cb_section]").attr('id'),
            cbCurrentSectionID = cbCurrentSection.substr(cbCurrentSection.length - 1);
        $(this).cbSectionCode(cbCurrentSectionID, 'cbModule');

    });

    cbSelectedSlider.each(function () {

        var cbCurrentSection = $(this).closest("[id^=setting_cb_section]").attr('id'),
            cbCurrentSectionID = cbCurrentSection.substr(cbCurrentSection.length - 1);
        $(this).cbSectionCode(cbCurrentSectionID, 'cbSlider');

    });

    cbSelectedGrid.each(function () {

        var cbCurrentSection = $(this).closest("[id^=setting_cb_section]").attr('id'),
            cbCurrentSectionID = cbCurrentSection.substr(cbCurrentSection.length - 1);
        $(this).cbSectionCode(cbCurrentSectionID, 'cbGrid');

    });

    cbLoadPostInput.each(function () {

        var cbCurrentPost = $(this),
            cbAllPosts = cbCurrentPost.val().split('<cb>'),
            cbCurrentPostPrev = cbCurrentPost.prev(),
            cbAllPostsLength = cbAllPosts.length;



        for ( var i = 0; i < cbAllPostsLength; i++ ) {
          if (cbAllPosts[i].trim()) {
            cbCurrentPostPrev.before('<span class="cb-post-added">' + cbAllPosts[i] + '</span>');
          }
        }

    });

    $(document).on('click', '.cb-post-added', function () {

            var cbCurrentPostAdded = $(this),
                cbCurrentParent = cbCurrentPostAdded.parent(),
                cbLastInput = $(':last-child', cbCurrentParent),
                cbCurrentText;

            cbCurrentPostAdded.remove();

            var cbLastTest = cbCurrentParent.find('.cb-post-added');
            cbLastInput.val( '' );

            cbLastTest.each(function () {
              cbCurrentText = $(this).text();
              var cbCurrentInputVal = cbLastInput.val();
              cbLastInput.val( cbCurrentInputVal + cbCurrentText + '<cb>' );
            });
    });

    cbHpb.find('.option-tree-ui-radio-image-selected[title="Module B"]').closest('.ui-state-default').addClass('cb-half-width');
    cbHpb.find('.option-tree-ui-radio-image-selected[title="Custom Code Half-Width"]').closest('.ui-state-default').addClass('cb-half-width');
    cbHpb.find('.option-tree-ui-radio-image-selected[title="Module Reviews Half-Width"]').closest('.ui-state-default').addClass('cb-half-width');
    cbHpb.find('.option-tree-ui-radio-image-selected[title="Ad: 336x280"]').closest('.ui-state-default').addClass('cb-half-width');

    cbSectionA.add(cbSectionB).add(cbSectionC).add(cbSectionF).on('click', '.option-tree-ui-radio-image', function() {

      var cbCurrentBlock = $(this).closest('.option-tree-setting-body'),
          cbCurrentSection = $(this).closest("[id^=setting_cb_section]").parent().closest("[id^=setting_cb_section]").attr('id'),
          cbCurrentSectionID = cbCurrentSection.substr(cbCurrentSection.length - 1),
          cbCurrentModuleTitle = $(this).attr('title'),
          cbCurrentModuleTitleTrim = cbCurrentModuleTitle.substring(0, 2),
          cbCurrentModule = '';

      if ( cbCurrentModuleTitleTrim === 'Ad' )  {
        cbCurrentModule = 'cbAd';
      } else if ( cbCurrentModuleTitleTrim === 'Mo' ) {
        cbCurrentModule = 'cbModule';
      } else if ( cbCurrentModuleTitleTrim === 'Sl' )  {
        cbCurrentModule = 'cbSlider';
      } else if ( cbCurrentModuleTitleTrim === 'Gr' ) {
        cbCurrentModule = 'cbGrid';
      } else if ( cbCurrentModuleTitleTrim === 'Cu') {
        cbCurrentModule = 'cbCode';
      }

      cbCurrentBlock.cbSectionCode(cbCurrentSectionID, cbCurrentModule);

       if ( ( cbCurrentModuleTitle === 'Ad: 336x280') || ( cbCurrentModuleTitle === 'Module Reviews Half-Width') || ( cbCurrentModuleTitle === 'Module B') || ( cbCurrentModuleTitle === 'Custom Code Half-Width') )  {
        $(this).closest('.ui-state-default').addClass('cb-half-width');
      } else {
        $(this).closest('.ui-state-default').removeClass('cb-half-width');
      }

    });

    var cbCatOffset = $(".at-select[name='cb_cat_offset']").closest('.form-field'),
        cbCatGridSlider = $(".at-select[name='cb_cat_featured_op']"),
        cbCatGridSliderValue = $(".at-select[name='cb_cat_featured_op'] option:selected").text();

    if ( cbCatGridSliderValue === 'Off' ) {
        cbCatOffset.hide();
    }

    cbCatGridSlider.change(function() {

        if ( this.value === 'Off' ) {
            cbCatOffset.slideUp();
        } else {
            cbCatOffset.slideDown();
        }

    });

});

jQuery('select[id^="widget-cb-popular-posts"]').on('change', function() {

    var cbInput = jQuery(this),
        cbInputChanger = cbInput.val(),
        cbDateFilter = cbInput.closest('p').next();

    if ( cbInputChanger == 'cb-comments' ) {
        cbDateFilter.slideUp();
    } else {
        cbDateFilter.slideDown();
    }

});

(function( $ ) {
 $.fn.cbSectionCode = function( cb_current_section ) {

    var cbCurrentBlock = $(this),
        cbTagInput = cbCurrentBlock.find($("[id^='cb_section_" + cb_current_section + "_ta']")),
        cbPostInput = cbCurrentBlock.find($("[id^='cbaj_']"));
        cbTagInput.suggest( ajaxurl + '?action=ajax-tag-search&tax=post_tag', { delay: 500, minchars: 2, multiple: true, multipleSep: postL10n.comma } );
        cbPostInput.suggest( ajaxurl + '?action=cb-ajax-post-search', { delay: 500, minchars: 2, multiple: true, multipleSep: ' ' } );

        cbPostInput.change(function() {

            var cbInputChange = $(this);
            setTimeout(function () {
                var cbPostInputVal = cbInputChange.val().trim(),
                    cbRealInput = cbInputChange.next(),
                    cbRealInputVal = cbRealInput.val();

                if ( cbPostInputVal.trim() ) {
                    cbInputChange.before( '<span class="cb-post-added">'+ cbPostInputVal +'</span>' );
                    cbRealInput.val( cbRealInputVal + '<cb>' + cbPostInputVal );
                    cbInputChange.val( '' );
                }
            }, 600);
        });

   


    return this;
    
    };

})( jQuery );
/*
 * SOL - Searchable Option List jQuery plugin
 * Version 2.0.2
 * https://pbauerochse.github.io/searchable-option-list/
 *
 * Copyright 2015, Patrick Bauerochse
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 */

/*jslint nomen: true */
(function(c,k,m){var l=function(a,b){this.$originalElement=a;this.options=b;this.metadata=this.$originalElement.data("sol-options")};l.prototype={SOL_OPTION_FORMAT:{type:"option",value:void 0,selected:!1,disabled:!1,label:void 0,tooltip:void 0,cssClass:""},SOL_OPTIONGROUP_FORMAT:{type:"optiongroup",label:void 0,tooltip:void 0,disabled:!1,children:void 0},DATA_KEY:"sol-element",WINDOW_EVENTS_KEY:"sol-window-events",defaults:{data:void 0,name:void 0,texts:{noItemsAvailable:"No entries found",selectAll:"Select all", selectNone:"Select none",quickDelete:"&times;",searchplaceholder:"Click here to search",loadingData:"Still loading data...",itemsSelected:"{$a} items selected"},events:{onInitialized:void 0,onRendered:void 0,onOpen:void 0,onClose:void 0,onChange:void 0,onScroll:function(){var a=this.$input.offset().top-this.config.scrollTarget.scrollTop()+this.$input.outerHeight(!1),b=this.$selectionContainer.outerHeight(!1),c=a+b,c=this.config.displayContainerAboveInput||m.documentElement.clientHeight-this.config.scrollTarget.scrollTop()< c,e=this.$innerContainer.outerWidth(!1)-parseInt(this.$selectionContainer.css("border-left-width"),10)-parseInt(this.$selectionContainer.css("border-right-width"),10);c?(a=this.$input.offset().top-b-this.config.scrollTarget.scrollTop()+parseInt(this.$selectionContainer.css("border-bottom-width"),10),this.$container.removeClass("sol-selection-bottom").addClass("sol-selection-top")):this.$container.removeClass("sol-selection-top").addClass("sol-selection-bottom");"block"!==this.$innerContainer.css("display")? e*=1.2:(b=c?"border-bottom-right-radius":"border-top-right-radius",this.$selectionContainer.css(b,"initial"),this.$actionButtons&&this.$actionButtons.css(b,"initial"));this.$selectionContainer.css("top",Math.floor(a)).css("left",Math.floor(this.$container.offset().left)).css("width",e);this.config.displayContainerAboveInput=c}},selectAllMaxItemsThreshold:30,showSelectAll:function(){return this.config.multiple&&this.config.selectAllMaxItemsThreshold&&this.items&&this.items.length<=this.config.selectAllMaxItemsThreshold}, useBracketParameters:!1,multiple:void 0,showSelectionBelowList:!1,allowNullSelection:!1,scrollTarget:void 0,maxHeight:void 0,converter:void 0,asyncBatchSize:300,maxShow:0},init:function(){this.config=c.extend(!0,{},this.defaults,this.options,this.metadata);var a=this._getNameAttribute(),b=this;if(a)return"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),this.config.multiple=this.config.multiple||this.$originalElement.attr("multiple"), this.config.scrollTarget||(this.config.scrollTarget=c(k)),this._registerWindowEventsIfNeccessary(),this._initializeUiElements(),this._initializeInputEvents(),setTimeout(function(){b._initializeData();b.$originalElement.data(b.DATA_KEY,b).removeAttr("name").data("sol-name",a)},0),this.$originalElement.hide(),this.$container.css("visibility","initial").show(),this;this._showErrorLabel("name attribute is required")},_getNameAttribute:function(){return this.config.name||this.$originalElement.data("sol-name")|| this.$originalElement.attr("name")},_showErrorLabel:function(a){a=c('<div style="color: red; font-weight: bold;" />').html(a);this.$container?this.$container.append(a):a.insertAfter(this.$originalElement)},_registerWindowEventsIfNeccessary:function(){k[this.WINDOW_EVENTS_KEY]||(c(m).click(function(a){var b=c(a.target);a=b.closest(".sol-selection-container");var b=b.closest(".sol-inner-container"),d;b.length?d=b.first().parent(".sol-container"):a.length&&(d=a.first().parent(".sol-container"));c(".sol-active").not(d).each(function(a, b){c(b).data(l.prototype.DATA_KEY).close()})}),k[this.WINDOW_EVENTS_KEY]=!0)},_initializeUiElements:function(){var a=this;this.internalScrollWrapper=function(){c.isFunction(a.config.events.onScroll)&&a.config.events.onScroll.call(a)};this.$input=c('<input type="text"/>').attr("placeholder",this.config.texts.searchplaceholder);this.$noResultsItem=c('<div class="sol-no-results"/>').html(this.config.texts.noItemsAvailable).hide();this.$loadingData=c('<div class="sol-loading-data"/>').html(this.config.texts.loadingData); this.$xItemsSelected=c('<div class="sol-results-count"/>');this.$caret=c('<div class="sol-caret-container"><b class="sol-caret"/></div>').click(function(b){a.toggle();b.preventDefault();return!1});var b=c('<div class="sol-input-container"/>').append(this.$input);this.$innerContainer=c('<div class="sol-inner-container"/>').append(b).append(this.$caret);this.$selection=c('<div class="sol-selection"/>');this.$selectionContainer=c('<div class="sol-selection-container"/>').append(this.$noResultsItem).append(this.$loadingData).append(this.$selection); this.$container=c('<div class="sol-container"/>').hide().data(this.DATA_KEY,this).append(this.$selectionContainer).append(this.$innerContainer).insertBefore(this.$originalElement);this.$showSelectionContainer=c('<div class="sol-current-selection"/>');this.config.showSelectionBelowList?this.$showSelectionContainer.insertAfter(this.$innerContainer):this.$showSelectionContainer.insertBefore(this.$innerContainer);this.config.maxHeight&&this.$selection.css("max-height",this.config.maxHeight);var d=this.$originalElement.attr("class"), b=this.$originalElement.attr("style"),e=[],e=[];if(d&&0<d.length)for(e=d.split(/\s+/),d=0;d<e.length;d++)this.$container.addClass(e[d]);if(b&&0<b.length)for(e=b.split(/\;/),d=0;d<e.length;d++)b=e[d].split(/\s*\:\s*/g),2===b.length&&(0<=b[0].toLowerCase().indexOf("height")?this.$innerContainer.css(b[0].trim(),b[1].trim()):this.$container.css(b[0].trim(),b[1].trim()));"block"!==this.$originalElement.css("display")&&this.$container.css("width",this._getActualCssPropertyValue(this.$originalElement,"width")); c.isFunction(this.config.events.onRendered)&&this.config.events.onRendered.call(this,this)},_getActualCssPropertyValue:function(a,b){var c=a.get(0),e=a.css("display");a.css("display","none");if(c.currentStyle)return c.currentStyle[b];if(k.getComputedStyle)return m.defaultView.getComputedStyle(c,null).getPropertyValue(b);a.css("display",e);return a.css(b)},_initializeInputEvents:function(){var a=this,b=this.$input.parents("form").first();if(b&&1===b.length&&!b.data(this.WINDOW_EVENTS_KEY)){var d=function(){var d= [];b.find(".sol-option input").each(function(a,b){var g=c(b),k=g.data("sol-item").selected;g.prop("checked")!==k&&(g.prop("checked",k).trigger("sol-change",!0),d.push(g))});0<d.length&&c.isFunction(a.config.events.onChange)&&a.config.events.onChange.call(a,a,d)};b.on("reset",function(b){d.call(a);setTimeout(function(){d.call(a)},100)});b.data(this.WINDOW_EVENTS_KEY,!0)}this.$input.focus(function(){a.open()}).on("propertychange input",function(b){var c=!0;"propertychange"==b.type&&(c="value"==b.originalEvent.propertyName.toLowerCase()); c&&a._applySearchTermFilter()});this.$container.on("keydown",function(b){var d=b.keyCode;if(!a.$noResultsItem.is(":visible")){var f,g;f=!1;g=a.$selection.find(".sol-option:visible");40===d||38===d?(a._setKeyBoardNavigationMode(!0),f=a.$selection.find(".sol-option.keyboard-selection"),d=38===d?-1:1,d=g.index(f)+d,0>d?d=g.length-1:d>=g.length&&(d=0),f.removeClass("keyboard-selection"),g=c(g[d]).addClass("keyboard-selection"),a.$selection.scrollTop(a.$selection.scrollTop()+g.position().top),f=!0):!0=== a.keyboardNavigationMode&&32===d&&(f=a.$selection.find(".sol-option.keyboard-selection input"),f.prop("checked",!f.prop("checked")).trigger("change"),f=!0);if(f)return b.preventDefault(),!1}}).on("keyup",function(b){27===b.keyCode&&(!0===a.keyboardNavigationMode?a._setKeyBoardNavigationMode(!1):""===a.$input.val()?(a.$caret.trigger("click"),a.$input.trigger("blur")):a.$input.val("").trigger("input"))})},_setKeyBoardNavigationMode:function(a){a?(this.keyboardNavigationMode=!0,this.$selection.addClass("sol-keyboard-navigation")): (this.keyboardNavigationMode=!1,this.$selection.find(".sol-option.keyboard-selection"),this.$selection.removeClass("sol-keyboard-navigation"),this.$selectionContainer.find(".sol-option.keyboard-selection").removeClass("keyboard-selection"),this.$selection.scrollTop(0))},_applySearchTermFilter:function(){if(this.items&&0!==this.items.length){var a=(this.$input.val()||"").toLowerCase();this.$selectionContainer.find(".sol-filtered-search").removeClass("sol-filtered-search");this._setNoResultsItemVisible(!1); 0<a.trim().length&&this._findTerms(this.items,a);c.isFunction(this.config.events.onScroll)&&this.config.events.onScroll.call(this)}},_findTerms:function(a,b){if(a&&c.isArray(a)&&0!==a.length){var d=this;this._setKeyBoardNavigationMode(!1);c.each(a,function(a,c){if("option"===c.type){var f=c.displayElement;-1===(c.label+" "+c.tooltip).trim().toLowerCase().indexOf(b)&&f.addClass("sol-filtered-search")}else d._findTerms(c.children,b),0===c.displayElement.find(".sol-option:not(.sol-filtered-search)").length&& c.displayElement.addClass("sol-filtered-search")});this._setNoResultsItemVisible(0===this.$selectionContainer.find(".sol-option:not(.sol-filtered-search)").length)}},_initializeData:function(){this.config.data?c.isFunction(this.config.data)?this.items=this._fetchDataFromFunction(this.config.data):c.isArray(this.config.data)?this.items=this._fetchDataFromArray(this.config.data):"string"===typeof this.config.data?this._loadItemsFromUrl(this.config.data):this._showErrorLabel("Unknown data type"):this.items= this._detectDataFromOriginalElement();this.items&&this._processDataItems(this.items)},_detectDataFromOriginalElement:function(){if("select"===this.$originalElement.prop("tagName").toLowerCase()){var a=this,b=[];c.each(this.$originalElement.children(),function(d,h){var f=c(h),g=f.prop("tagName").toLowerCase();"option"===g?(f=a._processSelectOption(f))&&b.push(f):"optgroup"===g?(f=a._processSelectOptgroup(f))&&b.push(f):a._showErrorLabel("Invalid element found in select: "+g+". Only option and optgroup are allowed")}); return this._invokeConverterIfNeccessary(b)}if(this.$originalElement.data("sol-data")){var d=this.$originalElement.data("sol-data");return this._invokeConverterIfNeccessary(d)}this._showErrorLabel('Could not determine data from original element. Must be a select or data must be provided as data-sol-data="" attribute')},_processSelectOption:function(a){return c.extend({},this.SOL_OPTION_FORMAT,{value:a.val(),selected:a.prop("selected"),disabled:a.prop("disabled"),cssClass:a.attr("class"),label:a.html(), tooltip:a.attr("title"),element:a})},_processSelectOptgroup:function(a){var b=this,d=c.extend({},this.SOL_OPTIONGROUP_FORMAT,{label:a.attr("label"),tooltip:a.attr("title"),disabled:a.prop("disabled"),children:[]});a=a.children("option");c.each(a,function(a,h){var f=c(h),f=b._processSelectOption(f);d.disabled&&(f.disabled=!0);d.children.push(f)});return d},_fetchDataFromFunction:function(a){return this._invokeConverterIfNeccessary(a(this))},_fetchDataFromArray:function(a){return this._invokeConverterIfNeccessary(a)}, _loadItemsFromUrl:function(a){var b=this;c.ajax(a,{success:function(a){b.items=b._invokeConverterIfNeccessary(a);b.items&&b._processDataItems(b.items)},error:function(c,e,h){b._showErrorLabel("Error loading from url "+a+": "+h)},dataType:"json"})},_invokeConverterIfNeccessary:function(a){return c.isFunction(this.config.converter)?this.config.converter.call(this,this,a):a},_processDataItems:function(a){if(a)if(0===a.length)this._setNoResultsItemVisible(!0),this.$loadingData.remove();else{var b=this, d=0,e=function(){this.$loadingData.remove();this._initializeSelectAll();c.isFunction(this.config.events.onInitialized)&&this.config.events.onInitialized.call(this,this,a)},h=function(){for(var c=0,g;c++<b.config.asyncBatchSize&&d<a.length;)if(g=a[d++],g.type===b.SOL_OPTION_FORMAT.type)b._renderOption(g);else if(g.type===b.SOL_OPTIONGROUP_FORMAT.type)b._renderOptiongroup(g);else{b._showErrorLabel("Invalid item type found "+g.type);return}d>=a.length?e.call(b):setTimeout(h,0)};h.call(this)}else this._showErrorLabel("Data items not present. Maybe the converter did not return any values")}, _renderOption:function(a,b){var d=this,e=b||this.$selection,h,f=c('<div class="sol-label-text"/>').html(0===a.label.trim().length?"&nbsp;":a.label).addClass(a.cssClass),g=this._getNameAttribute();this.config.multiple?(h=c('<input type="checkbox" class="sol-checkbox"/>'),this.config.useBracketParameters&&(g+="[]")):h=c('<input type="radio" class="sol-radio"/>').on("change",function(){d.$selectionContainer.find('input[type="radio"][name="'+g+'"]').not(c(this)).trigger("sol-deselect")}).on("sol-deselect", function(){d._removeSelectionDisplayItem(c(this))});h.on("change",function(a,b){c(this).trigger("sol-change",b)}).on("sol-change",function(a,b){d._selectionChange(c(this),b)}).data("sol-item",a).prop("checked",a.selected).prop("disabled",a.disabled).attr("name",g).val(a.value);f=c('<label class="sol-label"/>').attr("title",a.tooltip).append(h).append(f);f=c('<div class="sol-option"/>').append(f);a.displayElement=f;e.append(f);a.selected&&this._addSelectionDisplayItem(h)},_renderOptiongroup:function(a){var b= this,d=c('<div class="sol-optiongroup-label"/>').attr("title",a.tooltip).html(a.label),e=c('<div class="sol-optiongroup"/>').append(d);a.disabled&&e.addClass("disabled");c.isArray(a.children)&&c.each(a.children,function(a,c){b._renderOption(c,e)});a.displayElement=e;this.$selection.append(e)},_initializeSelectAll:function(){if(!0===this.config.showSelectAll||c.isFunction(this.config.showSelectAll)&&this.config.showSelectAll.call(this)){var a=this,b=c('<a href="#" class="sol-deselect-all"/>').html(this.config.texts.selectNone).click(function(b){a.deselectAll(); b.preventDefault();return!1}),d=c('<a href="#" class="sol-select-all"/>').html(this.config.texts.selectAll).click(function(b){a.selectAll();b.preventDefault();return!1});this.$actionButtons=c('<div class="sol-action-buttons"/>').append(d).append(b).append('<div class="sol-clearfix"/>');this.$selectionContainer.prepend(this.$actionButtons)}},_selectionChange:function(a,b){if(this.$originalElement&&"select"===this.$originalElement.prop("tagName").toLowerCase()){var d=this;this.$originalElement.find("option").each(function(b, f){var e=c(f);e.val()===a.val()&&(e.prop("selected",a.prop("checked")),d.$originalElement.trigger("change"))})}a.prop("checked")?this._addSelectionDisplayItem(a):this._removeSelectionDisplayItem(a);this.config.multiple?this.config.scrollTarget.trigger("scroll"):this.close();var e=this.$showSelectionContainer.children(".sol-selected-display-item");0!=this.config.maxShow&&e.length>this.config.maxShow?(e.hide(),e=this.config.texts.itemsSelected.replace("{$a}",e.length),this.$xItemsSelected.html('<div class="sol-selected-display-item-text">'+ e+"<div>"),this.$showSelectionContainer.append(this.$xItemsSelected),this.$xItemsSelected.show()):(e.show(),this.$xItemsSelected.hide());!b&&c.isFunction(this.config.events.onChange)&&this.config.events.onChange.call(this,this,a)},_addSelectionDisplayItem:function(a){var b=a.data("sol-item"),d=b.displaySelectionItem;d||(d=c('<span class="sol-selected-display-item-text" />').html(b.label),d=c('<div class="sol-selected-display-item"/>').append(d).attr("title",b.tooltip).appendTo(this.$showSelectionContainer), !this.config.multiple&&!this.config.allowNullSelection||a.prop("disabled")||c('<span class="sol-quick-delete"/>').html(this.config.texts.quickDelete).click(function(){a.prop("checked",!1).trigger("change")}).prependTo(d),b.displaySelectionItem=d)},_removeSelectionDisplayItem:function(a){a=a.data("sol-item");var b=a.displaySelectionItem;b&&(b.remove(),a.displaySelectionItem=void 0)},_setNoResultsItemVisible:function(a){a?(this.$noResultsItem.show(),this.$selection.hide(),this.$actionButtons&&this.$actionButtons.hide()): (this.$noResultsItem.hide(),this.$selection.show(),this.$actionButtons&&this.$actionButtons.show())},isOpen:function(){return this.$container.hasClass("sol-active")},isClosed:function(){return!this.isOpen()},toggle:function(){this.isOpen()?this.close():this.open()},open:function(){this.isClosed()&&(this.$container.addClass("sol-active"),this.config.scrollTarget.bind("scroll",this.internalScrollWrapper).trigger("scroll"),c(k).on("resize",this.internalScrollWrapper),c.isFunction(this.config.events.onOpen)&& this.config.events.onOpen.call(this,this))},close:function(){this.isOpen()&&(this._setKeyBoardNavigationMode(!1),this.$container.removeClass("sol-active"),this.config.scrollTarget.unbind("scroll",this.internalScrollWrapper),c(k).off("resize"),this.$input.val(""),this._applySearchTermFilter(),this.config.displayContainerAboveInput=void 0,c.isFunction(this.config.events.onClose)&&this.config.events.onClose.call(this,this))},selectAll:function(){if(this.config.multiple){var a=this.$selectionContainer.find('input[type="checkbox"]:not([disabled], :checked)').prop("checked", !0).trigger("change",!0);this.close();c.isFunction(this.config.events.onChange)&&this.config.events.onChange.call(this,this,a)}},deselectAll:function(){if(this.config.multiple){var a=this.$selectionContainer.find('input[type="checkbox"]:not([disabled]):checked').prop("checked",!1).trigger("change",!0);this.close();c.isFunction(this.config.events.onChange)&&this.config.events.onChange.call(this,this,a)}},getSelection:function(){return this.$selection.find("input:checked")}};l.defaults=l.prototype.defaults; k.SearchableOptionList=l;c.fn.searchableOptionList=function(a){var b=[];this.each(function(){var d=c(this),e=d.data(l.prototype.DATA_KEY);if(e)b.push(e);else{var h=new l(d,a);b.push(h);setTimeout(function(){h.init()},0)}});return 1===b.length?b[0]:b}})(jQuery,window,document);
(function( $ ) {
    'use strict';
    var cbWidgetLd = $('#cb-admin-wrap').find('[id^="cb-cat-"]'),
        cbWidgetLdWds = $('#widgets-right').find('[id^="cb-cat-"]');
    if (! cbWidgetLd.hasClass('cb-sorted') ) {
        cbWidgetLd.addClass('cb-sorted').searchableOptionList();
    }
    if (! cbWidgetLdWds.hasClass('cb-sorted') ) {
        cbWidgetLdWds.addClass('cb-sorted').searchableOptionList();
    }

    $( document ).on( 'widget-added widget-updated', function(event, widget) {
        var cbWidget = widget.find('[id^="cb-cat-"]');
        if (! cbWidget.hasClass('cb-sorted') ) {
            cbWidget.addClass('cb-sorted').searchableOptionList();
        }
    });
})( jQuery );