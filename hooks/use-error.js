import { useCallback, useState } from 'react';

const UseError = initialErrorMessage => {
   const [errorMessage, setActiveErrorMessage] = useState(initialErrorMessage);

   const clearErrorMessage = useCallback(() => {
      setActiveErrorMessage('');
   }, [setActiveErrorMessage]);

   const setErrorMessage = useCallback(
      text => {
         setActiveErrorMessage(text);
      },
      [setActiveErrorMessage]
   );

   return [errorMessage, setErrorMessage, clearErrorMessage];
};

export default UseError;
