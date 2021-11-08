
    function validacao(){
        var usuario = input_usuario.value.trimStart().trimEnd();
        var senha = input_senha.value.trimStart().trimEnd();
        var url = document.URL;

        if(usuario.length == 0){
            alert("Campo usuario vazio")
        }
        else if (usuario.indexOf('@') == -1 ){
            alert("Campo Invalido, falta @")
          } 
          else if (usuario.indexOf('.com') == -1 ){
            alert("Campo Vazio, falta .com")
          } 
          else if (senha.length == 0 ){
            alert("Campo Senha vazio")
          } 

        else {
            formulario_login.action = url.replace('login.html', 'dashboard.html');
        
        }
    }
