import { useState } from 'react';

export const Step4_DataUnderstanding = ({ formData, updateFormData }) => {
  const [newAllowedTable, setNewAllowedTable] = useState('');
  const [newForbiddenTable, setNewForbiddenTable] = useState('');

  const tables = ['customers', 'orders', 'products', 'payments', 'employees', 'inventory'];

  const addAllowedTable = () => {
    if (newAllowedTable && !formData.allowedTables.includes(newAllowedTable)) {
      updateFormData({ allowedTables: [...formData.allowedTables, newAllowedTable] });
      setNewAllowedTable('');
    }
  };

  const removeAllowedTable = (table) => {
    updateFormData({ allowedTables: formData.allowedTables.filter(t => t !== table) });
  };

  const addForbiddenTable = () => {
    if (newForbiddenTable && !formData.forbiddenTables.includes(newForbiddenTable)) {
      updateFormData({ forbiddenTables: [...formData.forbiddenTables, newForbiddenTable] });
      setNewForbiddenTable('');
    }
  };

  const removeForbiddenTable = (table) => {
    updateFormData({ forbiddenTables: formData.forbiddenTables.filter(t => t !== table) });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black">Data Understanding Layer</h2>
        <p className="text-gray-500 text-sm mt-1">Define what your bot can access and answer</p>
      </div>

      <div className="space-y-6">
        {/* Allowed Tables */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            ✅ Allowed Tables <span className="text-gray-400 text-xs">(Bot can query these)</span>
          </label>
          <div className="flex gap-2 mb-3">
            <select
              value={newAllowedTable}
              onChange={(e) => setNewAllowedTable(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-black"
            >
              <option value="">Select table</option>
              {tables.filter(t => !formData.allowedTables.includes(t)).map(table => (
                <option key={table} value={table}>{table}</option>
              ))}
            </select>
            <button
              onClick={addAllowedTable}
              className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.allowedTables.map(table => (
              <span key={table} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-2">
                {table}
                <button onClick={() => removeAllowedTable(table)} className="hover:text-red-500">✕</button>
              </span>
            ))}
          </div>
        </div>

        {/* Forbidden Tables */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            🚫 Forbidden Tables <span className="text-gray-400 text-xs">(Bot cannot access these)</span>
          </label>
          <div className="flex gap-2 mb-3">
            <select
              value={newForbiddenTable}
              onChange={(e) => setNewForbiddenTable(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-black"
            >
              <option value="">Select table</option>
              {tables.filter(t => !formData.forbiddenTables.includes(t)).map(table => (
                <option key={table} value={table}>{table}</option>
              ))}
            </select>
            <button
              onClick={addForbiddenTable}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.forbiddenTables.map(table => (
              <span key={table} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm flex items-center gap-2">
                {table}
                <button onClick={() => removeForbiddenTable(table)} className="hover:text-red-500">✕</button>
              </span>
            ))}
          </div>
        </div>

        {/* Business Rules */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            📋 Business Rules
          </label>
          <textarea
            name="businessRules"
            value={formData.businessRules}
            onChange={(e) => updateFormData({ businessRules: e.target.value })}
            rows="4"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            placeholder="Example:
- Students table is for counting only, not for editing.
- Never show salary information.
- Only show orders from the last 30 days."
          />
          <p className="text-xs text-gray-400 mt-1">Define rules that the bot should follow when answering queries</p>
        </div>
      </div>
    </div>
  );
};