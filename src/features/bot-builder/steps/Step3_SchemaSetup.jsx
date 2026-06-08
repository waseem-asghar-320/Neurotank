import { useState } from 'react';

export const Step3_SchemaSetup = ({ formData, updateFormData }) => {
  const [schemaMethod, setSchemaMethod] = useState('auto');
  const [manualSchema, setManualSchema] = useState('');
  const [fetching, setFetching] = useState(false);
  const [tables, setTables] = useState([
    { name: 'customers', columns: ['id', 'name', 'email', 'phone', 'created_at'], expanded: false },
    { name: 'orders', columns: ['id', 'customer_id', 'total', 'status', 'order_date'], expanded: false },
    { name: 'products', columns: ['id', 'name', 'price', 'stock', 'category'], expanded: false },
    { name: 'payments', columns: ['id', 'order_id', 'amount', 'payment_method', 'status'], expanded: false },
  ]);

  const handleFetchSchema = () => {
    setFetching(true);
    setTimeout(() => {
      setFetching(false);
      updateFormData({ schema: tables });
    }, 2000);
  };

  const toggleTable = (index) => {
    const newTables = [...tables];
    newTables[index].expanded = !newTables[index].expanded;
    setTables(newTables);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black">Schema Setup</h2>
        <p className="text-gray-500 text-sm mt-1">Configure your database schema</p>
      </div>

      {/* Method Selection */}
      <div className="flex gap-4 border-b border-gray-200 pb-4">
        <button
          onClick={() => setSchemaMethod('auto')}
          className={`px-4 py-2 rounded-xl transition ${schemaMethod === 'auto' ? 'bg-black text-white' : 'text-gray-600'}`}
        >
          🔄 Auto Fetch Schema
        </button>
        <button
          onClick={() => setSchemaMethod('manual')}
          className={`px-4 py-2 rounded-xl transition ${schemaMethod === 'manual' ? 'bg-black text-white' : 'text-gray-600'}`}
        >
          📝 Paste Schema Manually
        </button>
      </div>

      {schemaMethod === 'auto' ? (
        <div className="space-y-4">
          {!formData.schema ? (
            <button
              onClick={handleFetchSchema}
              disabled={fetching || !formData.dbConnected}
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
            >
              {fetching ? 'Fetching Schema...' : 'Fetch Schema from Database'}
            </button>
          ) : (
            <div className="space-y-3">
              <h3 className="font-medium text-black">Tables Found:</h3>
              {tables.map((table, index) => (
                <div key={table.name} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleTable(index)}
                    className="w-full px-4 py-3 bg-gray-50 flex justify-between items-center hover:bg-gray-100 transition"
                  >
                    <span className="font-medium text-black">📊 {table.name}</span>
                    <span>{table.expanded ? '▼' : '▶'}</span>
                  </button>
                  {table.expanded && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <div className="text-sm text-gray-500 mb-2">Columns:</div>
                      <div className="flex flex-wrap gap-2">
                        {table.columns.map(col => (
                          <span key={col} className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-700">
                            {col}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1.5">
            Paste Your Schema
          </label>
          <textarea
            rows="10"
            value={manualSchema}
            onChange={(e) => setManualSchema(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black font-mono text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            placeholder="CREATE TABLE customers (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);"
          />
          <button
            onClick={() => updateFormData({ schema: { manual: manualSchema } })}
            className="mt-3 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Import Schema
          </button>
        </div>
      )}
    </div>
  );
};