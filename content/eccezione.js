$(function(){
	$('<p>pippo</p>').appendTo('body');
});
	//var io= new io.Socket('http://localhost',{port:3000});
	var socket = io.connect('http://localhost:3000');
	socket.on('eccezioneGestitaEvent', function (data) {
		$('#tab > tbody:last').append('<tr><td>'+data.Mittente+'</td><td>'+data.Messaggio+'</td></tr>');		
	});
	
	$('#form').submit(function() {
	console.log('POST 1.');
		$.ajax({
		    type: 'POST',
			url: 'http://localhost:3000/eccezione',
			crossDomain: true,
			data:{ "mittente": $("#mittente").val(), "messaggio": $("#messaggio").val() },
			success: function(responseData, textStatus, jqXHR) {
				var value = responseData.someKey;
				console.log('POST 2.');
			},
			error: function (responseData, textStatus, errorThrown) {
				console.log('POST failed.');
			}
	
		});
	});
	