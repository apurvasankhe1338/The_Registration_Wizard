function StepThree({ formData, prevStep, handleSubmit }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Review & Confirm
      </h2>
      <p className="text-gray-500 mb-6 text-sm">
        Please verify your details before submitting.
      </p>

      <div className="bg-gray-50 rounded-xl p-5 mb-6 space-y-4">

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 text-sm">First Name</span>
          <span className="font-medium text-gray-800">
            {formData.firstName || "-"}
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 text-sm">Last Name</span>
          <span className="font-medium text-gray-800">
            {formData.lastName || "-"}
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 text-sm">Date of Birth</span>
          <span className="font-medium text-gray-800">
            {formData.dob || "-"}
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 text-sm">Email</span>
          <span className="font-medium text-gray-800">
            {formData.email || "-"}
          </span>
        </div>

      </div>

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
          onClick={handleSubmit}
          className="w-1/2 bg-green-600 text-white py-2 rounded-lg 
                     hover:bg-green-700 transition duration-200 font-medium cursor-pointer active:scale-95 transition"
        >
          Submit ✓
        </button>
      </div>
    </div>
  );
}

export default StepThree;