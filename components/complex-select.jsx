import Select from 'react-select';
import Error from '/components/error';

const ComplexSelect = ({
   id,
   hasError,
   errorText = 'Default dynamic error text',
   labelText = 'Default label text',
   options = []
}) => {
   return (
      <>
         <div className={hasError ? 'select select--error' : 'select'}>
            <Select
               options={options}
               isClearable={true}
               isMulti={true}
               isSearchable={true}
            />
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

export default ComplexSelect;
