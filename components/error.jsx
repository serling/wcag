import Image from 'next/image';

const Error = ({ text }) => {
   return (
      <>
         <div className="error">
            <div className="error-icon">
               <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
               />
            </div>
            <p>{text}</p>
         </div>

         <style jsx>{`
            .error {
               margin-top: 0.5rem;
               display: flex;
               align-items: center;
               color: red;
            }

            .error-icon {
               margin-right: 0.5rem;
            }
         `}</style>
      </>
   );
};

export default Error;
