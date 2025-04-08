type StepperProps = {
  currentStep: number;
  steps: string[];
};

const StepperComponent: React.FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex justify-center items-center w-8 h-8 rounded-full ${
              index <= currentStep
                ? "bg-primary-medium text-semantic-white"
                : "bg-gray-300 text-semantic-black"
            }`}>
            {index + 1}
          </div>
          <div className="mx-2">{steps[index]}</div>
          {index < steps.length - 1 && (
            <div
              className={`w-8 h-1 ${
                index < currentStep ? "bg-primary-medium" : "bg-gray-300"
              }`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepperComponent;
