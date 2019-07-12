import {useState, useEffect} from 'react';
export default function ({value, name, required, changeHandler, propertyName, disabled}) {
    const [val, setVal] = useState('');

    const update = (evt) => {
        setVal(evt.target.value);
        changeHandler(evt);
    };

    useEffect(() => {
        setVal(value);
    }, [value]);

    return (
        <div className="GeneralInput form-group">
            <label htmlFor={name}>{name}</label>
            <div className="input-group mb-3">
                <input type='text'
                       className="form-control"
                       id={name}
                       aria-describedby="emailHelp"
                       onChange={update}
                       value={val}
                       disabled={disabled || false}
                       data-target={propertyName}
                       required={required || false}
                       placeholder={name} />
            </div>
        </div>
    )
}