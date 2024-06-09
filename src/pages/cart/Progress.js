import React from 'react';

// ProgressBar component displays progress steps with labels
const ProgressBar = ({ currentStep }) => {
  // Array of steps with their numbers and labels
  const steps = [
    { number: 1, label: 'Cart' },
    { number: 2, label: 'Address' },
    { number: 3, label: 'Payment' },
    { number: 4, label: 'Summary' },
  ];

  // JSX for rendering progress bar
  return (
    <div className="flex justify-between items-center my-6 gap-4">
      {/* Map through steps array to render each step */}
      {steps.map((step) => (
        <div key={step.number} className="flex-1 relative text-center w-[150px]">
          {/* Step number circle with dynamic styling based on current step */}
          <div
            className={`w-5 h-5 text-[14px] rounded-full mx-auto ${
              currentStep >= step.number ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border-2'
            } flex items-center justify-center`}
          >
            {step.number}
          </div>
          {/* Step label */}
          <div className="mt-2 text-gray-700">{step.label}</div>
          {/* Horizontal line for all steps except the last one */}
          {step.number !== steps.length && (
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 w-full h-0.5 bg-gray-300 z-0"></div>
          )}
          {/* Blue line indicating completed steps */}
          {step.number !== steps.length && currentStep >= step.number && (
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 w-full h-0.5 bg-blue-500 z-10"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
