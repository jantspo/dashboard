import { useState } from 'react';

export default function({target, targetValue, inputName, valueChange, regex, required}) {
    const [inputInvalid, setValidity] = useState(null);

    const handleChange = (evt) => {
        const val = evt.target.value.replace(/\D\./g,'');
        valueChange(val);
    };

    const formatValue = (evt) => {
        setValidity(evt.target.value.match(regex));
    };

    return (
        <div className="form-group">
            <label htmlFor={target}>{inputName}</label>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>

                <input type="text"
                       className="form-control"
                       id={target} aria-describedby="emailHelp"
                       onChange={handleChange}
                       onBlur={formatValue}
                       value={targetValue}
                       required={required || false}
                       placeholder={inputName} />
                {
                    inputInvalid ?
                    <div className="invalid-feedback">
                        Incorrect format.
                    </div> :
                    null
                }

            </div>
        </div>
    )
}