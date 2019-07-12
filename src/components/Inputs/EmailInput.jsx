export default function({target, targetValue, inputName, valueChange}) {

    const formatValue = (evt) => {
        const val = evt.target.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        valueChange(val);
    };

    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"
                   className="form-control"
                   id={target}
                   onChange={valueChange}
                   onBlur={formatValue}
                   value={targetValue}
                   placeholder={inputName}/>
        </div>
    )
}