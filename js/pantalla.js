        var pacman = document.querySelector("#pacman");
		var fantasmon = document.querySelector("#fantasma");
        var pilx = [];
        var pily = [];
		
		for(i=0;i<10;i++){

			var puntito = document.createElement("div");
			puntito.className = "puntito";
			puntito.innerHTML = '<img src="images/punto-grande.png">';
			puntito.style.top = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
			puntito.style.left = (Math.floor (Math.random()*(9-1+1))+1)*100 + "px";
            pilx[i] = puntito.style.left;
            pily[i] = puntito.style.top;
			document.getElementById("tablero").appendChild(puntito);
		}
        
		var posx = 0;
		var posy = 0;
		var xfan = 100;
		var yfan = 100;
        var contador = 0;

		while(xfan == pilx[contador] && yfan == pily[contador] ){
			xfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
			yfan = (Math.floor (Math.random()*(9-1+1))+1)*100;
            if (xfan == pilx[contador] && yfan == pily[contador]) {
                contador = 0;
            }
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

				case "F5":
				break;

				default:
					alert("Esto no va")
				break;
			}


			pacman.setAttribute("style","top:"+posy+"px; left:"+posx+"px");
		}