import {useState, useEffect} from 'react';

export default function ({value, name, required, changeHandler, propertyName}) {
    const [val, setVal] = useState('');

    const update = (evt) => {
        setVal(evt.target.value);
        changeHandler(evt);
    };

    useEffect(() => {
        setVal(value);
    }, [value]);

    return (
        <div className="TextAreaInput form-group">
            <label htmlFor={name}>{name}</label>
            <div className="input-group mb-3">
                <textarea className="form-control"
                          id={name}
                          onChange={update}
                          value={val}
                          data-target={propertyName}
                          required={required || false}
                          placeholder={name}
                          rows="3" />
            </div>
        </div>
    )
}