const Form = ({ children, action = '/', method = 'post' }) => {
   const handleOnSubmit = e => {
      e.preventDefault();
   };

   return (
      <>
         <form
            action={action}
            method={method}
            onSubmit={e => handleOnSubmit(e)}
         >
            {children}
         </form>

         <style jsx>{`
            form {
            }
         `}</style>
      </>
   );
};

export default Form;
