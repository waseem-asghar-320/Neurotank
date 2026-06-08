import { useState } from 'react';
import { Stepper } from '../components/Stepper';
import { Step1_BusinessInfo } from '../steps/Step1_BusinessInfo';
import { Step2_DatabaseConnection } from '../steps/Step2_DatabaseConnection';
import { Step3_SchemaSetup } from '../steps/Step3_SchemaSetup';
import { Step4_DataUnderstanding } from '../steps/Step4_DataUnderstanding';
import { Step5_WhatsAppSetup } from '../steps/Step5_WhatsAppSetup';
import { Step6_AIModelSelection } from '../steps/Step6_AIModelSelection';
import { Step7_BehaviorSetup } from '../steps/Step7_BehaviorSetup';
import { Step8_ReviewDeploy } from '../steps/Step8_ReviewDeploy';
import { DeploymentScreen } from '../steps/DeploymentScreen';

export const BotBuilderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isDeploying, setIsDeploying] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    businessName: '',
    industryType: '',
    botName: '',
    language: 'English',
    // Step 2
    dbType: '',
    connectionString: '',
    dbConnected: false,
    // Step 3
    schema: null,
    // Step 4
    allowedTables: [],
    forbiddenTables: [],
    businessRules: '',
    // Step 5
    phoneNumber: '',
    apiToken: '',
    whatsappConnected: false,
    // Step 6
    aiModel: '',
    temperature: 0.7,
    responseStyle: 'Balanced',
    // Step 7
    responseFormat: 'Text only',
    fallbackMessage: "I couldn't find data for your query.",
    safetyRules: false,
  });

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleDeploy = () => {
    setIsDeploying(true);
    // Start deployment process
    setTimeout(() => {
      setCurrentStep(9); // Go to deployment screen
    }, 500);
  };

  const steps = [
    { number: 1, title: 'Business Info', icon: '🏢' },
    { number: 2, title: 'Database', icon: '🗄️' },
    { number: 3, title: 'Schema', icon: '📋' },
    { number: 4, title: 'AI Rules', icon: '🧠' },
    { number: 5, title: 'WhatsApp', icon: '📱' },
    { number: 6, title: 'AI Model', icon: '🤖' },
    { number: 7, title: 'Behavior', icon: '⚙️' },
    { number: 8, title: 'Review', icon: '✅' },
  ];

  if (isDeploying && currentStep === 9) {
    return <DeploymentScreen formData={formData} />;
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_BusinessInfo formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step2_DatabaseConnection formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Step3_SchemaSetup formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Step4_DataUnderstanding formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step5_WhatsAppSetup formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <Step6_AIModelSelection formData={formData} updateFormData={updateFormData} />;
      case 7:
        return <Step7_BehaviorSetup formData={formData} updateFormData={updateFormData} />;
      case 8:
        return <Step8_ReviewDeploy formData={formData} onDeploy={handleDeploy} />;
      default:
        return <Step1_BusinessInfo formData={formData} updateFormData={updateFormData} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-black tracking-tight">Create Your AI Bot</h1>
        <p className="text-gray-500 mt-1">Follow the steps below to build your WhatsApp AI assistant</p>
      </div>

      {/* Stepper */}
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Step Content */}
      <div className="mt-8 border border-gray#-200 rounded-2xl p-6 md:p-8">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 ">
        {currentStep > 1 && currentStep < 9 && (
          <button
            onClick={prevStep}
            className="px-6 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition"
          >
            ← Back
          </button>
        )}
        {currentStep < 8 && (
          <button
            onClick={nextStep}
            className="ml-auto px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  );
};