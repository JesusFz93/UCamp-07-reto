const nombre = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const registrar = (e) => {
    
    if (nombre.value === '' || email.value === '' || password.value === '') {
        alert('Todos los campos son obligatorios');
    } else {
        console.log({name: nombre.value, email: email.value, password: password.value});

        nombre.value = '';
        email.value = '';
        password.value = '';

        nombre.focus();
    }
}