
document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let documento = document.getElementById("documento").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let placa = document.getElementById("placa").value.trim();
    

   
    if (!documento || !nombre || !telefono || !correo || !direccion || !placa) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.push({ documento, nombre, telefono,  correo, direccion, placa});

   
    localStorage.setItem("clientes", JSON.stringify(clientes));

    alert("Cliente guardado en localStorage");

    location.reload();
});