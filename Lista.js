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





function Suma(p){
let suma = 0; 
connection.query('Select * From Pedidos', function(error, results){
    if(error)throw error;
   
    
    results.forEach(function(producto, index){
        if(producto.Producto===p){
            suma = suma + producto.Cantidad  
            
            
        }
      //console.log(producto.Cantidad)
    
    })
    console.log(suma)
    return suma;

})

  

        

}



function LlenarTabla(){
connection.query('Select * from Producto where Existencia > 0', function(error,results){
    if(error) throw error;   
    let btnEliminar = 0;
    console.log(results);
    results.forEach(function (elemento, index){
    console.log(Suma(elemento.Nombre))
    const row = table.insertRow();     
    row.setAttribute('id',elemento.id)
    row.innerHTML=`
    <td> ${elemento.codigo} </td>
    <td> ${elemento.Nombre} </td>
    <td> ${elemento.Descripcion} </td>
    <td> ${elemento.Categoria} </td>
    <td> ${elemento.Existencia}  </td>
    <td> ${elemento.Precio} </td>
    `
    

    btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-danger', 'botonE');
    btnEliminar.setAttribute('id',elemento.id);

    btnEliminar.innerHTML=`<i class="fa fa-trash"></i>`
   // 
    row.appendChild(btnEliminar);
    //btnEliminar.onclick=Eliminar(id);

  
    

    });

    //BotonEliminar
    var botones = document.getElementsByClassName('botonE');
    
    console.log(botones)

    for(var i = 0; i < botones.length; i++){
        botones[i].addEventListener('click', capturar);
      }

      function capturar(){
       id=this.id
       console.log(this.id)
      }
      let id =0;

      btnEliminar.onclick=()=>Eliminar(id);

})
}
//Función borrar
        function Eliminar(id){
            connection.query('Delete  From Producto where id = ?', [id], function(error, results){
                if(error) throw error;
                console.log(results);
                //setTimeout("location.href='ListaProductos.html'")
                
            })
        }

//Función Actualizar
        
        

