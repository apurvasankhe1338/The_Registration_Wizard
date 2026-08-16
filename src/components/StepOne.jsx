import { useState } from "react";

function StepOne({ formData, setFormData, nextStep }) {
    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        dob: false,
    });

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    };

    const isAdult =
        formData.dob && calculateAge(formData.dob) >= 18;

    const isValid =
        formData.firstName.trim() !== "" &&
        formData.lastName.trim() !== "" &&
        formData.dob !== "" &&
        isAdult;

    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
    };



    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
                Personal Information
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
                Please enter your basic details to continue.
            </p>

            {/* First Name */}
            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                </label>
                <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                    }
                    onBlur={() => handleBlur("firstName")}
                    className={`w-full border rounded-lg px-4 py-2 transition
            ${touched.firstName
                            ? formData.firstName
                                ? "border-green-500 focus:ring-green-500"
                                : "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-blue-500"
                        }
            focus:outline-none focus:ring-2`}
                />
                {touched.firstName && formData.firstName === "" && (
                    <p className="text-red-500 text-xs mt-1">
                        First name is required
                    </p>
                )}
            </div>

            {/* Last Name */}
            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                </label>
                <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                    }
                    onBlur={() => handleBlur("lastName")}
                    className={`w-full border rounded-lg px-4 py-2 transition
            ${touched.lastName
                            ? formData.lastName
                                ? "border-green-500 focus:ring-green-500"
                                : "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-blue-500"
                        }
            focus:outline-none focus:ring-2`}
                />
                {touched.lastName && formData.lastName === "" && (
                    <p className="text-red-500 text-xs mt-1">
                        Last name is required
                    </p>
                )}
            </div>

            {/* DOB */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                </label>
                <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                    }
                    onBlur={() => handleBlur("dob")}
                    className={`w-full border rounded-lg px-4 py-2 transition
            ${touched.dob
                            ? formData.dob
                                ? "border-green-500 focus:ring-green-500"
                                : "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-blue-500"
                        }
            focus:outline-none focus:ring-2`}
                />
                {touched.dob && formData.dob === "" && (
                    <p className="text-red-500 text-xs mt-1">
                        Date of birth is required
                    </p>
                )}
                {touched.dob && formData.dob !== "" && !isAdult && (
                    <p className="text-red-500 text-xs mt-1">
                        You must be at least 18 years old
                    </p>
                )}
            </div>

            <button
                type="button"
                onClick={nextStep}
                disabled={!isValid}
                className={`w-full py-2 rounded-lg font-medium transition
          ${isValid
                        ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer active:scale-95 transition"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
            >
                Continue →
            </button>
        </div>
    );
}

export default StepOne;