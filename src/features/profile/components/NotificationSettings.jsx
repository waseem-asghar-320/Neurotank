import { useState } from 'react';

export const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    botAlerts: true,
    marketingEmails: false,
    weeklyDigest: true,
    newFeatureAlerts: true,
  });

  const toggleNotification = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const notificationGroups = [
    {
      title: 'Email Notifications',
      items: [
        { key: 'emailNotifications', label: 'Receive email notifications', description: 'Get important updates via email' },
        { key: 'marketingEmails', label: 'Marketing emails', description: 'Promotions, tips, and product news' },
        { key: 'weeklyDigest', label: 'Weekly digest', description: 'Weekly summary of your bot activity' },
      ]
    },
    {
      title: 'Bot Alerts',
      items: [
        { key: 'botAlerts', label: 'Bot errors', description: 'Get notified when your bot encounters errors' },
        { key: 'newFeatureAlerts', label: 'New features', description: 'Learn about new features and updates' },
      ]
    },
    {
      title: 'Push Notifications',
      items: [
        { key: 'pushNotifications', label: 'Push notifications', description: 'Real-time notifications on your device' },
      ]
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-black mb-2">Notification Preferences</h3>
        <p className="text-sm text-gray-500 mb-6">Choose what notifications you want to receive</p>
      </div>

      {notificationGroups.map((group, idx) => (
        <div key={idx} className="space-y-4">
          <h4 className="font-medium text-black">{group.title}</h4>
          <div className="space-y-3">
            {group.items.map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-medium text-black">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
                <button
                  onClick={() => toggleNotification(item.key)}
                  className={`
                    w-12 h-6 rounded-full transition-all
                    ${notifications[item.key] ? 'bg-black' : 'bg-gray-300'}
                  `}
                >
                  <div className={`
                    w-5 h-5 bg-white rounded-full transition-all mt-0.5
                    ${notifications[item.key] ? 'ml-6' : 'ml-0.5'}
                  `} />
                </button>
              </div>
            ))}
          </div>
          {idx < notificationGroups.length - 1 && <div className="h-px bg-gray-200 my-4" />}
        </div>
      ))}

      {/* Save Button */}
      <div className="pt-6 border-t border-gray-100">
        <button className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
          Save Preferences
        </button>
      </div>
    </div>
  );
};