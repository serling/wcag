import Input from '/components/input';
import Checkboxes from '/components/checkboxes';
import Toggle from '/components/toggle';
import Select from '/components/select';
import ComplexSelect from '/components/complex-select';

const inputTypes = {
    Input,
    Select,
    ComplexSelect,
    Checkboxes,
    Toggle
};

const InputRenderer = ({ components = [], onChange, onBlur }) => {
    return (
        <>
            <div>
                {components.map(({ type, id, props }) => {
                    const Component = inputTypes[type];

                    return (
                        <div key={id} className="input">
                            <Component
                                {...props}
                                onBlur={onBlur}
                                onChange={onChange}
                            />
                        </div>
                    );
                })}
            </div>
            <style jsx>
                {`
                    .input {
                        margin-bottom: 2rem;
                    }

                    .input:last-child {
                        margin-bottom: 0;
                    }
                `}
            </style>
        </>
    );
};

export default InputRenderer;
