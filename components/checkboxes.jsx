import Image from 'next/image';

const types = {
   checkbox: 'checkbox',
   radio: 'radio'
};

const Checkboxes = ({
   id,
   hasError = false,
   labelText = 'Default label',
   errorText = 'Default dynamic error text',
   type = types.checkbox,
   options = []
}) => {
   return (
      <>
         <fieldset
            className={hasError ? 'checkboxes checkboxes--error' : 'checkboxes'}
         >
            <legend>{labelText}</legend>
            {options.map(
               ({ labelText, isChecked, onChange = () => {} }, index) => {
                  const optionId = `${id}-${index}`;

                  return (
                     <div key={index} className="checkbox">
                        <input
                           onChange={(e) => onChange(e.target.checked)}
                           name={type === types['radio'] ? id : optionId}
                           id={optionId}
                           type={types[type]}
                           checked={isChecked}
                        />
                        <label htmlFor={optionId}>{labelText}</label>
                     </div>
                  );
               }
            )}
         </fieldset>
         {hasError && errorText && (
            <div className="error">
               <div className="error-icon">
                  <Image
                     src="/vercel.svg"
                     alt="Vercel Logo"
                     width={72}
                     height={16}
                  />
               </div>
               <p>{errorText}</p>
            </div>
         )}

         <style jsx>{`
            input {
               margin: 0 0.5rem 0 0;
               width: 20px;
               height: 20px;
            }

            label {
               font-size: 1.2rem;
            }

            .checkbox {
               margin-bottom: 1rem;
               display: flex;
               align-items: center;
            }

            .checkboxes--error {
               border: 2px solid red;
            }

            .checkbox:last-child {
               margin-bottom: 0;
            }

            .error {
               color: red;
               margin-top: 0.5rem;
               display: flex;
               align-items: center;
            }

            .error-icon {
               margin-right: 0.5rem;
            }

            legend {
               margin-bottom: 0.5rem;
            }
         `}</style>
      </>
   );
};

export default Checkboxes;
