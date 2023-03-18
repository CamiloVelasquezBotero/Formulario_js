(function(){ //Funcion auto invocada para proteger nuestro codigo
	var fomulario = document.getElementById('formulario'), //Se obtiene y se guarda el formulario completo en una variable
		nombre = formulario.nombre,		//Se selecciona el nombre del formulario con el (name) que le dimos
		correo = formulario.correo,		//Se selecciona el correo con el ...
		sexo = formulario.sexo,			//.....
		terminos = formulario.terminos,
		error = document.getElementById('error');	//Obtenemos la lista desordenada con la clase (error) y la guardamos en una variable

	function validarNombre(e){
		if (nombre.value == '' || nombre.value == null){ //Si nombre no es igual a vacio, O si nonbre es igual a nulo
			console.log('Por favor digita el Nombre');
			error.style.display = 'block';  	//Accedemos  la lista (error), quiero cambiar su estilo(styleSheet) y le doy un display (block) para hacerlo visible
			error.innerHTML = error.innerHTML + '<li>Por favor completa el Nombre</li>';
			//error.innerHTML += '<li>Por favor completa el nombre</li>';  //Otra forma de copiarlo

			e.preventDefault(); //Si se ejecuta el condicional, quiero detener el envio de los datos (detener el Submit)
		} else {
			error.style.display = 'none'; //Si la validacion esta correcta, entonces quiero que el error siga oculto con su display (none)
		}
	}
	function validarCorreo(e){
		if (correo.value == '' || correo.value == null){
			console.log('Por favor digita el Correo');
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Por favor completa el Correo</li>';
			//error.innerHTML += '<li>Por favor completa el nombre</li>';  //Otra forma de copiarlo

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarSexo(e){
		if (sexo.value == '' || sexo.value == null){
			console.log('Por favor seleccione el Sexo');
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Por favor seleccione el Sexo</li>';
			//error.innerHTML += '<li>Por favor completa el nombre</li>';  //Otra forma de copiarlo

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarTerminos(e){
		if (terminos.checked == false){
			console.log('Por favor acepta los Terminos y Condiciones');
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>Por favor acepta los Terminos y Condiciones</li>';
			//error.innerHTML += '<li>Por favor completa el nombre</li>';  //Otra forma de copiarlo

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarFormulario(e){ //Se crea una funcion para guardar todas las funciones y asi poder enviar una sola funcion al llamarla en el eventListener
		error.innerHTML = '';

		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
	}

	formulario.addEventListener('submit', validarFormulario); //Le doy un eventListener al formulario de tipo (submit) y le envio la funcion 
}())