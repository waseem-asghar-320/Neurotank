export const Step6_AIModelSelection = ({ formData, updateFormData }) => {
  const models = [
    { id: 'gpt4', name: 'GPT-4', provider: 'OpenAI', icon: '🧠', badge: 'Most Powerful', price: '$$$' },
    { id: 'gpt35', name: 'GPT-3.5 Turbo', provider: 'OpenAI', icon: '⚡', badge: 'Fast & Affordable', price: '$' },
    { id: 'gemini', name: 'Gemini Pro', provider: 'Google', icon: '✨', badge: 'Great for Reasoning', price: '$$' },
    { id: 'claude', name: 'Claude 3', provider: 'Anthropic', icon: '🎯', badge: 'Safe & Accurate', price: '$$' },
    { id: 'custom', name: 'Custom Model', provider: 'Your API', icon: '🔧', badge: 'Bring Your Own', price: 'Variable' },
  ];

  const responseStyles = [
    { value: 'Short', description: 'Brief, concise answers', icon: '📝' },
    { value: 'Balanced', description: 'Moderate detail, clear', icon: '⚖️' },
    { value: 'Detailed', description: 'Comprehensive, thorough', icon: '📚' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black">AI Model Selection</h2>
        <p className="text-gray-500 text-sm mt-1">Choose the brain of your bot</p>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {models.map(model => (
          <button
            key={model.id}
            onClick={() => updateFormData({ aiModel: model.id })}
            className={`
              p-4 border rounded-xl text-left transition-all hover:shadow-md
              ${formData.aiModel === model.id ? 'border-black bg-gray-50' : 'border-gray-200'}
            `}
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl">{model.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-black">{model.name}</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{model.badge}</span>
                </div>
                <div className="text-sm text-gray-500">{model.provider}</div>
                <div className="text-xs text-gray-400 mt-1">💰 {model.price}</div>
              </div>
              {formData.aiModel === model.id && (
                <div className="text-green-500">✓</div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Temperature Slider */}
      <div className="pt-4 border-t border-gray-200">
        <label className="block text-gray-700 text-sm font-medium mb-1.5">
          🌡️ Temperature: {formData.temperature}
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={formData.temperature}
          onChange={(e) => updateFormData({ temperature: parseFloat(e.target.value) })}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Precise (0.0)</span>
          <span>Balanced (0.5)</span>
          <span>Creative (1.0)</span>
        </div>
      </div>

      {/* Response Style */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Response Style
        </label>
        <div className="grid grid-cols-3 gap-3">
          {responseStyles.map(style => (
            <button
              key={style.value}
              onClick={() => updateFormData({ responseStyle: style.value })}
              className={`
                p-3 border rounded-xl text-center transition-all
                ${formData.responseStyle === style.value ? 'border-black bg-black text-white' : 'border-gray-200'}
              `}
            >
              <div className="text-2xl mb-1">{style.icon}</div>
              <div className="text-sm font-medium">{style.value}</div>
              <div className={`text-xs mt-1 ${formData.responseStyle === style.value ? 'text-gray-300' : 'text-gray-400'}`}>
                {style.description}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};