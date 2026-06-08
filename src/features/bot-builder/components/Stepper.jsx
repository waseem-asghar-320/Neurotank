export const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="mb-8">
      {/* Desktop Stepper (hidden on mobile) */}
      <div className="hidden sm:block">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex-1 relative">
              <div className="flex flex-col items-center">
                {/* Step Circle */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold
                    ${currentStep > step.number 
                      ? 'bg-green-500 text-white' 
                      : currentStep === step.number 
                        ? 'bg-black text-white' 
                        : 'bg-gray-200 text-gray-500'}
                  `}
                >
                  {currentStep > step.number ? '✓' : step.icon}
                </div>
                
                {/* Step Title */}
                <div className="text-center mt-2">
                  <div className={`text-xs font-medium ${currentStep === step.number ? 'text-black' : 'text-gray-400'}`}>
                    Step {step.number}
                  </div>
                  <div className={`text-sm ${currentStep === step.number ? 'text-black font-medium' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    absolute top-5 left-1/2 w-full h-0.5
                    ${currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'}
                  `}
                  style={{ transform: 'translateX(0%)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stepper (visible only on mobile) */}
      <div className="block sm:hidden">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Step {currentStep} of {steps.length}</span>
            <span>{Math.round((currentStep / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Step Info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-lg">
              {steps.find(s => s.number === currentStep)?.icon}
            </span>
            <span className="text-sm font-medium text-black">
              {steps.find(s => s.number === currentStep)?.title}
            </span>
          </div>
        </div>

        {/* Step Indicators (dots) */}
        <div className="flex justify-center gap-2 mt-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`
                w-2 h-2 rounded-full transition-all
                ${currentStep >= step.number ? 'bg-black w-4' : 'bg-gray-300'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};