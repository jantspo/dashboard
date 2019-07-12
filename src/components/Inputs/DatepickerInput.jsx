import {useState, useEffect} from 'react';
import "react-datepicker/dist/react-datepicker";

export default function({value, name, required, changeHandler, propertyName, disabled}) {
    const [val, setVal] = useState('');

    const update = (evt) => {
        setVal(evt.target.value);
        changeHandler(evt);
    };

    useEffect(() => {
        setVal(value);
    }, [value]);

    return (
        <div className="DatepickerInput form-group">
            <label htmlFor={name}>{name}</label>
            <input type='date'
                   className="form-control"
                   id={name}
                   aria-describedby="emailHelp"
                   onChange={update}
                   value={val}
                   data-target={propertyName}
                   required={required || false}
                   disabled={disabled || false}
                   placeholder={name} />
        </div>
    )
}