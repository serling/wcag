const ProgressTracker = ({ currentStepNumber = 0, numberOfSteps = 0 }) => {
   const percentageComplete = (
      (currentStepNumber / numberOfSteps) *
      100
   ).toFixed(2);

   return (
      <div>
         <label htmlFor="progress-1">{`Steg (${percentageComplete}%)`}</label>
         <progress id="progress-1" value={percentageComplete} max={100}>
            {`${percentageComplete}%`}
         </progress>
      </div>
   );
};

export default ProgressTracker;
