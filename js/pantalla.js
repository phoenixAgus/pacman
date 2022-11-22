        var pacman = document.querySelector("#pacman");
		var puntaje = 0;
		var fantasmon = document.querySelector("#fantasma");
		var muerte = document.querySelector("#muerte")
        var pilx = [];
        var pily = [];
		
		for(i=0;i<10;i++){

			var puntito = document.createElement("div");
			puntito.className = "puntito";
			puntito.innerHTML = '<img src="images/puntito.png">';
			puntito.style.top = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
			puntito.style.left = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
			while (pilx.indexOf(puntito.style.left)!=(-1) && pily.indexOf(puntito.style.top)!=(-1)){
				puntito.style.top = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
				puntito.style.left = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
			}
            pilx[i] = puntito.style.left;
            pily[i] = puntito.style.top;
			document.getElementById("tablero").appendChild(puntito);
		}
		
		var posx = 0;
		var posy = 0;
        var xfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
        var yfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
		
		while (pilx.indexOf(xfan + "px")!=(-1) && pily.indexOf(yfan + "px")!=(-1)){
			xfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
			yfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
		}

		fantasmon.setAttribute("style","top:"+yfan+"px; left:"+xfan+"px");

		//pacman
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
		   
		   if (posx == xfan && posy == yfan){
			   console.log("muerte")
			   document.querySelector("#pacman").style.display='none';
			   document.querySelector("#muerte").style.display='block';
		   }
		   if (pilx.indexOf(posx + "px")!=(-1) && pily.indexOf(posy + "px")!=(-1)){
			   console.log(posx);
			   console.log(posy);
			   console.log("pildora");
			   if (pilx.indexOf(posx + "px") == pily.indexOf(posy + "px")){
				   console.log(pilx);
				   console.log(pily);
				   var guarda = pilx.indexOf(posx + "px");
				   pilx.splice(guarda, 1);
				   pily.splice(guarda, 1);
				   puntaje++;
				   document.getElementById("puntaje").innerHTML = puntaje;
			   }
		   }
		}
