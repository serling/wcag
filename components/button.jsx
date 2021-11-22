import Image from 'next/image';

const types = {
    button: 'button',
    submit: 'submit'
};

const Button = ({
    text,
    textIsHidden,
    onClick,
    hasIcon,
    type = types.button
}) => {
    return (
        <>
            <button onClick={onClick} type={type}>
                {hasIcon && (
                    <span className="icon">
                        <Image
                            src="/warning.svg"
                            alt="warning icon"
                            width={24}
                            height={24}
                        />
                    </span>
                )}
                <span className="text">{text}</span>
            </button>

            <style jsx>{`
                button {
                    padding: 0.5rem 2rem;
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .text {
                    ${textIsHidden ? 'opacity: 0; width: 0; height: 0;' : ''}
                }

                .icon {
                    line-height: 0;
                }

                .icon ~ .text {
                    margin-left: 0.25rem;
                }
            `}</style>
        </>
    );
};

Button.types = types;

export default Button;
