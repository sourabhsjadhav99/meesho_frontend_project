import React from 'react';

function ProgressBar({ currentStep }) {
  const steps = ['Cart', 'Address', 'Payment', 'Summary'];
  return (
    <div className="flex justify-around my-5">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex-1 text-center py-2 ${index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
