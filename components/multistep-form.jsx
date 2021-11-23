import { useReducer, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import FormStep from '/components/form-step';

import clamp from '/utilities/clamp';
import actions from '/utilities/actions';

function reducer(state, action) {
    let newState;

    const { type, data } = action;

    switch (type) {
        case actions.setInvalid:
            newState = {
                ...state,
                steps: [
                    ...state?.steps?.map(step => {
                        if (data?.stepId !== step.id) return step;

                        return {
                            ...step,
                            isValid: true
                        };
                    })
                ]
            };

            break;
        default:
            throw new Error();
    }

    console.log(newState);

    return newState;
}

const MultistepForm = ({ steps = [] }) => {
    const [activeStepNumber, setActiveStepNumber] = useState(1);

    const [state, dispatch] = useReducer(reducer, {
        steps: [
            ...steps.map(step => {
                return {
                    ...step,
                    isValid: true //TODO: false
                };
            })
        ]
    });

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

    return (
        <>
            <form action="/" method="POST" onSubmit={e => handleOnSubmit(e)}>
                {state.steps.map(({ id, stepNumber, components, isValid }) => {
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
                                isValid={isValid}
                                title={`Steg ${stepNumber}`}
                                components={components}
                                currentStepNumber={activeStepNumber}
                                numberOfSteps={steps.length}
                                dispatch={dispatch}
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
