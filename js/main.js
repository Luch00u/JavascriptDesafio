class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.idProducto = this.idGenerate();
    }
    idGenerate() {
        let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numeros = '0123456789';
        let str = letras + numeros;
        let idProducto = "";
        for (let i = 0; i < 4; i++) {
            let iterator = Math.floor(Math.random() * str.length);
            idProducto += str.charAt(iterator);
        }
        return idProducto;
    }



}

class Deposito {

    constructor(idRecepcion, nombre) {
        this.idRecepcion = idRecepcion;
        this.nombre = nombre;
        this.listaProductos = [];
    }

    agregarProducto(producto) {
        this.listaProductos.push(producto);
        alert("Producto cargado ");
    }


    mostrarProductos() {
        for (const iterator of this.listaProductos) {
            alert("ID: " + iterator.idProducto + "\nProducto: " + iterator.nombre + "\nPrecio: " + iterator.precio + "\nCantidad: " + iterator.cantidad + "\nTotal: " + (iterator.precio * iterator.cantidad));
        }
    }

    filtrarPorPrecioMinimo(n) {
        let encontrado = this.listaProductos.filter(elemento => elemento.precio >= n);
        for (const iterator of encontrado) {
            alert("ID: " + iterator.idProducto + "\nProducto: " + iterator.nombre + "\nPrecio: " + iterator.precio + "\nCantidad: " + iterator.cantidad + "\nTotal: " + (iterator.precio * iterator.cantidad));
        }
    }
}


/* Variables */
let nombre = "";
let precio = 0;
let stock = 0;


let opcion1 = 0;
let opcion2 = 0;
//

const deposito = new Deposito(1, "sodimac");
do {
    opcion1 = parseInt(prompt("Todo Pino Administrador\n Seleccionar Operacion:\n1) ALTA DE PRODUCTOS\n2) FILTRAR POR PRECIO MINIMO\n3) MOSTRAR PRODUCTOS\n0) SALIR"));

    switch (opcion1) {
        case 1:
            alert("Alta de producto");
            do {
                nombre = prompt("Ingresar nombre");
                precio = parseInt(prompt("Ingresar precio"));
                stock = parseInt(prompt("Ingresar stock"));
                const producto = new Producto(nombre, precio, stock);
                deposito.agregarProducto(producto);
                opcion2 = parseInt(prompt("Desea seguir cargando productos?\n1)SI\n2)NO"));
                while (opcion2 != 1 && opcion2 != 2) {
                    opcion2 = parseInt(prompt("Ingresar una opción correcta\n1)SI\n2)NO"));
                }
            } while (opcion2 != 2);

            break;

        case 2:
            do {
                precio = parseInt(prompt("Indicar precio minimo"));
                deposito.filtrarPorPrecioMinimo(precio)
                opcion2 = parseInt(prompt("Desea buscar otros producto?\n1)SI\n2)NO"));
            } while (opcion2 != 2);
            break;
        case 3:
            do {
                alert("Consulta de productos");
                deposito.mostrarProductos();
                opcion2 = parseInt(prompt("Desea consultar nuevamente los productos?\n1)SI\n2)NO"));

            } while (opcion2 != 2);
            break;
       
    }
} while (opcion1 != 0);

// deposito.mostrarProductos();
alert("Cerrando Sesion")







