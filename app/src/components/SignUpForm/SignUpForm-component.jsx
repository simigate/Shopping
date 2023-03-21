import { useState } from "react";
import { createUserAuthFromEmailPassword, createUserDocFromAuth, createUserDocFromEmailPassword } from "../../utils/Firebase.utils";
import Button from "../Button/Button-component";
import FormInput from "../FormInput/FormInput-component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password === confirmPassword) {
            try {
                const { user } = await createUserAuthFromEmailPassword(email, password)
                const userDocRef = await createUserDocFromAuth(user, { displayName });
            }
            catch (error) { console.log(error.message); }
        } else {
            alert("Passwords don't match")
        }


    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className="signUpContainer">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="User Name" type="text" required name="displayName" value={displayName} onChange={handleChange} />
                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} />
                <FormInput label="Confirm Password" type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                <Button type="submit">
                    Sign In
                </Button>
            </form>
        </div>
    )
}
export default SignUpForm
