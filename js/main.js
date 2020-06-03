$(document).ready(function(){
	
	//Slider
	if(window.location.href.indexOf('index') > -1){

	 $('.bxSlider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
  });
}

	 //Posts
	 if(window.location.href.indexOf('index') > -1){
		
	 var posts =[
	 	{
	 		title: 'Facebook',
	 		date: '<br><strong>Date Published / Publicado el dia: ' + moment().date() + " de " +  moment().format("MMMM") + " del " + moment().format("YYYY"),
	 		content: '<br><strong>To know our offers, please visit our Facebook page.<br><br>Para conocer nuestras ofertas, por favor visite nuestra página de Facebook.<br><br><a href="https://www.facebook.com" title="Facebook"class="button-more">Facebook</a>' 
	 	},
	 	{
	 		title: 'Google',
	 		date: '<br><strong>Date Published / Publicado el dia: ' + moment().date() + " de " +  moment().format("MMMM") + " del " + moment().format("YYYY"),
	 		content: '<br><strong>Pictures of our patients available on Google<br><br><a href="https://www.google.com" class="button-more">Google</a>'
	 	},
	 	
	 ];

	 posts.forEach((item, index) => {
	 	var post = `
	 		<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<!--Area de parrafo para meter toda la informacion.-->
						<p>
							${item.content}

						</p>

						
						
						
					</article>
	 	`;
	 	$("#posts").append(post);
	 		
	 });
}

	 	//Selector de theme:
	 var theme = $("#theme");

	 $("#to-green").click(function(){
	 	theme.attr("href","css/green.css");
	 });
	 
	  var theme = $("#theme");

	 $("#to-red").click(function(){
	 	theme.attr("href","css/red.css");
	 });
	 
	  var theme = $("#theme");

	 $("#to-blue").click(function(){
	 	theme.attr("href","css/blue.css");
	 });
	 
	//para hacer un Scroll para arriba de la pagina web:


	$('.subir').click(function(e){
	e.preventDefault();

		$('html,body').animate({
		scrollTop: 0
		}, 1000);

		return false;
		});

	//Login falso/ Identificacion localStorage:
	$("#login form").submit(function(){
		var form_name= $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Welcome, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id= 'logout'>Cerrar Sesion</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
	$("about p").html("Welcome, "+form_name);



       //Acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}


	   //Reloj
	 if(window.location.href.indexOf('reloj') > -1){ 

	 	setInterval(function(){
	 		var reloj = moment().format("hh:mm:ss");
	 		$('#reloj').html(reloj);
	 	}, 1000); 	
	}

	 //Validacion De Datos
	  if(window.location.href.indexOf('contact') > -1){ 
	  		$("form input[name='date']").datepicker({
	  			dateFormat: 'dd-mm-yy'
	  		});

			$.validate({
		    lang: 'es'
		  });
        }
});
	