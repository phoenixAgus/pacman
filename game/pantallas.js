var Pantallas = {

    ready:{}, // objeto ready
    puntos: [], //puntos que se comen
    puntosGrandes:[], // pastillas
    posicionPuntos: new Point(72,34), // posiciona los puntos
    colliders: [], // paredes para colizionar 

    start: function(){ // inicializa el objeto
        this.ready = new Image("ready", ctx); // crea la imagen
        this.ready.load("../images/ready.png", true); // carga la imagen
        this.ready.transform.setPosition(new Point(315,437)); // posiciona la imagen en pantalla
        miJerarquia.Add(this.ready); // imprime en pantalla
    },

    quedanPuntos:function(){ // le pregunta a pantallas si quedan puntos, cuando no quedan se llama a la funcion pantalla completa

    },
};