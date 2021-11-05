function registrar(){
    const name = document.getElementById('nombre').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    const registry = {
        name: name,
        email: email,
        password: password
    };

    const formulario = document.getElementById('formulario_principal');
    formulario.reset();

    console.log(registry);
}