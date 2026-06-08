import { useState } from 'react';

export const Step1_BusinessInfo = ({ formData, updateFormData }) => {
  const industries = ['School', 'Hospital', 'E-commerce', 'Restaurant', 'Real Estate', 'Travel', 'Banking', 'Other'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Arabic', 'Hindi', 'Urdu', 'Chinese'];

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black">Business Information</h2>
        <p className="text-gray-500 text-sm mt-1">Tell us about your business</p>
      </div>

      <div className="space-y-4">
        {/* Business Name */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            placeholder="Enter your business name"
            required
          />
        </div>

        {/* Industry Type */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            Industry Type
          </label>
          <select
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
          >
            <option value="">Select industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        {/* Bot Name */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            Bot Name
          </label>
          <input
            type="text"
            name="botName"
            value={formData.botName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            placeholder="e.g., Customer Support Bot"
            required
          />
        </div>

        {/* Language Selection */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            Language
          </label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};