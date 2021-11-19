const ProgressTracker = ({ id, currentStepNumber = 0, numberOfSteps = 0 }) => {
   const percentageComplete = (
      (currentStepNumber / numberOfSteps) *
      100
   ).toFixed(2);

   return (
      <div>
         <label htmlFor={id}>{`Steg (${percentageComplete}%)`}</label>
         <progress id={id} value={percentageComplete} max={100}>
            {`${percentageComplete}%`}
         </progress>
      </div>
   );
};

export default ProgressTracker;
