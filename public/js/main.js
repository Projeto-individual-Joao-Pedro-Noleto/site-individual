
/* Função msotrar texto */

function mostrar_texto(){

  var texto = p.value;

 p.style.opacity = "1";


}

function ocultar_texto(){

  var texto = p.value;

 p.style.opacity = "0" 
}


function mostrar_texto_2(){

  var texto = p_2.value;

 p_2.style.opacity = "1" 
}

function ocultar_texto_2(){

  var texto = p_2.value;

 p_2.style.opacity = "0" 
}


function mostrar_texto_3(){

  var texto = p_3.value;

 p_3.style.opacity = "1" 
}

function ocultar_texto_3(){

  var texto = p_3.value;

 p_3.style.opacity = "0" 
}



function mostrar_texto_4(){

  var texto = p_4.value;

 p_4.style.opacity = "1" 
}

function ocultar_texto_4(){

  var texto = p_4.value;

 p_4.style.opacity = "0" 
}



function mostrar_texto_5(){

  var texto = p_5.value;

 p_5.style.opacity = "1" 
}

function ocultar_texto_5(){

  var texto = p_5.value;

 p_5.style.opacity = "0" 
}




function mostrar_texto_6(){

  var texto = p_6.value;

 p_6.style.opacity = "1" 
}

function ocultar_texto_6(){

  var texto = p_6.value;

 p_6.style.opacity = "0" 
}


function mostrar_texto_7(){

  var texto = p_7.value;

 p_7.style.opacity = "1" 
}

function ocultar_texto_7(){

  var texto = p_7.value;

 p_7.style.opacity = "0" 
}

/* quadras */




function zona_centro_quadras(){


  var kaleman = kaleman_zs;
  var trinta = trinta_zs;
  var paco = paco_zs;
  
var ibira = ibira_centro;
var major = vila_buarque_centro;
var quadra_bras = bras_centro;
var zilda = zilda_centro;

  botoes.style.display = "none";
  h1_ola.style.display = "none";

 
  ibira.style.display = "flex";
  major.style.display = "flex";
  zilda.style.display = "flex";
  quadra_bras.style.display = "flex";
  
}


function zona_sul_quadras(){

  var kaleman = kaleman_zs;
  var trinta = trinta_zs;
  var paco = paco_zs;

  h1_ola.style.display = "none";
  botoes.style.display = "none";

  kaleman.style.display = "flex";
  trinta.style.display = "flex";
  paco.style.display = "flex";
  ibira_centro.style.display = "flex";
}



function zona_norte_quadras(){



  botoes.style.display = "none";

  kaleman_zs.style.display = "flex";
  trinta_zs.style.display = "flex";
  paco_zs.style.display = "flex";
  ibira_centro.style.display = "flex";
}





/* Pegar dados do banco */

function validarsessao(){
  var nome = sessionStorage.NOME_USUARIO;

  if( nome != null ){
    nome_usuario_h1.innerHTML = nome;
  }
  else{
    window.location = "../login.html"
  }
}

