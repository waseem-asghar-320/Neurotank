export const BillingInfo = () => {
  const subscription = {
    plan: 'Pro',
    price: '$49/month',
    status: 'Active',
    nextBilling: 'April 15, 2024',
    users: '5 users',
    bots: '10 bots',
    messages: '10,000 / 50,000',
  };

  const invoices = [
    { id: 'INV-001', date: 'March 15, 2024', amount: '$49.00', status: 'Paid' },
    { id: 'INV-002', date: 'February 15, 2024', amount: '$49.00', status: 'Paid' },
    { id: 'INV-003', date: 'January 15, 2024', amount: '$49.00', status: 'Paid' },
  ];

  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Current Plan</h3>
        <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💎</span>
                <span className="text-xl font-bold text-black">{subscription.plan} Plan</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">{subscription.status}</span>
              </div>
              <p className="text-gray-500">{subscription.price} • {subscription.users} • {subscription.bots}</p>
              <p className="text-sm text-gray-400 mt-1">Next billing: {subscription.nextBilling}</p>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition">
              Manage Subscription
            </button>
          </div>
          
          {/* Usage Meter */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Messages used this month</span>
              <span className="font-medium text-black">{subscription.messages}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-black h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-2xl p-4 text-center">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-bold text-black">Starter</div>
            <div className="text-sm text-gray-500">$29/month</div>
            <div className="text-xs text-gray-400 mt-2">3 bots • 1,000 msgs</div>
          </div>
          <div className="border-2 border-black rounded-2xl p-4 text-center bg-gray-50">
            <div className="text-2xl mb-2">💎</div>
            <div className="font-bold text-black">Pro</div>
            <div className="text-sm text-gray-500">$49/month</div>
            <div className="text-xs text-gray-400 mt-2">10 bots • 10,000 msgs</div>
            <div className="text-xs bg-black text-white px-2 py-0.5 rounded-full inline-block mt-2">Current</div>
          </div>
          <div className="border border-gray-200 rounded-2xl p-4 text-center">
            <div className="text-2xl mb-2">👑</div>
            <div className="font-bold text-black">Enterprise</div>
            <div className="text-sm text-gray-500">$99/month</div>
            <div className="text-xs text-gray-400 mt-2">Unlimited • 100,000 msgs</div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Payment Method</h3>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-7 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
            <div>
              <div className="font-medium text-black">•••• 4242</div>
              <div className="text-sm text-gray-500">Expires 12/2026</div>
            </div>
          </div>
          <button className="text-sm text-black hover:underline">Update</button>
        </div>
      </div>

      {/* Invoice History */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Invoice History</h3>
        <div className="space-y-2">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <div className="font-medium text-black">{invoice.id}</div>
                <div className="text-sm text-gray-500">{invoice.date}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">{invoice.amount}</span>
                <span className="text-green-600 text-sm">{invoice.status}</span>
                <button className="text-sm text-black hover:underline">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};