const Toggle = ({ labelText = 'Default label' }) => {
   return (
      <>
         <div className="label">{labelText}</div>
         <label className="toggle">
            <input type="checkbox" />
            <span className="slider" />
         </label>

         <style jsx>{`
            .label {
               margin-bottom: 0.5rem;
            }

            .toggle {
               position: relative;
               display: inline-block;
               width: 60px;
               height: 34px;
            }

            input {
               opacity: 0;
               width: 0;
               height: 0;
            }

            input:focus + .slider:before {
               border-color: black;
            }

            .slider {
               position: absolute;
               border-radius: 34px;
               cursor: pointer;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               background-color: #ccc;
               transition: 0.3s;
            }

            .slider:before {
               border: 2px solid transparent;
               position: absolute;
               border-radius: 50%;
               content: '';
               height: 24px;
               width: 24px;
               left: 4px;
               bottom: 3px;
               background-color: white;
               transition: 0.3s;
            }

            input:checked + .slider {
               background-color: #76ae20;
            }

            input:focus + .slider {
               box-shadow: 0 0 1px #76ae20;
            }

            input:checked + .slider:before {
               transform: translateX(26px);
            }
         `}</style>
      </>
   );
};

export default Toggle;
