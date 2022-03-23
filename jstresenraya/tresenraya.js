var turno=1;
function crearTablero()
{
	var tabla=document.createElement("table");
	tabla.style.width="400px";
	tabla.style.height="400px";
	tabla.style.border="2px solid purple"
	for (indice_fila=0; indice_fila<3; indice_fila++)
	{
		var obj_fila=document.createElement("tr");
		for(indice_columna=0; indice_columna<3; indice_columna++)
		{
			var obj_columna=document.createElement("td");
			obj_columna.innerHTML="&nbsp;";
			obj_columna.onclick=function(){marcar(this);}
			obj_columna.style.border="2px solid purple"
			obj_fila.appendChild(obj_columna);
		}
		tabla.appendChild(obj_fila);
	}
	document.getElementById("contenedor").appendChild(tabla)
}
function marcar(objeto_celda)
{
	if (turno==1)
	{
		objeto_celda.innerHTML="X";
		turno=2;
	}
	else
	{
		objeto_celda.innerHTML="O";
		turno=1;
	}
}
