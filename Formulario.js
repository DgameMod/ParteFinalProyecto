const { app, BrowserWindow, ipcMain } = require('electron');

/** Conexión a la Base de datos */
const mysql= require('mysql2')
const tabla=document.getElementById('table')

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password:'1232',
    database:'ProyectoMercado'
})

let id=0;
const btnBuscar = document.getElementById('Buscar')

     

const codigo= document.getElementById('Codigo');
const nombre= document.getElementById('Nombre');
const descripcion= document.getElementById('Descripcion');
const categoria= document.getElementById('Categoria');
const existencia= document.getElementById('Existencia');
const precio= document.getElementById('Precio');

function LlenarDatos(Codigo){

 connection.query('Select * From Producto where codigo = ?',[Codigo], function(error, results){
    if(error) throw error;
    if(Object.entries(results).length===0){
        alert('Ingrese un codigo válido')
        nombre.value="";
        descripcion.value="";
        categoria.value= "";
        existencia.value= "";
        precio.value= "";
    }else{
    results.forEach(function(elemento, index){
        nombre.value=elemento.Nombre;
        descripcion.value=elemento.Descripcion;
        categoria.value=elemento.Categoria;
        existencia.value=elemento.Existencia;
        precio.value=elemento.Precio;
        id = elemento.id;

    })
    console.log(results)
}
    
 })

}
btnBuscar.onclick = ()=> LlenarDatos(codigo.value)

//btnBuscar.addEventListener('click', LlenarDatos(codigo.value))

const btnActualizar = document.getElementById('Actualizar');
btnActualizar.onclick =()=> Actualizar(id, nombre.value, descripcion.value, categoria.value, existencia.value, precio.value)

function Actualizar(id, Nombre, Descripcion, Categoria, Existencia, Precio){
    if(!codigo.value){ alert('Ingrese un codigo')}else{
        if(nombre.value.length > 0 &&descripcion.value.length > 0 && categoria.value.length >0 && existencia.value.length && precio.value.length){
    connection.query('UPDATE Producto	SET Nombre = ?, Descripcion = ? , Categoria = ?, Existencia = ? , Precio = ? WHERE id = ?;',[ Nombre, Descripcion, Categoria, Existencia, Precio, id], function(error, results){
        if(error) throw error;
        console.log('Actualizado');
        alert('Actualizado');
       
    })
  }else{
     alert('Ingrese datos en todos los campos')
}
}
}


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