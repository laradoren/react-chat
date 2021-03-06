import LoginForm from "../components/LoginForm";
import {withFormik} from "formik";
import validateForm from "./../../../utils/validate";

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        username: "",
        password: ""
    }),
    validate: values => {
        const errors = {};

        validateForm({isAuth: true, values, errors});

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(LoginForm);