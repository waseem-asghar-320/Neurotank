import { useState } from 'react';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    acceptTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.acceptTerms) {
      setError('You must accept the Terms and Conditions');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log('Registration data:', formData);
      window.location.href = '/login';
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
          placeholder="John Doe"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
          placeholder="you@example.com"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1.5">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            placeholder="Create a password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Company Name */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1.5">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
          placeholder="Your Company"
          required
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
          required
        />
        <label className="text-gray-600 text-sm">
          I accept the{' '}
          <a href="#" className="text-black hover:underline">
            Terms and Conditions
          </a>
        </label>
      </div>

      {/* Create Account Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>

      {/* Sign In Link */}
      <p className="text-center text-gray-500 text-sm mt-6">
        Already have an account?{' '}
        <a href="/login" className="text-black hover:underline font-medium">
          Sign In
        </a>
      </p>
    </form>
  );
};