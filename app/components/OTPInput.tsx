import React, { useRef, useEffect } from "react";

interface OTPInputProps {
  length: number; // Number of OTP inputs
  onChange: (otp: string) => void; // Callback for when OTP changes
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Focus on the first input on mount
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  // Update OTP and call the callback
  const updateOTP = () => {
    const otp = inputsRef.current.map((input) => input?.value || "").join("");
    onChange(otp);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      // Restrict input to numbers only
      return;
    }

    inputsRef.current[index]!.value = value.slice(-1); // Limit to one character

    // Move to the next input if the current one is filled
    if (value.length === 1 && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    updateOTP(); // Update OTP value
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !inputsRef.current[index]?.value && index > 0) {
      // Move to the previous input if backspace is pressed and input is empty
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-x-3">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className="block w-[48px] h-[48px] text-center border-gray-600 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#071321] dark:border-[#20344e] dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => {
            inputsRef.current[index] = el; // Assign ref to current input
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
