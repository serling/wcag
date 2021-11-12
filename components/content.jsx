const Content = ({ children }) => {
   return (
      <>
         <div className="content">{children}</div>
         <style jsx>{`
            .content {
               max-width: 760px;
               margin: 0 auto;
            }
         `}</style>
      </>
   );
};

export default Content;
