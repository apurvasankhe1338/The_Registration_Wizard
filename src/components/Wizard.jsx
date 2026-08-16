import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Success from "./Success";

function Wizard() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);
    const totalSteps = 3;
    const progressPercent = (step / totalSteps) * 100;

    const handleSubmit = () => {
        console.log("Final Data:", formData);
        setStep(4);
    };

    return (
        <div className="relative overflow-hidden min-h-screen 
                bg-gradient-to-br 
                from-blue-50 
                via-indigo-50 
                to-purple-100 
                flex items-center justify-center">

            <div className="absolute w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30 -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30 -bottom-20 -right-20"></div>

            <div className="relative z-10 
                backdrop-blur-xl 
                bg-white/80 
                border border-white/40 
                shadow-2xl 
                rounded-3xl 
                p-10 
                w-full max-w-md 
                transition-all duration-300 
                hover:shadow-indigo-200/50">
                {step <= totalSteps && (
                    <div className="mb-6">

                        {/* Step Text */}
                        <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                            <span>Step {step} of {totalSteps}</span>
                        </div>

                        {/* Progress Track */}
                        <div className="w-full bg-white/50 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>

                    </div>
                )}
                <div
                    key={step}
                    className="transition-all duration-300 ease-in-out animate-fadeIn transform">
                    {step === 1 && (
                        <StepOne
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                        />
                    )}

                    {step === 2 && (
                        <StepTwo
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />
                    )}

                    {step === 3 && (
                        <StepThree
                            formData={formData}
                            prevStep={prevStep}
                            handleSubmit={handleSubmit}
                        />
                    )}

                    {step === 4 && <Success />}
                </div>
            </div>
        </div>
    );
}

export default Wizard;