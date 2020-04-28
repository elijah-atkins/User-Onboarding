import React, { useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Form = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    })

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Name is a required field"),
        email: yup
            .string()
            .email("Must enter a valid email address")
            .required(),
        password: yup  
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    })

    return(
        <form>
            <label htmlFor="name">
                Name
                <input
                    id="name"
                    type="text"
                    name="name"
                />
            </label>
            <label htmlFor="email">
                Email
                <input
                    type="email"
                    name="email"
                />
            </label>
            <label htmlFor="password">
                Password
                <input

                    type="password"
                    name="password"
                />
            </label>
            <label htmlFor="terms" className="terms">
                <input

                    type="checkbox"
                />
                Terms & Conditions
            </label>
            <button disabled="isButtonDisabled">
                Submit
            </button>
        </form>
    )
}

export default Form;