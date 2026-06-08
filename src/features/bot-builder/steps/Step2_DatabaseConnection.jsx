import { useState } from 'react';

export const Step2_DatabaseConnection = ({ formData, updateFormData }) => {
  const [testing, setTesting] = useState(false);
  const [testStatus, setTestStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const dbTypes = [
    { value: 'sqlserver', label: 'SQL Server', icon: '🔷' },
    { value: 'mysql', label: 'MySQL', icon: '🐬' },
    { value: 'postgresql', label: 'PostgreSQL', icon: '🐘' },
  ];

  const handleTestConnection = async () => {
    setTesting(true);
    setTestStatus(null);
    setErrorMessage('');

    // Simulate API call
    setTimeout(() => {
      if (formData.connectionString && formData.connectionString.length > 10) {
        setTestStatus('success');
        updateFormData({ dbConnected: true });
      } else {
        setTestStatus('error');
        setErrorMessage('Invalid connection string. Please check and try again.');
        updateFormData({ dbConnected: false });
      }
      setTesting(false);
    }, 2000);
  };

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value, dbConnected: false });
    setTestStatus(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black">Database Connection</h2>
        <p className="text-gray-500 text-sm mt-1">Connect your database to the bot</p>
      </div>

      <div className="space-y-4">
        {/* Database Type */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            Database Type
          </label>
          <div className="grid grid-cols-3 gap-3">
            {dbTypes.map(db => (
              <button
                key={db.value}
                type="button"
                onClick={() => updateFormData({ dbType: db.value })}
                className={`
                  p-3 border rounded-xl text-center transition-all
                  ${formData.dbType === db.value 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-200 hover:border-gray-300'}
                `}
              >
                <div className="text-2xl mb-1">{db.icon}</div>
                <div className="text-sm">{db.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Connection String */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            Connection String
          </label>
          <textarea
            name="connectionString"
            value={formData.connectionString}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black font-mono text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            placeholder="Server=localhost;Database=mydb;User Id=myuser;Password=mypassword;"
          />
          <p className="text-xs text-gray-400 mt-1">
            Example: Server=localhost;Database=mydb;User Id=myuser;Password=mypassword;
          </p>
        </div>

        {/* Test Connection Button */}
        <button
          type="button"
          onClick={handleTestConnection}
          disabled={testing || !formData.dbType}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition disabled:opacity-50"
        >
          {testing ? 'Testing...' : 'Test Connection'}
        </button>

        {/* Test Result */}
        {testStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
            ✓ Connection successful! Database is ready.
          </div>
        )}

        {testStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
            ✗ Connection failed: {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}; 