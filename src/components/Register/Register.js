import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h3>Please register now</h3>
            <input type="text" placeholder='Your Name' />
            <br />
            <input type="email" placeholder='Your Email' />
            <br />
            <input type="password" placeholder='your password' />
            <br />
            <input type="submit" value="Register" />
        </div>
    );
};

export default Register;