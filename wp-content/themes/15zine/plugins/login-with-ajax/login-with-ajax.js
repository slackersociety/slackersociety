var cbDoc = jQuery(document),
cbLWA = jQuery('#cb-lwa');

jQuery(document).ready( function($) {

 	$('form.lwa-form, form.lwa-remember, form.lwa-register-form').submit(function(event){
 		event.preventDefault();
 		var form = $(this);
 		var statusElement = form.find('.lwa-status');
 
 		var ajaxFlag = form.find('.lwa-ajax');
 		if( ajaxFlag.length == 0 ){
 			ajaxFlag = $('<input class="lwa-ajax" name="lwa" type="hidden" value="1" />');
 			form.prepend(ajaxFlag);
 		}

		//Make Ajax Call
		$.ajax({
			type : 'POST',
			url : form.attr('action'),
			data : form.serialize(),
			 beforeSend : function(){
                cbLWA.addClass('cb-pro-load');
            },
			success : function(data){
				lwaAjax( data, statusElement );
				cbDoc.trigger('lwa_' + data.action, [data, form]);
			},
			error : function(){ lwaAjax({}, statusElement); },
			dataType : 'jsonp'
		});
	});
 	
 	cbDoc.on('lwa_login', function(event, data, form){
		if(data.result === true){
			//Login Successful - Extra stuff to do
			if( data.widget != null ){
				$.get( data.widget, function(widget_result) {
					var newWidget = $(widget_result); 
					form.parent('.lwa').replaceWith(newWidget);
					var lwaSub = newWidget.find('.').show();
					var lwaOrg = newWidget.parent().find('.lwa-title');
					lwaOrg.replaceWith(lwaSub);
				});
			} else {
				if (data.redirect == null) {
					window.location.reload();
				} else {
					window.location = data.redirect;
				}
			}
		}
 	});
 	
	function lwaAjax( data, statusElement ){
		var cbLWAform = cbLWA.find('.lwa-form'),
			cbLWApass = cbLWA.find('.lwa-remember'),
			cbLWAregister = cbLWA.find('.lwa-register-form');
		statusElement = $(statusElement);
		if(data.result === true){
			statusElement.attr('class','lwa-status cb-ta-center lwa-status-live lwa-status-confirm').html(data.message); //modify status content
		}else if( data.result === false ){
			statusElement.attr('class','lwa-status cb-ta-center lwa-status-live lwa-status-invalid').html(data.error); //modify status content
			statusElement.find('a').click(function(event){
				event.preventDefault();
				cbLWAregister.add(cbLWAform).removeClass('cb-form-active');
            	cbLWApass.addClass('cb-form-active');
			});
		} else {	
			statusElement.attr('class','lwa-status cb-ta-center lwa-status-live lwa-status-invalid').html('An error has occured. Please try again.'); //modify status content
		}
	}

});