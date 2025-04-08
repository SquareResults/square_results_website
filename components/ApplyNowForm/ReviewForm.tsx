import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface ReviewFormProps {
  form: UseFormReturn<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobRole: string;
    resume: File;
    coverLetter: File;
    linkedIn: string;
    github: string;
    website: string;
    over18: boolean;
    highestLevel: string;
    legallyAuthorized: boolean;
    requireSponsorship: boolean;
    willingToRelocate: boolean;
  }>;
  jobRole: { title: string } | null;
  goBack: () => void;
  isSubmitting: boolean;
}

export default function ReviewForm({
  form,
  jobRole,
  goBack,
  isSubmitting,
}: ReviewFormProps) {
  return (
    <>
      <h2 className="text-2xl font-bold my-4">Review Your Information</h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <p>
            <strong>First Name:</strong> {form.watch("firstName")}
          </p>
          <p>
            <strong>Last Name:</strong> {form.watch("lastName")}
          </p>
          <p>
            <strong>Email:</strong> {form.watch("email")}
          </p>
          <p>
            <strong>Phone Number:</strong> {form.watch("phone")}
          </p>
          <p>
            <strong>Job Role:</strong> {jobRole?.title}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            <strong>LinkedIn Profile:</strong> {form.watch("linkedIn")}
          </p>
          <p>
            <strong>GitHub Profile:</strong> {form.watch("github")}
          </p>
          <p>
            <strong>Website/Portfolio:</strong> {form.watch("website")}
          </p>
          <p>
            <strong>Are you over 18?</strong>{" "}
            {form.watch("over18") ? "Yes" : "No"}
          </p>
          <p>
            <strong>Highest Level of Education:</strong>{" "}
            {form.watch("highestLevel")}
          </p>
          <p>
            <strong>Legally Authorized to Work in the US?</strong>{" "}
            {form.watch("legallyAuthorized") ? "Yes" : "No"}
          </p>
          <p>
            <strong>Require Sponsorship?</strong>{" "}
            {form.watch("requireSponsorship") ? "Yes" : "No"}
          </p>
          <p>
            <strong>Willing to Relocate?</strong>{" "}
            {form.watch("willingToRelocate") ? "Yes" : "No"}
          </p>
        </div>
      </div>

      {/* === ACTIONS === */}
      <div className="flex justify-between">
        <Button variant="outline" className="w-full mr-2" onClick={goBack}>
          Back
        </Button>
        <Button
          type="submit"
          className="w-full text-semantic-white"
          disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </>
  );
}
