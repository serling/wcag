const Content = ({ children }) => {
    return (
        <>
            <div className="content">{children}</div>
            <style jsx>{`
                .content {
                    padding: 0 2rem;
                    max-width: 768px;
                    margin: 0 auto;
                }

                @media screen and (min-width: 768px) {
                    .content {
                        padding: 0;
                    }
                }
            `}</style>
        </>
    );
};

export default Content;
