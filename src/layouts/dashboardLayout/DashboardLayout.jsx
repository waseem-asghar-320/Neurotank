import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check if screen is mobile/tablet
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close sidebar when clicking on a link (mobile only)
  const handleLinkClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Open sidebar
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  // Close sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'My Bots', path: '/bots', icon: '🤖' },
    { name: 'Create Bot', path: '/bot-builder', icon: '✨' },
    { name: 'Conversations', path: '/conversations', icon: '💬' },
    { name: 'Database', path: '/database', icon: '🗄️' },
    { name: 'Connect WhatsApp', path: '/whatsapp', icon: '📱' },
    { name: 'Analytics', path: '/analytics', icon: '📈' },
    { name: 'Billing', path: '/billing', icon: '💳' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Overlay - on mobile/tablet when sidebar is open */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div onMouseEnter={openSidebar} 
            onMouseLeave={closeSidebar}
        className={`
          bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-full
          ${isMobile 
            ? `fixed top-0 bottom-0 z-30 ${sidebarOpen ? 'left-0' : '-left-64'} w-64`
            : `relative ${sidebarOpen ? 'w-64' : 'w-20'}`
          }
        `}
      >
        {/* Logo & Close Button - Cross button visible on ALL screens when sidebar is open */}
        <div className={`p-4 border-b border-gray-100 flex items-center justify-between ${!sidebarOpen && !isMobile && 'flex-col gap-3 px-2'}`}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-3xl">🤖</div>
            {sidebarOpen && (
              <div>
                <div className="font-bold text-xl text-black">BotSaaS</div>
                <div className="text-xs text-gray-400">AI WhatsApp Bot</div>
              </div>
            )}
          </div>
          
          {/* Close Button (X) - Visible on ALL screens when sidebar is open */}
          {sidebarOpen && (
            <button
              onClick={closeSidebar}
              className="p-1 hover:bg-gray-100 rounded-lg transition-all"
              title="Close sidebar"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl transition-all
                  ${isActive 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                  ${!sidebarOpen && !isMobile && 'justify-center'}
                `}
              >
                <span className="text-xl">{item.icon}</span>
                {sidebarOpen && (
                  <span className="font-medium text-sm">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-100">
          <div className={`flex items-center gap-3 ${!sidebarOpen && !isMobile && 'justify-center'}`}>
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold shrink-0">
              JD
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-black truncate">John Doe</div>
                <div className="text-xs text-gray-400 truncate">john@example.com</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Left Side - Toggle Button & Page Title */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Toggle Button - Shows only when sidebar is closed */}
            {!sidebarOpen && (
              <button
                onClick={openSidebar}
                className="p-2 hover:bg-gray-100 rounded-xl transition-all z-10"
                title="Open sidebar"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-black">
                {navigation.find(n => n.path === location.pathname)?.name || 'Dashboard'}
              </h1>
            </div>
          </div>

          {/* Right Side - Notifications & Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-50 rounded-xl px-3 py-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-32 lg:w-48"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-all">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <a href='/profile' className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-xl transition-all">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-semibold">
                JD
              </div>
              <svg className="w-4 h-4 text-gray-500 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};