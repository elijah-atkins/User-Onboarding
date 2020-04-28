import React, { useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Form = () => {
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
            <button>
                Submit
            </button>
        </form>
    )
}

export default Form;