

function modoJuego(){
		var genero=document.getElementsByName("genero");
                var dificultad=document.getElementById("dificultad").value;
                for(var i=0;i < genero.length;i++){
                    if(genero[i].checked)
                        genero=genero[i].value;
                }
                var por="images/Personajes/";
                if(genero == "masculino"){
                    if(dificultad == "facil"){
                        por+="Joey.png";
                    }else if(dificultad == "medio"){
                        por+="Seto.png";
                    }else{
                        por+="Yugi.png";
                    }
                }else{
                    if(dificultad == "facil"){
                        por+="Tea.png";
                    }else if(dificultad == "medio"){
                        por+="Alexis.png";
                    }else{
                        por+="Mai.png";
                    }
                }
                
                document.getElementById("modo").setAttribute("src",por);
}

function cambio(){
    alert("holaaaaaaaaa");
    var boton=document.getElementById("boton").value;
    alert(boton);
    if(boton == "Monitores"){
        boton.setAttribute("value", "Estudiantes");
        
    }else{
        boton.setAttribute("value", "Monitores");
    }
    
}


function ciclo(){
    var arreglo = ["Logouptc.png","bases.png","redes.png","software.png",
		"monisistem.png","noticias.png","registro.png"];
    var n=Math.floor((Math.random() * 6) );
    document.getElementById("ciclo").setAttribute("src", "images/"+arreglo[n]);
}

