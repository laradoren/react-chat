const validateForm = ({isAuth, errors, values}) => {
    const rules = {
        email: (value) => {
            if (!value) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Invalid email address';
            }
        },
        username: (value) => {
            if (!value) {
                errors.username = 'Required';
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = 'Required';
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                errors.password = isAuth ? 'Wrong password' : 'Password is too simple';
            }
        },
        repeat: (value) => {
            if (!values) {
                errors.repeat = 'Required';
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                errors.repeat = isAuth ? 'Wrong password' : 'Password is too simple';
            } else if(value !==  values.password) {
                errors.repeat = 'Passwords is not equal';
            }
        }
    }

    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key])
    );
};

export default validateForm;