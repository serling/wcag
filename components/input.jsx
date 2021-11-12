import Image from 'next/image';

const types = {
   text: 'text',
   number: 'number',
   email: 'email',
   textarea: 'textarea'
};

const Input = ({
   id,
   placeholderText = 'Default placeholder',
   errorText = 'Default dynamic error message',
   hasError = false,
   onChange,
   labelText = 'Default label',
   leadText = 'Default description.',
   type = types.text
}) => {
   const InputElement = type === types['textarea'] ? 'textarea' : 'input';

   return (
      <>
         <label htmlFor={id}>{labelText}</label>
         <p className="lead">{leadText}</p>
         <InputElement
            className={hasError ? `input input--error` : 'input'}
            id={id}
            type={type !== types['textarea'] ? types[type] : null}
            placeholder={placeholderText}
            onChange={onChange}
         />
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
               <p className="error-text">{errorText}</p>
            </div>
         )}

         <style jsx>{`
            textarea {
               width: 300px;
               height: 150px;
               resize: none;
            }

            .error {
               margin-top: 0.5rem;
               display: flex;
               align-items: center;
               color: red;
            }

            .error-icon {
               margin-right: 0.5rem;
            }

            label {
               font-size: 1.2rem;
            }

            .lead {
               font-size: 1rem;
            }

            .input {
               padding: 0.5rem;
               min-width: 300px;
               border: 2px solid currentColor;
            }

            .input--error {
               border-color: red;
            }
         `}</style>
      </>
   );
};

export default Input;
