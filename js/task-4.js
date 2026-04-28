const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event=>{
    event.preventDefault();
    const el = event.currentTarget.elements
    const email = el.email.value.trim()
    const pass = el.password.value.trim()
    if (email === "" || pass === ""){
        window.alert('All form fields must be filled in')
    }
    else{
        const dataForm = {
            email,
            "password": pass
        }
        console.log(dataForm)
        event.currentTarget.reset()
    }
});