
const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/

export default function validate(inputs) {
    var errors = {};
    if (!inputs.username) {
        errors.username = "El usename no puede quedar vacio"
    }
    else if (!regexUsername.test(inputs.username)) {
        errors.username = "El username debe ser un correo electronico"
    }
    else if (inputs.username.length > 35) {
        errors.username = "El username no puede tener mas de 35 caracteres"
    }
    else if (!inputs.password) {
        errors.password= "El password no puede quedar vacio"
    }
    else if (!regexPassword.test(inputs.password)) {
        errors.password = "El password debe tener: mayusculas, minusculas, numero, un caracter especial y no ser menor de 6 caracteres ni mayor de 10"
    }

    return errors
}