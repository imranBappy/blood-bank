import React from 'react';
const Input = ({ name, action, placeholder, ...rest }) => {

    return (
        <div className="row">
            <i className="uil uil-envelope row__icon"></i>
            <input
                {...rest}
                className="row__input"
                action={action}
                required />
        </div>
    );
};

export default Input;