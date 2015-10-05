// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function print_click(){
	console.log("x:" + event.clientX);
	console.log("y:" + event.clientY)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cb(result) {
	console.log("Salvei o click: " +  JSON.stringify(result));
}

function scrollPosition () {
	return document.body.scrollTop;
}


function save_click(){
	var data = {
		clickdata: {
			x: event.clientX,
			y: event.clientY,
			scroll_position: scrollPosition(),
			user_token: "blablabla123",
			url: window.location.href
		}
	};

	//ajax fazendo post (salvar)
	//fazendo post para a url de clickdatas. Post = salvando no banco
	//estou mandando meus dados para a url e o controller dessa url vai saber o que fazer com os dados
	$.post('/clickdatas', data, cb)
}