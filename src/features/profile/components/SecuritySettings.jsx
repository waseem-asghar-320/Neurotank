import { useState } from 'react';

export const SecuritySettings = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleUpdatePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Update password logic here
    alert('Password updated successfully');
    setShowChangePassword(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="space-y-6">
      {/* Password Section */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-2">Password</h3>
        <p className="text-sm text-gray-500 mb-4">Update your password to keep your account secure</p>
        
        {!showChangePassword ? (
          <button
            onClick={() => setShowChangePassword(true)}
            className="px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition"
          >
            Change Password
          </button>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleUpdatePassword}
                className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Update Password
              </button>
              <button
                onClick={() => setShowChangePassword(false)}
                className="px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Two-Factor Authentication */}
      <div className="pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-black">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
            Enable 2FA
          </button>
        </div>
      </div>

      {/* Sessions */}
      <div className="pt-6 border-t border-gray-100">
        <h3 className="text-lg font-semibold text-black mb-4">Active Sessions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <div className="flex items-center gap-2">
                <span>💻</span>
                <span className="font-medium text-black">Chrome on Windows</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">New York, USA • Last active 2 minutes ago</div>
            </div>
            <button className="text-red-500 text-sm hover:underline">Revoke</button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span className="font-medium text-black">Safari on iPhone</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Los Angeles, USA • Last active 2 days ago</div>
            </div>
            <button className="text-red-500 text-sm hover:underline">Revoke</button>
          </div>
        </div>
      </div>
    </div>
  );
};