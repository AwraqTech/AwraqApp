import { useState } from "react";

export default function useTogglePasswordVisibility() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return {
    isPasswordVisible,
    togglePasswordVisibility,
  };
}
