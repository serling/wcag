const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>

      <style jsx>{`
        button {
          padding: 0.5rem 2rem;
        }
      `}</style>
    </>
  );
};

export default Button;
