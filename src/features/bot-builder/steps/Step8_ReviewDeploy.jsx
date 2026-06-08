export const Step8_ReviewDeploy = ({ formData, onDeploy }) => {
  const isReady = formData.dbConnected && formData.whatsappConnected && formData.aiModel;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black">Review & Create</h2>
        <p className="text-gray-500 text-sm mt-1">Review your bot configuration</p>
      </div>

      {/* Summary Panel */}
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="font-semibold text-black mb-3">Bot Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Bot Name:</span>
              <span className="font-medium">{formData.botName || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Industry:</span>
              <span>{formData.industryType || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Language:</span>
              <span>{formData.language}</span>
            </div>
          </div>
        </div>

        {/* Connection Statuses */}
        <div className="grid grid-cols-2 gap-3">
          <div className={`p-3 rounded-xl border ${formData.dbConnected ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            <div className="flex items-center gap-2">
              <span>{formData.dbConnected ? '✅' : '❌'}</span>
              <span>Database Connected</span>
            </div>
          </div>
          <div className={`p-3 rounded-xl border ${formData.whatsappConnected ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            <div className="flex items-center gap-2">
              <span>{formData.whatsappConnected ? '✅' : '❌'}</span>
              <span>WhatsApp Linked</span>
            </div>
          </div>
          <div className={`p-3 rounded-xl border ${formData.aiModel ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            <div className="flex items-center gap-2">
              <span>{formData.aiModel ? '✅' : '❌'}</span>
              <span>Model Selected</span>
            </div>
          </div>
          <div className="p-3 rounded-xl border border-green-200 bg-green-50">
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Schema Ready</span>
            </div>
          </div>
        </div>

        {/* Selected Configuration */}
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="font-semibold text-black mb-2">Selected Configuration</h3>
          <div className="space-y-1 text-sm">
            <p>🤖 AI Model: {formData.aiModel || 'Not selected'}</p>
            <p>📝 Response Style: {formData.responseStyle}</p>
            <p>🌡️ Temperature: {formData.temperature}</p>
            <p>📱 Response Format: {formData.responseFormat}</p>
          </div>
        </div>
      </div>

      {/* Deploy Button */}
      <button
        onClick={onDeploy}
        disabled={!isReady}
        className={`
          w-full py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2
          ${isReady ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
        `}
      >
        🚀 Deploy Bot
      </button>

      {!isReady && (
        <p className="text-center text-sm text-red-500">
          Please complete all required steps before deploying
        </p>
      )}
    </div>
  );
};