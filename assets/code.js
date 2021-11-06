

const registrar = (e) => {

    const nombre = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    
    
    if (nombre.value === '' || email.value === '' || password.value === '') {
        alert('Todos los campos son obligatorios');
    } else {

        const usuario = {
            nombre: nombre.value,
            email: email.value,
            password: password.value,
        };
        
        console.log(usuario);

        nombre.value = '';
        email.value = '';
        password.value = '';

        nombre.focus();
    }
}