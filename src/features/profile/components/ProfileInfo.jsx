import { useState } from 'react';

export const ProfileInfo = ({ userData, setUserData, isEditing, setIsEditing, handleSave }) => {
  const [tempData, setTempData] = useState(userData);

  const handleChange = (e) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setTempData(userData);
    setIsEditing(false);
  };

  const onSave = () => {
    setUserData(tempData);
    handleSave();
  };

  return (
    <div className="space-y-6">
      {/* Avatar Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-gray-100">
        <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center text-white text-3xl font-semibold">
          {userData.avatar}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">Profile Photo</h3>
          <p className="text-sm text-gray-500 mt-1">JPG, GIF or PNG. Max size 2MB.</p>
          {isEditing && (
            <button className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm hover:bg-gray-200 transition">
              Upload New Photo
            </button>
          )}
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={tempData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black">
                {userData.name}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={tempData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black">
                {userData.email}
              </div>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Company Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="company"
                value={tempData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black">
                {userData.company}
              </div>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Role
            </label>
            {isEditing ? (
              <select
                name="role"
                value={tempData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              >
                <option>Admin</option>
                <option>User</option>
                <option>Developer</option>
                <option>Viewer</option>
              </select>
            ) : (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black">
                {userData.role}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={tempData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black">
                {userData.phone}
              </div>
            )}
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Timezone
            </label>
            {isEditing ? (
              <select
                name="timezone"
                value={tempData.timezone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              >
                <option>America/New_York</option>
                <option>America/Los_Angeles</option>
                <option>Europe/London</option>
                <option>Asia/Dubai</option>
                <option>Asia/Tokyo</option>
              </select>
            ) : (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black">
                {userData.timezone}
              </div>
            )}
          </div>

          {/* Language */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Language
            </label>
            {isEditing ? (
              <select
                name="language"
                value={tempData.language}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Arabic</option>
              </select>
            ) : (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black">
                {userData.language}
              </div>
            )}
          </div>

          {/* Bio (full width) */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Bio
            </label>
            {isEditing ? (
              <textarea
                name="bio"
                value={tempData.bio}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                placeholder="Tell us about yourself"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black">
                {userData.bio}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-6 border-t border-gray-100">
        {isEditing ? (
          <>
            <button
              onClick={onSave}
              className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};