import { useState } from 'react';

export const Step5_WhatsAppSetup = ({ formData, updateFormData }) => {
  const [setupMethod, setSetupMethod] = useState('api');
  const [qrCode, setQrCode] = useState(null);
  const [scanning, setScanning] = useState(false);

  const handleConnectAPI = () => {
    setScanning(true);
    // Simulate QR code generatio
    setTimeout(() => {
      setQrCode('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=whatsapp://connect?token=abc123');
      setScanning(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black">WhatsApp Setup</h2>
        <p className="text-gray-500 text-sm mt-1">Connect your WhatsApp Business account</p>
      </div>

      {/* Method Selection */}
      <div className="flex gap-4 border-b border-gray-200 pb-4">
        <button
          onClick={() => setSetupMethod('api')}
          className={`px-4 py-2 rounded-xl transition ${setupMethod === 'api' ? 'bg-black text-white' : 'text-gray-600'}`}
        >
          🔑 API Token
        </button>
        <button
          onClick={() => setSetupMethod('qr')}
          className={`px-4 py-2 rounded-xl transition ${setupMethod === 'qr' ? 'bg-black text-white' : 'text-gray-600'}`}
        >
          📱 QR Code (Cloud API)
        </button>
      </div>

      {setupMethod === 'api' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              placeholder="+1234567890"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              WhatsApp Business API Token
            </label>
            <input
              type="password"
              name="apiToken"
              value={formData.apiToken}
              onChange={(e) => updateFormData({ apiToken: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              placeholder="Enter your API token"
            />
          </div>
          <button
            onClick={() => updateFormData({ whatsappConnected: true })}
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Connect WhatsApp
          </button>
        </div>
      ) : (
        <div className="space-y-4 text-center">
          {!qrCode ? (
            <button
              onClick={handleConnectAPI}
              disabled={scanning}
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              {scanning ? 'Generating QR Code...' : 'Generate QR Code'}
            </button>
          ) : (
            <div className="space-y-4">
              <img src={qrCode} alt="WhatsApp QR Code" className="mx-auto border rounded-xl p-4 bg-white" />
              <p className="text-sm text-gray-600">
                1. Open WhatsApp on your phone<br />
                2. Go to Settings → WhatsApp Web/Desktop<br />
                3. Scan this QR code
              </p>
              <button
                onClick={() => updateFormData({ whatsappConnected: true })}
                className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
              >
                ✓ I've Scanned the Code
              </button>
            </div>
          )}
          <div className="bg-gray-50 p-4 rounded-xl text-left">
            <h4 className="font-medium text-black mb-2">🔧 Webhook Setup Instructions</h4>
            <p className="text-sm text-gray-600 mb-2">Add this URL to your WhatsApp Business API configuration:</p>
            <code className="block bg-white p-2 rounded text-xs font-mono break-all">
              https://yourdomain.com/api/webhook/whatsapp
            </code>
          </div>
        </div>
      )}

      {formData.whatsappConnected && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
          ✓ WhatsApp connected successfully!
        </div>
      )}
    </div>
  );
};