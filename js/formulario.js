
export function contenido(e){
    e.preventDefault();

    const nombre = document.getElementById("nombreapellido").value;
    const email = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value; 
    const mensaje = document.getElementById("mensaje").value;

    enviarEmail(nombre,email,telefono,mensaje)
    
}

function enviarEmail(nombre, email, telefono, mensaje){

    Email.send({
        Host: "smtp.gmail.com",
        Username: "enviarformulariosjs@gmail.com",
        Password: "formulariosportafolio",
        To: "enviarformulariosjs@gmail.com",
        From: "enviarformulariosjs@gmail.com",
        Subject: `Correo de ${nombre} `,
        Body: `Nombre: ${nombre} <br> Email: ${email} <br> Telefono: ${telefono} <br> Mensaje: ${mensaje}`
    })

    .then(function(mensaje) { alert("Email enviado correctamente")
});

}




