import Image from 'next/image';

const Select = ({
   id,
   hasError,
   errorText = 'Default dynamic error text',
   labelText = 'Default label text',
   options = []
}) => {
   return (
      <>
         <div className={hasError ? 'select select--error' : 'select'}>
            <label htmlFor={id}>{labelText}</label>
            <select id={id}>
               {options.map(({ labelText, value }, index) => {
                  return (
                     <option key={index} id={index} value={value}>
                        {labelText}
                     </option>
                  );
               })}
            </select>
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
         </div>

         <style jsx>{`
            select {
               font-size: 1.5rem;
               padding: 0.25rem 1rem;
            }

            label {
               margin-bottom: 0.5rem;
            }

            .select--error select {
               border: 2px solid red;
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
         `}</style>
      </>
   );
};

export default Select;
