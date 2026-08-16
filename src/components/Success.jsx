function Success() {
  return (
    <div className="text-center">

      <div className="flex items-center justify-center mb-6">
        <div className="bg-green-100 rounded-full p-6">
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Registration Successful 🎉
      </h2>

      <p className="text-gray-500 mb-6">
        Your account has been created successfully.
        You can now access your dashboard.
      </p>

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg 
                   hover:bg-blue-700 transition duration-200 font-medium"
      >
        Go to Dashboard →
      </button>

    </div>
  );
}

export default Success;