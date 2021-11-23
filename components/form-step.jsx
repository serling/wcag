import InputRenderer from '/components/input-renderer';
import ProgressTracker from '/components/progress-tracker';
import StepActions from '/components/step-actions';

import actions from '/utilities/actions';

const FormStep = ({
    id,
    title = 'Placeholder title',
    onNext,
    dispatch,
    isValid,
    onPrevious,
    components,
    isActive,
    currentStepNumber,
    numberOfSteps
}) => {
    const handleOnBlur = componentId => {
        dispatch({
            type: actions.setInvalid,
            data: {
                stepId: id,
                componentId
            }
        });
    };

    return (
        <>
            <section>
                {title && <h2>{title}</h2>}
                <InputRenderer components={components} onBlur={handleOnBlur} />
                <div>is valid? {isValid}</div>
                <div className="actions">
                    <StepActions
                        onPrevious={onPrevious}
                        onNext={onNext}
                        isValid={isValid}
                    />
                </div>
                <div className="progress">
                    <ProgressTracker
                        id={`progress-${id}`}
                        currentStepNumber={currentStepNumber}
                        numberOfSteps={numberOfSteps}
                    />
                </div>
            </section>
            <style jsx>{`
                h2 {
                    margin-bottom: 1rem;
                }

                section {
                    border-style: dashed;
                    border-color: black;
                    padding: 1rem;
                    margin-bottom: 2rem;
                    border-color: ${isActive ? 'black' : 'transparent'};
                }

                .actions,
                .progress {
                    margin-top: 2rem;
                    display: flex;
                    justify-content: flex-end;
                }
            `}</style>
        </>
    );
};

export default FormStep;
