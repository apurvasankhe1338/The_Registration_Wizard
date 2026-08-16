import { useState } from "react";

function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid = emailRegex.test(formData.email);
  const isPasswordValid = formData.password.length >= 8;
  const doPasswordsMatch =
    formData.password === formData.confirmPassword &&
    formData.confirmPassword !== "";

  const isFormValid =
    isEmailValid && isPasswordValid && doPasswordsMatch;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Account Details
      </h2>
      <p className="text-gray-500 mb-6 text-sm">
        Create your login credentials.
      </p>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          onBlur={() => handleBlur("email")}
          className={`w-full border rounded-lg px-4 py-2 transition
            ${
              touched.email
                ? isEmailValid
                  ? "border-green-500 focus:ring-green-500"
                  : "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }
            focus:outline-none focus:ring-2`}
        />
        {touched.email && !isEmailValid && (
          <p className="text-red-500 text-xs mt-1">
            Please enter a valid email address
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-5 relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          onBlur={() => handleBlur("password")}
          className={`w-full border rounded-lg px-4 py-2 pr-12 transition"
            ${
              touched.password
                ? isPasswordValid
                  ? "border-green-500 focus:ring-green-500"
                  : "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }
            focus:outline-none focus:ring-2`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
      // Eye Off Icon
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
  strokeWidth="2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 3l18 18"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M10.584 10.587a2 2 0 002.828 2.828M9.88 5.09A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.12M6.53 6.53A9.956 9.956 0 002.458 12c1.274 4.057 5.064 7 9.542 7 1.31 0 2.56-.25 3.705-.705"
  />
</svg>
    ) : (
      // Eye Icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#000"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
        />
      </svg>
    )}
        </button>

        {touched.password && !isPasswordValid && (
          <p className="text-red-500 text-xs mt-1">
            Password must be at least 8 characters
          </p>
        )}
      </div>

      <div className="mb-6 relative">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Confirm Password
  </label>
  <input
    type={showConfirmPassword ? "text" : "password"}
    value={formData.confirmPassword}
    onChange={(e) =>
      setFormData({
        ...formData,
        confirmPassword: e.target.value,
      })
    }
    onBlur={() => handleBlur("confirmPassword")}
    className={`w-full border rounded-lg px-4 py-2 pr-12 transition
      ${
        touched.confirmPassword
          ? doPasswordsMatch
            ? "border-green-500 focus:ring-green-500"
            : "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }
      focus:outline-none focus:ring-2`}
  />

  <button
    type="button"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
    className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700"
  >
    {showConfirmPassword ? (
      // Eye Off Icon
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
  strokeWidth="2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 3l18 18"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M10.584 10.587a2 2 0 002.828 2.828M9.88 5.09A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.12M6.53 6.53A9.956 9.956 0 002.458 12c1.274 4.057 5.064 7 9.542 7 1.31 0 2.56-.25 3.705-.705"
  />
</svg>
    ) : (
      // Eye Icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#000"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
        />
      </svg>
    )}
  </button>

  {touched.confirmPassword && !doPasswordsMatch && (
    <p className="text-red-500 text-xs mt-1">
      Passwords do not match
    </p>
  )}
</div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={prevStep}
          className="w-1/2 bg-gray-300 py-2 rounded-lg 
                     hover:bg-gray-400 transition duration-200 font-medium cursor-pointer active:scale-95 transition"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          disabled={!isFormValid}
          className={`w-1/2 py-2 rounded-lg font-medium transition
            ${
              isFormValid
                ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer active:scale-95 transition"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default StepTwo;