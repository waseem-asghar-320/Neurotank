import { useState } from 'react';
import { BillingInfo } from '../components/BillingInfo';
import { NotificationSettings } from '../components/NotificationSettings';
import { ProfileInfo } from '../components/ProfileInfo';
import { SecuritySettings } from '../components/SecuritySettings';

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  // User data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'BotSaaS Inc.',
    role: 'Admin',
    phone: '+1 (555) 123-4567',
    timezone: 'America/New_York',
    language: 'English',
    bio: 'Building AI-powered WhatsApp bots for businesses worldwide.',
    avatar: 'JD'
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'billing', name: 'Billing', icon: '💳' },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save to backend here
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-black tracking-tight">Profile Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all whitespace-nowrap
              ${activeTab === tab.id 
                ? 'border-b-2 border-black text-black' 
                : 'text-gray-500 hover:text-black'}
            `}
          >
            <span>{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
        {activeTab === 'profile' && (
          <ProfileInfo 
            userData={userData} 
            setUserData={setUserData}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            handleSave={handleSave}
          />
        )}
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'notifications' && <NotificationSettings />}
        {activeTab === 'billing' && <BillingInfo />}
      </div>
    </div>
  );
};