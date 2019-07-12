import {useState, useEffect} from 'react';
export default function({value, name, required, changeHandler, propertyName}) {
    const [val, setVal] = useState('');

    const update = (evt) => {
        setVal(evt.target.value);
        changeHandler(evt);
    };

    useEffect(() => {
        setVal(value);
    }, [value]);


    const handleChange = (evt) => {
        const val = evt.target.value.replace(/\D\./g,'');
        update(val);
    };

    const formatValue = (evt) => {
        const val = parseFloat(evt.target.value.replace(/\D\wants ./g,'')).toFixed(2);
        update(val);
    };

    return (
        <div className="form-group">
            <label htmlFor={name}>{name}</label>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>

                <input type="text"
                       className="form-control"
                       id={name} aria-describedby="emailHelp"
                       onChange={handleChange}
                       onBlur={formatValue}
                       value={val}
                       placeholder={name} />
            </div>
        </div>
    )
}