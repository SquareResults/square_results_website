import React from "react";

const CustomButton = ({
  content,
  onClick,
}: {
  content: string;
  onClick: () => void | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary shadow-md shadow-gray-500 hover:bg-semantic-white hover:font-bold text-semantic-white hover:text-primary px-4 py-2 rounded-lg transition-colors hover:shadow-md hover:shadow-primary">
      {content}
    </button>
  );
};

export default CustomButton;
