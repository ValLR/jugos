function validar(){
	function nombre(){
		//como sacar valor del input
		var nombre = document.getElementById("name").value;

		//validar que nombre no esté vacío
		if (nombre === "" || nombre === undefined || nombre.length === 0){
			alert("Error, debe ingresar nombre"); //alert = document.write = return
		}

		//validar que 1º caracter sea mayúscula
		else if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()){
			alert("Error, la primera letra debe ser Mayúscula")
		}
		//validar que sea sólo letras
		else if (/[0-9]/.test(nombre)){
			alert("No debe ingresar números")
		}
		else{
			alert("Datos ingresados correctamente")
		}
		/*validar solo numeros expresion regular
		/[0-9]/.test(nombre-de-variable)*/

	}
	nombre();

	function password(){
		var pword = document.getElementById("input-password").value;
		//no vacío
		if(pword === "" || pword === undefined || pword.length === 0){
			alert("Error, debe ingresar contraseña")
		}
		//que no sea 1234 ni "password"
		else if (pword === "1234" || pword === "password"){
			alert("Escoja otra contraseña");
		}
		//que tenga al menos 6 caracteres
		else if (pword.length < 6){
			alert("contraseña inválida, debe tener al menos 6 caracteres")
		}

	}
	password();

	//etiqueta select
	function opciones(){
		var seleccion = document.getElementsByTagName("select");/*.getElementsByClassName("form-control")[2]*/
		for(var i = 0; i < seleccion.length; i++){
			if(seleccion[i].value == "0" ){/*primer option es nada*/
				alert("Debe elegir una opción")
			}
		}
	}

	opciones();
}
