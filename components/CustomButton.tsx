import React from "react";
import { cn } from "@/lib/utils"; // Utility function for conditional classNames

type CustomButtonProps = {
  content: string;
  onClick?: () => void; // Optional onClick handler
  type?: "button" | "submit" | "reset"; // Button type
  variant?: "primary" | "secondary" | "outline"; // Button style variants
  disabled?: boolean; // Disabled state
  loading?: boolean; // Loading state
  className?: string; // Additional custom classes
  ariaLabel?: string; // Accessibility label
};

const CustomButton: React.FC<CustomButtonProps> = ({
  content,
  onClick = () => {}, // Default no-op function
  type = "button", // Default button type
  variant = "primary", // Default variant
  disabled = false,
  loading = false,
  className = "",
  ariaLabel,
}) => {
  // Define styles for different variants
  const baseStyles =
    "px-4 py-2 rounded-lg transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Base styles for all buttons
  const variantStyles = {
    primary:
      "bg-primary shadow-md shadow-gray-500 hover:bg-semantic-white hover:font-bold text-semantic-white hover:text-primary px-4 py-2 rounded-lg transition-colors hover:shadow-md hover:shadow-primary",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-semantic-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading} // Disable button if loading or explicitly disabled
      aria-label={ariaLabel || content} // Fallback to content for aria-label
      className={cn(
        baseStyles,
        variantStyles[variant],
        disabled && "opacity-50 cursor-not-allowed", // Disabled styles
        className // Allow custom classes
      )}>
      {content}
    </button>
  );
};

export default CustomButton;
