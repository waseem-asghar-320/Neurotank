import { useState, useEffect } from 'react';

export const DeploymentScreen = ({ formData }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [deployed, setDeployed] = useState(false);
  const [botUrl, setBotUrl] = useState('');

  const steps = [
    { name: 'Creating agent', duration: 2000 },
    { name: 'Connecting Database', duration: 2000 },
    { name: 'Deploying API', duration: 2000 },
    { name: 'Setting webhook', duration: 2000 },
    { name: 'Activating WhatsApp bot', duration: 2000 },
  ];

  useEffect(() => {
    let timeouts = [];
    let currentProgress = 0;

    steps.forEach((step, index) => {
      const timeout = setTimeout(() => {
        setCurrentStep(step.name);
        currentProgress += 20;
        setProgress(currentProgress);
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setDeployed(true);
            setBotUrl(`https://bot.dashboard.com/${formData.botName.toLowerCase().replace(/\s/g, '-')}`);
          }, 1000);
        }
      }, step.duration * (index + 1));
      
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (deployed) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-semibold text-black mb-2">Deployment Successful!</h1>
          <p className="text-gray-500 mb-8">Your bot is now live and ready to use</p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-black mb-3">Bot Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Bot Name:</span>
                <span className="font-medium">{formData.botName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bot URL:</span>
                <a href={botUrl} className="text-blue-500 hover:underline">{botUrl}</a>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">WhatsApp Status:</span>
                <span className="text-green-500">● Active</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
              Go to Dashboard
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition">
              View Bot
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-black">Deploying Your Bot</h1>
        <p className="text-gray-500 mt-1">Please wait while we set everything up</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-black h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Status Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-6 h-6 flex items-center justify-center">
              {progress >= (index + 1) * 20 ? (
                <span className="text-green-500">✓</span>
              ) : currentStep === step.name ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <span className="text-gray-400">○</span>
              )}
            </div>
            <span className={progress >= (index + 1) * 20 ? 'text-black' : 'text-gray-400'}>
              {step.name}
            </span>
          </div>
        ))}
      </div>

      {/* Live Logs */}
      <div className="mt-6 p-4 bg-black rounded-xl">
        <div className="text-green-400 font-mono text-xs space-y-1">
          <p>&gt; Initializing deployment...</p>
          {currentStep && <p>&gt; {currentStep}...</p>}
          {progress === 100 && <p>&gt; Deployment complete! Starting bot...</p>}
        </div>
      </div>
    </div>
  );
};