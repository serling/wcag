import Image from 'next/image';

const Error = ({ id, text }) => {
   return (
      <>
         <div className="error" role="alert" id={id}>
            <div className="error-icon">
               <Image
                  src="/warning.svg"
                  alt="warning icon"
                  width={24}
                  height={24}
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

            p {
               font-weight: 500;
            }

            .error-icon {
               margin-right: 0.5rem;
               line-height: 0;
            }
         `}</style>
      </>
   );
};

export default Error;
