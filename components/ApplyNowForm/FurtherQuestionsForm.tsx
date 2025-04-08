import React from "react";
import { Button } from "@/components/ui/button";
import { Control } from "react-hook-form";

interface FurtherQuestionsFormProps {
  form: { control: Control<any> }; // Replace 'any' with the specific type if known
  jobRole: { title: string } | null;
  handleCancel: () => void;
  goNext: () => void;
  goBack: () => void;
}

const FurtherQuestionsForm: React.FC<FurtherQuestionsFormProps> = ({
  form,
  jobRole,
  goNext,
  goBack,
}) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2"></div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" className="w-full mr-2" onClick={goBack}>
          Back
        </Button>
        <Button onClick={goNext} className="w-full text-semantic-white">
          Next
        </Button>
        {/* <Button
          type="submit"
          className="w-full text-semantic-white"
          disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button> */}
      </div>
    </>
  );
};

export default FurtherQuestionsForm;
