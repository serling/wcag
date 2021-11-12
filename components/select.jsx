import Error from '/components/error';

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
            {hasError && errorText && <Error text={errorText} />}
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
         `}</style>
      </>
   );
};

export default Select;
