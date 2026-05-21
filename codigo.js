function validar() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario === "admin" && contrasena === "1234") {
        window.location.href = "menu.html";
    } else {
        alert("Usuario o contraseña incorrectos");
        document.getElementById("usuario").value = "";
        document.getElementById("contrasena").value = "";
    }
}

function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";
}

function calcularPedido() {
    let hamburguesa = document.getElementById("hamburguesa").value;
    let bebida = document.getElementById("bebida").value;
    let postre = document.getElementById("postre").value;
    
    let precioHamburguesa = 0;
    let precioBebida = 0;
    let precioPostre = 0;

    if (hamburguesa === "Simple") {
        precioHamburguesa = 5000;
    } else if (hamburguesa === "Doble") {
        precioHamburguesa = 6500;
    } else if (hamburguesa === "Triple") {
        precioHamburguesa = 8000;
    }

    if (bebida === "Agua") {
        precioBebida = 1500;
    } else if (bebida === "Gaseosa") {
        precioBebida = 2000;
    }

    if (postre === "Ninguno") {
        precioPostre = 0;
    } else if (postre === "Papas") {
        precioPostre = 2500;
    } else if (postre === "Helado") {
        precioPostre = 3000;
    }

    let total = precioHamburguesa + precioBebida + precioPostre;

    document.getElementById("resultado_pedido").textContent = "El total de tu combo es: $" + total;

    localStorage.setItem("precioGuardado", total);
    localStorage.setItem("hamburguesaGuardada", hamburguesa);
    localStorage.setItem("bebidaGuardada", bebida);
    localStorage.setItem("postreGuardado", postre);
}

function generarTicket() {
    let cliente = document.getElementById("cliente").value;
    let pago = document.getElementById("pago").value;
    let fecha = document.getElementById("fechaNacimiento").value; 

    if (cliente === "" || fecha === "") {
        alert("Por favor, ingrese un nombre y su fecha de nacimiento");
    } else {
        localStorage.setItem("nombreCliente", cliente);
        localStorage.setItem("metodoPago", pago);
        localStorage.setItem("fechaGuardada", fecha); 
        window.location.href = "comprobante.html";
    }
}

function limpiarTicket() {
    document.getElementById("cliente").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("mensaje_ticket").textContent = "";
}

function mostrarComprobante() {
    let nombre = localStorage.getItem("nombreCliente");
    let precio = localStorage.getItem("precioGuardado");
    let pago = localStorage.getItem("metodoPago");
    let fecha = localStorage.getItem("fechaGuardada"); 
    
    let hamburguesa = localStorage.getItem("hamburguesaGuardada");
    let bebida = localStorage.getItem("bebidaGuardada");
    let postre = localStorage.getItem("postreGuardado");

    document.getElementById("ticket-nombre").textContent = nombre;
    document.getElementById("ticket-fecha").textContent = fecha; 
    document.getElementById("ticket-precio").textContent = precio;
    document.getElementById("ticket-pagado").textContent = "Pagado con " + pago;
    
    document.getElementById("ticket-hamburguesa").textContent = hamburguesa;
    document.getElementById("ticket-bebida").textContent = bebida;
    document.getElementById("ticket-postre").textContent = postre;
}
