$(document).ready(function(){
	$('.checked').click(function(){
		var state = $(this).attr('is-checked');
		if (state == 'no'){			
			$(this).addClass('active');
			$('.glyphicon-ok').show();
			$(this).attr('is-checked', 'yes');
		} else {
			$(this).removeClass('active');
			$('.glyphicon-ok').hide();
			$(this).attr('is-checked', 'no');
		}
	});

	$('#login').click(function() {
		var val = $(this).val();
		if(val == ''){
			$(this).attr('placeholder', '');
		}
	});

	$('#password').click(function() {
		var val = $(this).val();
		if(val == ''){
			$(this).attr('placeholder', '');
		}
	});

	$("#validAccount").click(function() {
		var login = $("#login").val();
		var password = $("#password").val();

		if ((login == 'sdr@free.fr') && (password == 'test')){
			window.location.href = 'index.php';
			$('#error_connect').hide();
		} else {
			if((login == '') && (password == '')){
				$('#error_connect').html('Veuillez renseigner vos identifiants de connexion');
				$('#error_connect').show();
			}else {
				$('#error_connect').html('Identifiants erronés !');
				$('#error_connect').show();
			}
			
		}
		
	});

	$(".glyphicon-menu-hamburger").click(function() {
		if($('.side_menu').is(':hidden')){
			$('.side_menu').toggle("slide");
		}else {
			$('.side_menu').toggle("slide");
		}
		$('.accounts').hide();
	});

	$('.glyphicon-user', $('.navbar-header')).click(function(){
		if($('.accounts').is(':hidden')){
			$('.accounts').toggle("slide");
		}else {
			$('.accounts').toggle("slide");
		}
		$('.side_menu').hide();
	});
})