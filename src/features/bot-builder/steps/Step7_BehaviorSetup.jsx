export const Step7_BehaviorSetup = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black">Bot Behavior Setup</h2>
        <p className="text-gray-500 text-sm mt-1">Configure how your bot responds</p>
      </div>

      <div className="space-y-5">
        {/* Response Format */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Response Format
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['Text only', 'Structured (tables)'].map(format => (
              <button
                key={format}
                onClick={() => updateFormData({ responseFormat: format })}
                className={`
                  p-4 border rounded-xl text-center transition-all
                  ${formData.responseFormat === format ? 'border-black bg-black text-white' : 'border-gray-200'}
                `}
              >
                <div className="text-2xl mb-1">{format === 'Text only' ? '📝' : '📊'}</div>
                <div className="font-medium">{format}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Fallback Message */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            Fallback Message
          </label>
          <input
            type="text"
            value={formData.fallbackMessage}
            onChange={(e) => updateFormData({ fallbackMessage: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
          />
          <p className="text-xs text-gray-400 mt-1">Message shown when bot can't find an answer</p>
        </div>

        {/* Safety Rules Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div>
            <div className="font-medium text-black">🛡️ Safety Rules</div>
            <div className="text-sm text-gray-500">Enable content filtering and safety guidelines</div>
          </div>
          <button
            onClick={() => updateFormData({ safetyRules: !formData.safetyRules })}
            className={`
              w-12 h-6 rounded-full transition-all
              ${formData.safetyRules ? 'bg-green-500' : 'bg-gray-300'}
            `}
          >
            <div className={`
              w-5 h-5 bg-white rounded-full transition-all mt-0.5
              ${formData.safetyRules ? 'ml-6' : 'ml-0.5'}
            `} />
          </button>
        </div>
      </div>
    </div>
  );
};