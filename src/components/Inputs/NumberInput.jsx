export default function ({value, name, required, changeHandler, min, max}) {
    return (
        <div className="GeneralInput form-group">
            <label htmlFor={name}>{name}</label>

            <div className="input-group mb-3">
                <input type='text'
                       className="form-control"
                       id={name}
                       aria-describedby="emailHelp"
                       onChange={changeHandler}
                       value={value}
                       min={min}
                       max={max}
                       required={required || false}
                       placeholder={name} />
            </div>
        </div>
    )
}