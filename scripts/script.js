// JavaScript Document

window.onload = hello;

function hello(){

	$('.hovers').hide();

	$('.col').hover(function(){
		$(this).children('.hovers').show();
	});

	$('.col').mouseleave(function(){
		$('.hovers').hide();
	});



};