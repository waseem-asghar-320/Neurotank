import { useState } from 'react';

export const DashboardPage = () => {
  const [timeRange, setTimeRange] = useState('Today');

  const stats = [
    { title: 'Total Bots', value: '12', change: '+2', icon: '🤖', color: 'from-purple-500 to-indigo-600' },
    { title: 'Active Bots', value: '8', change: '+1', icon: '💬', color: 'from-green-500 to-teal-600' },
    { title: 'Messages Today', value: '1,234', change: '+18%', icon: '📊', color: 'from-blue-500 to-cyan-600' },
    { title: 'Errors', value: '3', change: '-2', icon: '⚠️', color: 'from-red-500 to-pink-600' },
  ];

  const recentBots = [
    { name: 'Customer Support Bot', status: 'Active', messages: 234, date: '2 hours ago', avatar: '🎧' },
    { name: 'Sales Assistant', status: 'Active', messages: 189, date: '1 day ago', avatar: '💰' },
    { name: 'FAQ Bot', status: 'Inactive', messages: 45, date: '3 days ago', avatar: '❓' },
    { name: 'Lead Generator', status: 'Active', messages: 567, date: '5 hours ago', avatar: '⚡' },
  ];

  const recentConversations = [
    { user: 'Sarah Johnson', message: 'How do I reset my password?', time: '5 min ago', unread: true },
    { user: 'Mike Chen', message: 'Thanks for the help!', time: '1 hour ago', unread: false },
    { user: 'Emma Watson', message: 'When will the new feature launch?', time: '3 hours ago', unread: true },
    { user: 'David Kim', message: 'Great service!', time: '5 hours ago', unread: false },
  ];

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-black">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back! Here's what's happening with your bots.</p>
        </div>
        <div className="flex gap-2">
          {/* <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition">
            Download Report
          </button> */}
          
            <a href="/bot-builder"  className="px-4 py-2 text-sm bg-black text-white rounded-xl hover:bg-gray-800 transition">Create Bot</a>
         
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-black">{stat.value}</div>
            <div className="text-gray-500 text-sm mt-1">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      {/* Charts Section - Apple Style */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
  
  {/* Message Activity Chart - Takes 2 columns */}
  <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
    
    {/* Header - Responsive */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <div>
        <h3 className="font-semibold text-black text-base sm:text-lg">Message Activity</h3>
        <p className="text-sm text-gray-500 mt-0.5">Messages over time</p>
      </div>
      
      {/* Time Range Selector - Apple Style Buttons */}
      <div className="flex gap-1 bg-gray-50 rounded-lg p-1">
        {['Today', 'Week', 'Month'].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg transition-all ${
              timeRange === range 
                ? 'bg-black text-white' 
                : 'text-gray-500 hover:text-black hover:bg-gray-100'
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
    
    {/* Chart Container - Horizontal scroll on mobile */}
    <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
      <div className="min-w-[500px] sm:min-w-0">
        
        {/* Chart Bars */}
        <div className="flex items-end gap-1.5 sm:gap-2 md:gap-3 h-55 sm:h-56 md:h-60">
          {[100, 68, 52, 89, 76, 94, 67, 82, 71, 93, 85, 77].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
              {/* Bar with Apple colors - Black with hover effect */}
              <div 
                className="w-full bg-black rounded-t-lg transition-all duration-300 hover:bg-gray-700 cursor-pointer"
                style={{ height: `${height * 2}px` }}
              ></div>
              {/* Time label */}
              <span className="text-[10px] sm:text-xs text-gray-400">{i + 1}am</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Stats Summary - Responsive Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-4 border-t border-gray-100">
      <div>
        <div className="text-lg sm:text-xl font-semibold text-black">1,234</div>
        <div className="text-xs text-gray-500">Total Messages</div>
      </div>
      <div>
        <div className="text-lg sm:text-xl font-semibold text-green-600">+18%</div>
        <div className="text-xs text-gray-500">vs last week</div>
      </div>
      <div>
        <div className="text-lg sm:text-xl font-semibold text-black">42s</div>
        <div className="text-xs text-gray-500">Avg Response</div>
      </div>
      <div>
        <div className="text-lg sm:text-xl font-semibold text-black">89%</div>
        <div className="text-xs text-gray-500">Success Rate</div>
      </div>
    </div>
  </div>

  {/* Bot Status Card */}
  <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
    
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="font-semibold text-black text-base sm:text-lg">Bot Status</h3>
        <p className="text-sm text-gray-500 mt-0.5">System health</p>
      </div>
      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
        <span className="text-xl">🤖</span>
      </div>
    </div>

    {/* Progress Bars - Apple Style (Black bars) */}
    <div className="space-y-5">
      
      {/* Active Bots */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Active Bots</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black">8/12</span>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+2</span>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-black h-2 rounded-full transition-all duration-500" style={{ width: '66%' }}></div>
        </div>
      </div>

      {/* API Usage */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">API Usage</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black">45%</span>
            <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">24k/50k</span>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-black h-2 rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
        </div>
      </div>

      {/* Storage Used */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Storage Used</span>
          <span className="font-semibold text-black">2.4 GB / 10 GB</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-black h-2 rounded-full transition-all duration-500" style={{ width: '24%' }}></div>
        </div>
      </div>

      {/* Monthly Quota - New */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Monthly Quota</span>
          <span className="font-semibold text-black">12,340 / 50,000</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-black h-2 rounded-full transition-all duration-500" style={{ width: '24.6%' }}></div>
        </div>
      </div>
    </div>

    {/* Quick Stats Grid - 2 columns */}
    <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 pt-6 border-t border-gray-100">
      <div className="text-center sm:text-left">
        <div className="text-xl sm:text-2xl font-semibold text-black">98.5%</div>
        <div className="text-xs text-gray-500 mt-1">Uptime</div>
        <div className="w-full bg-gray-100 rounded-full h-1 mt-2">
          <div className="bg-black h-1 rounded-full" style={{ width: '98.5%' }}></div>
        </div>
      </div>
      <div className="text-center sm:text-left">
        <div className="text-xl sm:text-2xl font-semibold text-green-600">2.3s</div>
        <div className="text-xs text-gray-500 mt-1">Avg Response</div>
        <div className="text-green-600 text-xs mt-1">↓ 0.5s</div>
      </div>
    </div>
  </div>
</div>

{/* Second Row - Additional Apple-style Charts */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
  
  {/* Bot Performance by Type */}
  <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
      <div>
        <h3 className="font-semibold text-black text-base sm:text-lg">Bot Performance</h3>
        <p className="text-sm text-gray-500 mt-0.5">By bot type</p>
      </div>
      <select className="text-xs sm:text-sm border border-gray-200 rounded-lg px-2 sm:px-3 py-1.5 bg-white text-gray-600">
        <option>This Week</option>
        <option>This Month</option>
        <option>This Year</option>
      </select>
    </div>
    
    <div className="space-y-4">
      {[
        { name: 'Customer Support', percentage: 85, messages: 1234 },
        { name: 'Sales Assistant', percentage: 72, messages: 892 },
        { name: 'Lead Generation', percentage: 63, messages: 756 },
        { name: 'FAQ Bot', percentage: 91, messages: 1456 },
      ].map((bot, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm mb-2">
            <div>
              <span className="font-medium text-black">{bot.name}</span>
              <span className="text-gray-400 text-xs ml-2">{bot.messages} msgs</span>
            </div>
            <span className="text-gray-600">{bot.percentage}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-500" 
              style={{ width: `${bot.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Peak Hours Chart */}
  <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
    <div>
      <h3 className="font-semibold text-black text-base sm:text-lg">Peak Hours</h3>
      <p className="text-sm text-gray-500 mb-4">When your bot is busiest</p>
    </div>
    
    <div className="space-y-3">
      {[
        { hour: '9 AM', messages: 234, percentage: 45 },
        { hour: '12 PM', messages: 456, percentage: 78 },
        { hour: '3 PM', messages: 678, percentage: 92 },
        { hour: '6 PM', messages: 543, percentage: 67 },
        { hour: '9 PM', messages: 321, percentage: 34 },
      ].map((peak, i) => (
        <div key={i}>
          <div className="flex justify-between items-center text-sm mb-1">
            <span className="font-medium text-black">{peak.hour}</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs">{peak.messages} msgs</span>
              <span className="text-xs text-gray-400">{peak.percentage}%</span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div 
              className="bg-black h-1.5 rounded-full"
              style={{ width: `${peak.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>

    {/* Insight Note - Apple Style */}
    <div className="mt-5 p-3 bg-gray-50 rounded-xl flex items-start gap-2">
      <span className="text-gray-500 text-sm">💡</span>
      <p className="text-xs text-gray-600">Your bot is most active between 3 PM - 6 PM.</p>
    </div>
  </div>
</div>

      {/* Recent Bots & Conversations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Bots */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-black">Your Bots</h3>
                <p className="text-sm text-gray-500">Recently created bots</p>
              </div>
              <a href="/bots" className="text-sm text-black hover:underline">View All →</a>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {recentBots.map((bot, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl">
                      {bot.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-black">{bot.name}</div>
                      <div className="text-xs text-gray-500">{bot.messages} messages • {bot.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${bot.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                    <span className="text-sm text-gray-600">{bot.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Conversations */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-black">Recent Conversations</h3>
                <p className="text-sm text-gray-500">Latest customer messages</p>
              </div>
              <a href="/conversations" className="text-sm text-black hover:underline">View All →</a>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {recentConversations.map((conv, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-black">{conv.user}</span>
                      {conv.unread && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{conv.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{conv.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-black">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
          <div className="text-3xl mb-3">🤖</div>
          <h4 className="font-semibold mb-1">Create New Bot</h4>
          <p className="text-sm opacity-90 mb-4">Build a new AI WhatsApp bot in minutes</p>
          <button className="bg-white/20 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition">
            Get Started →
          </button>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 text-white">
          <div className="text-3xl mb-3">📱</div>
          <h4 className="font-semibold mb-1">Connect WhatsApp</h4>
          <p className="text-sm opacity-90 mb-4">Link your WhatsApp Business account</p>
          <button className="bg-white/20 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition">
            Connect →
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
          <div className="text-3xl mb-3">📊</div>
          <h4 className="font-semibold mb-1">View Analytics</h4>
          <p className="text-sm opacity-90 mb-4">See detailed bot performance metrics</p>
          <button className="bg-white/20 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition">
            Explore →
          </button>
        </div>
      </div>
    </div>
  );
};