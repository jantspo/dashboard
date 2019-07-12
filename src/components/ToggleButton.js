import {useState} from 'react';
export default function ({initialValue}) {
    const [value, setValue] = useState(initialValue);
    return (
        <label className="switch">
            <input type="checkbox" value={value}/>
            <span className="slider round" />
            <style jsx>{`
                /* The switch - the box around the slider */
                .switch {
                  position: relative;
                  display: inline-block;
                  width: 40px;
                  height: 20px;
                      border: 1px solid #adadad;
    border-radius: 12px;
                }
                
                /* Hide default HTML checkbox */
                .switch input {
                  opacity: 0;
                  width: 0;
                  height: 0;
                }
                
                /* The slider */
                .slider {
                  position: absolute;
                  cursor: pointer;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background-color: #ccc;
                  -webkit-transition: .4s;
                  transition: .4s;
                }
                
                .slider:before {
                  position: absolute;
                  content: "";
                  height: 20px;
                  width: 20px;
                  left: -1px;
                  bottom: -1px;
                  background-color: white;
                  -webkit-transition: .4s;
                  transition: .4s;
                }
                
                input:checked + .slider {
                  background-color: #2196F3;
                }
                
                input:focus + .slider {
                  box-shadow: 0 0 1px #2196F3;
                }
                
                input:checked + .slider:before {
                  -webkit-transform: translateX(20px);
                  -ms-transform: translateX(20px);
                  transform: translateX(20px);
                }
                
                /* Rounded sliders */
                .slider.round {
                  border-radius: 34px;
         
                }
                
                .slider.round:before {
                  border-radius: 50%;
                  border: 1px solid #adadad;
                }
            `}</style>
        </label>
    )
}