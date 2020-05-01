import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';


const Form = ({ addUser }) => {

    // managing state for our form inputs
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [check, setCheck] = useState(false)

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    });

    //setting up form requirements with schema using yup
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
            .required('Please Enter your password'),
        terms: yup
            .boolean()
            .oneOf([true]),
        
    })

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setIsButtonDisabled(!valid);
        });
    }, [formState, formSchema]);

    // app functions
    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({ ...errors, [e.target.name]: "" });
            })
            .catch(err => setErrors({ ...errors, [e.target.name]: err.errors[0] }));
    };

    const formSubmit = e => {
        e.preventDefault();
        setCheck(!check)
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
          addUser(response.data);
          setFormState({
            name: "",
            email: "",
            password: "",
            terms: ""
          });
        })
        .catch(err => console.log("error!", err.response));

        
    }

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    }
    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name
                <input
                    id="name"
                    type="text"
                    name="name"
                    data-cy="name"
                    placeholder="Please enter full name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </label>
            <label htmlFor="email">
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    data-cy="email"
                    value={formState.email}
                    onChange={inputChange}
                />
                {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
            </label>
            <label htmlFor="password">
                Password
                <input

                    type="password"
                    name="password"
                    data-cy="password"
                    value={formState.password}
                    onChange={inputChange}
                />
                {errors.email.length > 0 ? <p className="error">{errors.password}</p> : null}
            </label>
            <label htmlFor="terms" className="terms">
                <input

                    type="checkbox"
                    data-cy="terms"
                    name="terms"
                    checked={formState.terms}
                    onChange={inputChange}
                />
                Terms & Conditions
            </label>

            <button disabled={isButtonDisabled} type="submit" >
                Submit
            </button>

        </form>
    )
}

export default Form;