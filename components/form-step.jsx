import InputRenderer from '/components/input-renderer';
import ProgressTracker from '/components/progress-tracker';
import StepActions from '/components/step-actions';

const FormStep = ({
    id,
    title = 'Placeholder title',
    onChange,
    onNext,
    dispatch,
    onPrevious,
    components,
    isActive,
    currentStepNumber,
    numberOfSteps
}) => {
    // TOOD: pass dispatch down

    // dispatch({
    //    type: 'set-invalid',
    //    data: {
    //       stepId: 'step id',
    //       componentId: 'an-id'
    //    }
    // })

    return (
        <>
            <section>
                {title && <h2>{title}</h2>}
                <InputRenderer components={components} onChange={onChange} />
                <div className="actions">
                    <StepActions onPrevious={onPrevious} onNext={onNext} />
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
