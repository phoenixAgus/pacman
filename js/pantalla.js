        //variables
		var pacman = document.querySelector("#pacman");
		var puntaje = 0;
		var necesario = 10;
		var fase = 1
		var fantasmon = document.querySelector("#fantasma");
		var muerte = document.querySelector("#muerte")
        var pilx = [];
        var pily = [];
		var blox = [];
		var bloy = [];
		var posx = 0;
		var posy = 0;
		var xfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
		var yfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
		document.getElementById("nombre").innerHTML = prompt("Hola Gamer, quieres jugar videojuegos?, introduce tu nombre");

		tablero()
		//Movimiento del pacman
		document.onkeydown = function(event){
			
			switch (event.key) {
				case "ArrowLeft":
					posx=posx-100
					if(posx<0){
						posx=0
					}
					break;
			
					case "ArrowRight":
					posx+=100
					console.log(pilx)
					if(posx>900){
						posx=900
					}
					break;
					
					case "ArrowUp":
						posy-=100
					if(posy<0){
						posy=0
					}
				break;

				case "ArrowDown":
					posy+=100
					if(posy>900){
						posy=900
					}
				break;
           }
			
			pacman.setAttribute("style","top:"+posy+"px; left:"+posx+"px");
			

		//Colicion con Fantasma	
		if (posx == xfan && posy == yfan){
			console.log("muerte")
				document.querySelector("#pacman").style.display='none';
				document.querySelector("#muerte").style.display='block';
			}

			//Colision con Pills
			var coincidencias = [];  
			for(i=0;i<pilx.length;i++){
				
				if(pilx[i] == posx + "px"){
					coincidencias.push(i);
						
				}
			}		
			for(j=0;j<coincidencias.length;j++){
							
				console.log(pily[coincidencias[j]]);
				if(pily[coincidencias[j]] == posy + "px"){
					console.log("pildora");
					puntaje++;
					document.getElementById("puntaje").innerHTML = puntaje;
					pilx.splice(coincidencias[j], 1);
					blox[coincidencias[j]].setAttribute(display, block)
					pily.splice(coincidencias[j], 1);
					bloy[coincidencias[j]].setAttribute(display, block)
				}
			}

			//Para los 40
			if(puntaje == necesario){
				if(necesario == 40){
					document.querySelector("#win").style.display='block';
					alert("felicidades, ganaste");
				}
				else{
					necesario = necesario + 10;
					fase++;
					document.getElementById("fase").innerHTML = fase;
					tablero();
				}
			}
        }

function tablero (){
	for(i=0;i<10;i++){
		//posicion Pills
		var puntito = document.createElement("div");
		var bloque = document.createElement("div")
		puntito.className = "puntito";
		bloque.className = "bloquecito"
		puntito.innerHTML = '<img src="images/puntito.png">';
		bloque.innerHTML = '<imd src="images/bloquecito.png">';
		puntito.style.top = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
		puntito.style.left = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
		while (pilx.indexOf(puntito.style.left)!=(-1) && pily.indexOf(puntito.style.top)!=(-1)){
			puntito.style.top = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
			puntito.style.left = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
		}
		bloque.style.top = puntito.style.top;
		bloque.style.left = puntito.style.left;
		pilx[i] = puntito.style.left;
		blox[i] = bloque.style.left;
		pily[i] = puntito.style.top;
		bloy[i] = bloque.style.top;
		document.getElementById("tablero").appendChild(puntito);
		document.getElementById("tablero").appendChild(bloque);
	}


	//Posicion del Fantasma
	while (pilx.indexOf(xfan + "px")!=(-1) && pily.indexOf(yfan + "px")!=(-1)){
		xfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
		yfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
	}
	fantasmon.setAttribute("style","top:"+yfan+"px; left:"+xfan+"px");
}