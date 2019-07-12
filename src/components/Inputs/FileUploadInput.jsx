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



        <div className="FileUploadInput">
            <label className="label">{name}</label>
            <div className="form-group">
                <label className="custom-file-label"
                       htmlFor="inputGroupFile04">Choose file</label>
                <div className="input-group">
                    <input type="file"
                           className="custom-file-input"
                           id="inputGroupFile04"
                           aria-describedby="inputGroupFileAddon04" />
                </div>
            </div>
            <style jsx>{`
                .label{
                    display: inline-block;
                    margin-bottom: .5rem;
                }
                
                .custom-file-label{
                    margin-left: 15px;
                    margin-right: 15px;
                    margin-bottom: 0;
                    margin-top: 34px;
                }
            `}</style>
            {/*<label htmlFor={name}>{name}</label>*/}
            {/*<div className="input-group mb-3">*/}
            {/*    <input type='text'*/}
            {/*           className="form-control"*/}
            {/*           id={name}*/}
            {/*           aria-describedby="emailHelp"*/}
            {/*           onChange={update}*/}
            {/*           value={val}*/}
            {/*           data-target={propertyName}*/}
            {/*           required={required || false}*/}
            {/*           placeholder={name} />*/}
            {/*</div>*/}
        </div>
    )
}











