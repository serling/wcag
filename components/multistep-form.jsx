import { useReducer, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import FormStep from '/components/form-step';

import clamp from '/utilities/clamp';

function reducer(state, action) {
    let newState;

    const { type, data } = action;

    switch (type) {
        case 'set-invalid':
            newState = {
                ...state,
                steps: [
                    ...state?.steps?.map(step => {
                        return {
                            ...step,
                            components: step.components?.map(component => {
                                if (component.id !== data.componentId)
                                    return component;

                                return { ...component, isValid: false };
                            })
                        };
                    })
                ]
            };
            break;
        default:
            throw new Error();
    }

    return newState;
}

const MultistepForm = ({ steps = [] }) => {
    const [activeStepNumber, setActiveStepNumber] = useState(1);

    const [state, dispatch] = useReducer(reducer, {
        steps: [
            ...steps.map(step => {
                return {
                    ...step,
                    components: step.components.map(component => {
                        return {
                            ...component,
                            isValid: false,
                            isDirty: false,
                            isTouched: false
                        };
                    })
                };
            })
        ]
    });

    useEffect(() => {
        console.log(state);
    }, [state]);

    const handleOnSubmit = e => {
        e.preventDefault();
    };

    const handleOnNextClick = () => {
        setActiveStepNumber(oldStepNumber =>
            clamp(oldStepNumber + 1, 0, steps.length)
        );
    };

    const handleOnPreviousClick = () => {
        setActiveStepNumber(oldStepNumber =>
            clamp(oldStepNumber - 1, 1, steps.length)
        );
    };

    const handleOnChange = (id, value) => {
        console.log(id, value);
    };

    return (
        <>
            <form action="/" method="POST" onSubmit={e => handleOnSubmit(e)}>
                {state.steps.map(({ id, stepNumber, components }) => {
                    const isActive = activeStepNumber === stepNumber;

                    return (
                        <motion.div
                            key={id}
                            animate={{ scale: isActive ? 1.1 : 1 }}
                            transition={{ duration: 0.2 }}
                            initial={false}
                        >
                            <FormStep
                                id={id}
                                title={`Steg ${stepNumber}`}
                                components={components}
                                currentStepNumber={activeStepNumber}
                                numberOfSteps={steps.length}
                                dispatch={dispatch}
                                onChange={handleOnChange}
                                onPrevious={handleOnPreviousClick}
                                onNext={handleOnNextClick}
                                isActive={isActive}
                            />
                        </motion.div>
                    );
                })}
            </form>

            <style jsx>{``}</style>
        </>
    );
};

export default MultistepForm;
