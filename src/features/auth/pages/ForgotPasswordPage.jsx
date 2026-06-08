import { ForgotPasswordForm } from '../components/ForgotPasswordForm';

export const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-md">
        
        {/* Apple Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.96 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-semibold text-black tracking-tight">
            Forgot Password?
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Enter your email to reset your password
          </p>
        </div>

        <div className="bg-white">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};