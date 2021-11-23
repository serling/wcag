const Header = ({ text, children, level = 2 }) => {
    const Element = `h${level}`;

    return text || children ? (
        <>
            <Element className="header">{children || text}</Element>
            <style jsx>{`
                h1 {
                    color: #323285;
                }
            `}</style>
        </>
    ) : null;
};

export default Header;
