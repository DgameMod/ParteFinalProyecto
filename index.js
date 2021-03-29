const { app, BrowserWindow, ipcMain } = require('electron');

/** Conexión a la Base de datos */
const mysql= require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password:'1232',
    database:'ProyectoMercado'
})








    /** FUNCION PARA VALIDAR EL LOGIN  */      
   
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("Login").addEventListener('submit', validarFormulario);
})
                      
    function validarFormulario(evento){
        var NUsuario = document.getElementById('Nombre').value;
        var Contr = document.getElementById('Contraseña').value;  
        evento.preventDefault();
        
        if(NUsuario.length == 0){
            alert('Ingrese su Nombre');
            return;
        }if(Contr.length == 0){
            alert('Ingrese su Contraseña');
            return;
        }else{
            connection.query('SELECT * FROM Usuarios  where Nombre = ? AND Pass = ?', [NUsuario, Contr],
            function(error,results, fields){
                if(results.length>0){
                    
                    alert("Bienvenido  "+NUsuario)
                   
                    setTimeout("location.href='ListaProductos.html'")
                    
                }else{
                    results.forEach(function(elemento, index){
                        datos = elemento;
                    })
                    alert('Datos incorrectos')
                    console.log(error);
                    
                  
                    
                }
            }
            )}  

      
    }


    

/** Funcion para solo ingresar Letras  */
function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    }



    /** Funcion para validar solo numeros */
    function soloNumeros(e){
        key = e.keyCode || e.which;
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " 0123456789";
        especiales = "8-37-39-46";
 
        tecla_especial = false
        for(var i in especiales){
             if(key == especiales[i]){
                 tecla_especial = true;
                 break;
             }
         }
 
         if(letras.indexOf(tecla)==-1 && !tecla_especial){
             return false;
         }
     }