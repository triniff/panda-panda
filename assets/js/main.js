//CREANDO UN ARREGLO DE IMAGENES - No funciona porque elimina todas las fotos
/*var contenedorImg = document.getElementById("galeria");
var imagenes = ["assets/img/panda_01.jpg", "assets/img/panda_02.jpg", "assets/img/panda_03.jpg", "assets/img/panda_04.jpg"]
	
	imagenes.forEach(function(imagen){
		var nuevoArr = document.createElement("div");
		nuevoArr.classList.add("imagenes");

		var crearImg = document.createElement("img");
		crearImg.setAttribute("src", imagen);
		crearImg.classList.add("panda");

		var icono = document.createElement("i");
		icono.classList.add("fa", "fa-times");

		nuevoArr.appendChild(crearImg);
		nuevoArr.appendChild(icono);
		contenedorImg.appendChild(nuevoArr);

	})

	var recorrerCoso = Array.from(document.getElementsByClassName("fa-times"));
	recorrerCoso.forEach(function(el){
		el.addEventListener('click', function(){
			var recorroImg = Array.from(document.getElementsByClassName("imagenes"));
			recorroImg.forEach(function(esq){
				esq.classList.add("esconder");
			})
	})
	})*/



function eliminandoImagenes(){
	//OBTENIENDO IMAGENES
	document.getElementsByClassName('fa-times')[0].addEventListener('click', function(){ //Eliminando primera imagen
		var panda = document.getElementsByClassName('imagenes')[0];
		panda.classList.add('esconder');
	})

	document.getElementsByClassName('fa-times')[1].addEventListener('click', function(){
		var panda = document.getElementsByClassName('imagenes')[1];
		panda.classList.add('esconder');
	})

	document.getElementsByClassName('fa-times')[2].addEventListener('click', function(){
		var panda = document.getElementsByClassName('imagenes')[2];
		panda.classList.add('esconder');
	})

	document.getElementsByClassName('fa-times')[3].addEventListener('click', function(){
		var panda = document.getElementsByClassName('imagenes')[3];
		panda.classList.add('esconder');
	})


	//restaurando fotos
	var restaurar = document.getElementById("restaurar");
	restaurar.addEventListener("click", function(){
		document.getElementsByClassName('imagenes')[0].classList.remove('esconder');
		document.getElementsByClassName('imagenes')[1].classList.remove('esconder');
		document.getElementsByClassName('imagenes')[2].classList.remove('esconder');
		document.getElementsByClassName('imagenes')[3].classList.remove('esconder');
	})

}
eliminandoImagenes()

function eliminandoParrafos(){
	var botonOrigen = document.getElementById("origen");
	botonOrigen.addEventListener("click", function(){
		var pUno = document.getElementsByClassName("parrafos")[0];
		pUno.classList.toggle("esconder");
	})
	var botonExt = document.getElementById("extincion");
	botonExt.addEventListener("click", function(){
		var pDos = document.getElementsByClassName("parrafos")[1];
		pDos.classList.toggle("esconder");
	})
}
eliminandoParrafos()



