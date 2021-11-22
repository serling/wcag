const StepActions = ({ onPrevious, onNext }) => {
    return (
        <div className="step-actions">
            <button type="button" onClick={onPrevious}>
                Previous
            </button>
            <button type="button" onClick={onNext}>
                Next
            </button>
            <style jsx>
                {`
                    .stpe-actions {
                        margin-top: 1rem;
                        display: flex;
                        justify-content: flex-end;
                    }

                    button {
                        padding: 0.5rem;
                        margin-left: 1rem;
                        min-width: 100px;
                    }

                    button:first-child {
                        margin-left: 0;
                    }
                `}
            </style>
        </div>
    );
};

export default StepActions;
