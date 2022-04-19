import React from 'react';
import { useContext } from 'react';
import { LoadContext } from './Layout';
const InputFiled = (props) => {
    const { register, option, require, inputType, name, ...rest } = props.data
    const [loading] = useContext(LoadContext)
    return inputType === "input" ? <div className="input__box">
        <input {...props.register(name, require)} className="input" {...rest} required />
        {
            props.errors[name] && <p className="error">
                {props.errors[name].message ? props.errors[name].message : "Required"}
            </p>
        }
    </div> :
        inputType === "select" ?
            <div className="input__box">
                {/* <select {...props.register(name, require)} className="select" required>
                    {
                        option.map((op, i) => <option key={i} className="option" value={i === 0 ? "" : op}>{op}</option>)
                    }
                </select> */}
                <input placeholder={props.data.placeholder} className="input"
                    {...props.register(name, require)} list={props.data.name} name={props.data.name} id={props.data.name} />
                <datalist id={props.data.name} {...props.register(name, require)} >
                    {
                        option.map((op, i) => <option key={i} className="option" value={op}>{op}</option>)
                    }
                </datalist>
            </div> : inputType === "checkbox" ? <div className="policy">
                <input {...props.register(name, require)} type="checkbox" required />
                <h3 className="h3">I accept all terms & condition</h3>
            </div> : inputType === "submit" ?
                <div className="input__box button">
                    <input className="input" type="submit" disabled={loading ? true : false} value={loading ? "Loading..." : "Signup"} />
                </div> :
                ""
};
export default InputFiled;