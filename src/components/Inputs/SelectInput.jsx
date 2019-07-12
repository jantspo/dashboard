import {useState, useEffect} from 'react';
export default function ({value, name, required, changeHandler, propertyName, options, field}) {
    const [val, setVal] = useState(value || '');

    const update = (evt) => {
        setVal(evt.target.value);
        changeHandler(evt);
    };

    useEffect(() => {
        setVal(value);
    }, [value]);


    const selectOptions = options ? options.map(option => <option key={option[field]} value={option[field]}>{option[field]}</option>) : [];

    return (
        <div className="GeneralInput form-group">
            <label htmlFor={name}>{name}</label>
            <div className="input-group mb-3">
                <select className="form-control"
                        id={name}
                        data-target={propertyName}
                        value={val}
                        required={required || false}
                        onChange={update}>
                    <option value="">Select</option>
                    {selectOptions}
                </select>
            </div>
        </div>
    )
}