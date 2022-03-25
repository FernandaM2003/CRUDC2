// Eventos DOM
//Document Object Model
document
    .getElementById("producto-formulario")
    .addEventListener("submit", function (evento) {
        //Evaluar el comportamiento del formulario
        evento.preventDefault();

        //Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value,
            precio = document.getElementById("precio").value,
            año = document.getElementById("año").value;

        //Crear un nuevo objeto (producto)
        const producto = new Producto(nombre, precio, año);

        //Crear un nuevo usuario de interfaz
        const ui = new UI();


        //Input de validación de los datos
        if (nombre === " " || precio === " " || año === " ") {
            ui.showMessage("Por favor insertar datos");
        }

        //Guardar productos
        ui.addProduct(producto),
            ui.showMessage("Producto Agregado");
        ui.resetFrom();
    });

document.getElementById("producto-lista").addEventListener("click", (evento) => {
    const ui = new UI();
    ui.deleteProducto(evento.target);
    e.preventDefault();
});


//Clase producto

class Producto {
    constructor(nombre, precio, año) {
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}


//Clase Usuario interfaz

class UI {
    addProduct(producto) {
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
      <div class="tarjeta texto margen4" id="info">
            <div class="tarjeta-body">
            <br>
            <strong> PRODUCTO </strong> :  ${producto.nombre} -
            <strong> PRECIO </strong> :  ${producto.precio} -
            <strong> AÑO </strong> :  ${producto.año} - <br><br>
            <a href="" class="btn btn-secondary" id="btneli" name="eliminar" > Eliminar  </a> 
            </div>
            </div>
            `;

        window.alert("Registro Insertado");
        productoLista.appendChild(elemento); //appendChild es un elemento fijo
    }
    //Resetear datos de formulario
    resetFrom() {
        document.getElementById("producto-formulario").reset();
    }

    deleteProducto(elemento) {
        if (elemento.nombre === "eliminar") {

            this.showMessage("El Producto se ha Eliminado");
            elemento.parentElement.parentElement.remove();
        }
        window.alert("Registro eliminado");
    }

    showMessage(mensaje, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));



        //Mostrar en el DOM
        const contenido = document.querySelector(".container")
        const app = document.querySelector("#App")
        //Insertar mensaje en el interfaz usuario
        container.insertBefore(div, app);

        //Remover el mensaje luego de tres segundos

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 3000);

    }
}