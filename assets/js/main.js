function esconderP(){
	var parrafos = Array.from(document.getElementsByClassName("parrafos"));

	var extincion = document.getElementById("extincion");
	extincion.addEventListener("click", function(){
			parrafos.forEach(function(p){
					p.classList.toggle("esconder");
		});

	});

	var boton =	document.getElementById("origen");
	boton.addEventListener("click", function(p){
		parrafos.forEach(function(p){
			p.classList.remove("esconder");
		})
	})
}
esconderP();


function esconderImg(){
	var imagenes = Array.from(document.getElementsByClassName("imagenes"));

	var eliminar = Array.from(document.getElementsByClassName("fa"));
	eliminar.forEach(function(el){
		el.addEventListener("click", function(){
			imagenes.forEach(function(i){
					i.classList.toggle("esconder");
			});

		});
	})
	

	var boton =	document.getElementById("restaurar");
	boton.addEventListener("click", function(ri){
		imagenes.forEach(function(ri){
			ri.classList.remove("esconder");
		})
	})

}
esconderImg()