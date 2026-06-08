import { useState } from 'react';

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email && email.includes('@')) {
        setSuccess(true);
      } else {
        setError('Please enter a valid email address');
      }
      setLoading(false);
    }, 1500);
  };

  if (success) {
    return (
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-black text-xl font-semibold">Check your email</h3>
        <p className="text-gray-500">
          We've sent a password reset link to<br />
          <span className="text-black font-medium">{email}</span>
        </p>
        <button
          onClick={() => window.location.href = '/login'}
          className="mt-4 w-full py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all"
        >
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
          placeholder="you@example.com"
          required
        />
        <p className="text-gray-400 text-xs mt-2">
          Enter the email address you used to register
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Reset Link'}
      </button>

      <div className="text-center">
        <a href="/login" className="text-gray-500 hover:text-black text-sm">
          Back to Login
        </a>
      </div>
    </form>
  );
};