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

const Lista = document.getElementById('LProducto');

const btnPedido = document.getElementById('Pedido')
btnPedido.onclick= ()=>ListaProducto()




function ListaProducto(){
 connection.query('Select Nombre From Producto where Existencia > 0', function(error, results){
    if(error) throw error;
    console.log(results);
    results.forEach(function(elemento, index){
        const Opcion = document.createElement('Option');
        Opcion.setAttribute('id', index)
        Opcion.setAttribute('class', 'Producto')
        Opcion.setAttribute('value', elemento.Nombre)
        Opcion.text = elemento.Nombre
        Lista.add(Opcion, Lista[index])
        console.log(elemento)
        
        
    })
   
btnPedido.setAttribute('disabled', true)



 })
}

Lista.onchange = ()=> consultaid()
const Proveedor= document.getElementById('NProveedor')
const Cantidad= document.getElementById('Cantidad')
const Producto= document.getElementById('Producto')
const btnEnviar = document.getElementById('enviar')
function consultaid(){
  const valor = Lista.options[Lista.selectedIndex].text;
    Producto.value= valor
    console.log(valor)
}

btnEnviar.onclick=()=>EnviarDatos()

function EnviarDatos(){
    
    connection.query('Select * From Pedidos where Proveedor = ? and Producto = ?',[Proveedor.value, Producto.value], function(error, results){
        if(error) throw error;
        let a = Proveedor.value;

        
        if(results.length===0){
            if(Proveedor.value.length>0 && Cantidad.value.length>0){
            connection.query('Insert into Pedidos (Proveedor, Producto, Cantidad) Values(?, ?, ?)',[Proveedor.value, Producto.value, Cantidad.value], function(error, results){
                if(error) throw error;
                console.log(results)
                alert('Registro Exitoso, Solo se puede hacer un pedido de este producto')
            })
        }else{
            alert(' Ingrese datos Solicitados')
        }
            
        }else{
            alert('No puede hacer dos pedidos del mismo producto')
        }
   
      
      
    })
    
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