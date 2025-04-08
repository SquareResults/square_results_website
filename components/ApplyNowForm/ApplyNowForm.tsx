import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import PersonalInfo from "./PersonalInfo";
import StepperComponent from "../StepperComponent";
import FurtherQuestionsForm from "./FurtherQuestionsForm";
import ReviewForm from "./ReviewForm";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ApplicantSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  jobRole: z.string().min(2, "Job role must be at least 2 characters"),
  resume: z
    .any()
    .refine((file) => file instanceof File, "Resume must be a file"),
  coverLetter: z
    .any()
    .refine((file) => file instanceof File, "Cover letter must be a file"),
  linkedIn: z.string().url("Invalid URL"),
  github: z.string().url("Invalid URL"),
  website: z.string().url("Invalid URL"),
  over18: z.boolean().refine((val) => val === true, "You must be over 18"),
  highestLevel: z.string().min(2, "Please select an option"),
  legallyAuthorized: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must be legally authorized to work in the US"
    ),
  requireSponsorship: z
    .boolean()
    .refine(
      (val) => val === false,
      "We are unable to provide sponsorship at this time"
    ),
  willingToRelocate: z
    .boolean()
    .refine((val) => val === true, "You must be willing to relocate"),
});

type FormValues = z.infer<typeof ApplicantSchema>;

const steps = ["Personal Info", "Further Qs", "Review"];

export function ApplyNowForm({
  open,
  onOpenChange,
  jobRole,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobRole: { title: string } | null;
}) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(ApplicantSchema),
  });

  const isOver18 = watch("over18");

  const handleCancel = () => {
    reset();
    onOpenChange(false);
  };

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const formLink = `https://formsubmit.co/ajax/${process.env.FORM_SUBMIT}`;
      console.log(JSON.stringify(values), null, 2);
      // Simulate API call
      // await fetch(formLink, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify(values),
      // });
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(values);
      toast({
        title: "Application Submitted!",
        description: "We'll contact you shortly with next steps.",
      });
      reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // const goToNextStep = () => {
  //   if (currentStep < steps.length - 1) {
  //     setCurrentStep(currentStep + 1);
  //   }
  // };

  // const goToPreviousStep = () => {
  //   if (currentStep > 0) {
  //     setCurrentStep(currentStep - 1);
  //   }
  // };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/10 transition-opacity overflow-y-auto">
          <DialogContent className="w-full sm:max-w-screen-sm h-full overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-center">Apply Now</DialogTitle>
              <DialogDescription className="text-center py-0 my-0 text-md text-primary-medium bold">
                {jobRole?.title}
              </DialogDescription>
              <DialogDescription className="text-center">
                Please fill out the form below to apply for the position.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-lg mx-auto bg-white shadow rounded">
              {/* Personal Info Section */}
              <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="mb-6">
                    {/* First Name */}
                    <div className="mb-4">
                      <Label
                        htmlFor="firstName"
                        className="block font-medium mb-2">
                        First Name
                      </Label>
                      <input
                        id="firstName"
                        placeholder="John"
                        type="text"
                        {...register("firstName")}
                        className="w-full px-3 py-2 border rounded"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                      <Label
                        htmlFor="phoneNumber"
                        className="block font-medium mb-2">
                        Phone Number
                      </Label>
                      <input
                        id="phoneNumber"
                        placeholder="(123) 456-7890"
                        type="tel"
                        {...register("phoneNumber")}
                        className="w-full px-3 py-2 border rounded"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">
                          {errors.phoneNumber.message}
                        </p>
                      )}
                    </div>

                    {/* Resume Upload */}
                    <div className="mb-4">
                      <Label
                        htmlFor="resume"
                        className="block font-medium mb-2">
                        Upload Resume
                      </Label>
                      <input
                        id="resume"
                        type="file"
                        {...register("resume")}
                        className="w-full"
                      />
                      {errors.resume && (
                        <p className="text-red-500 text-sm">
                          {errors.resume.message}
                        </p>
                      )}
                    </div>

                    {/* LinkedIn */}
                    <div className="mb-4">
                      <Label
                        htmlFor="linkedIn"
                        className="block font-medium mb-2">
                        LinkedIn Profile
                      </Label>
                      <input
                        id="linkedIn"
                        type="url"
                        {...register("linkedIn")}
                        className="w-full px-3 py-2 border rounded"
                      />
                      {errors.linkedIn && (
                        <p className="text-red-500 text-sm">
                          {errors.linkedIn.message}
                        </p>
                      )}
                    </div>

                    {/* GitHub (optional) */}
                    <div className="mb-4">
                      <Label
                        htmlFor="github"
                        className="block font-medium mb-2">
                        GitHub (optional)
                      </Label>
                      <input
                        id="github"
                        type="url"
                        {...register("github")}
                        className="w-full px-3 py-2 border rounded"
                      />
                      {errors.github && (
                        <p className="text-red-500 text-sm">
                          {errors.github.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="mb-6">
                    {/* Last Name */}
                    <div className="mb-4">
                      <Label
                        htmlFor="lastName"
                        className="block font-medium mb-2">
                        Last Name
                      </Label>
                      <input
                        id="lastName"
                        placeholder="Doe"
                        type="text"
                        {...register("lastName")}
                        className="w-full px-3 py-2 border rounded"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="mb-4">
                      <Label
                        htmlFor="emailAddress"
                        className="block font-medium mb-2">
                        Email Address
                      </Label>
                      <input
                        id="emailAddress"
                        placeholder="janedoe@gmail.com"
                        type="text"
                        {...register("emailAddress")}
                        className="w-full px-3 py-2 border rounded"
                      />
                      {errors.emailAddress && (
                        <p className="text-red-500 text-sm">
                          {errors.emailAddress.message}
                        </p>
                      )}
                    </div>

                    {/* Cover Letter Upload (optional) */}
                    <div className="mb-4">
                      <Label
                        htmlFor="coverLetter"
                        className="block font-medium mb-2">
                        Upload Cover Letter (optional)
                      </Label>
                      <input
                        id="coverLetter"
                        type="file"
                        {...register("coverLetter")}
                        className="w-full"
                      />
                      {errors.coverLetter && (
                        <p className="text-red-500 text-sm">
                          {errors.coverLetter.message}
                        </p>
                      )}
                    </div>

                    {/* Portfolio/Website (optional) */}
                    <div className="mb-4">
                      <Label
                        htmlFor="portfolio"
                        className="block font-medium mb-2">
                        Portfolio/Website (optional)
                      </Label>
                      <input
                        id="portfolio"
                        type="url"
                        {...register("website")}
                        className="w-full px-3 py-2 border rounded"
                      />
                      {errors.website && (
                        <p className="text-red-500 text-sm">
                          {errors.website.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Further Questions Section */}
              <h2 className="text-xl font-semibold mb-4">Further Questions</h2>
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="mb-6">
                    {/* Are You Over 18 */}
                    <div className="mb-4">
                      <Label
                        htmlFor="over18"
                        className="block font-medium mb-2 leading-5">
                        Are you over 18?
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setValue("over18", value == "Yes")
                        }>
                        <SelectTrigger
                          id="over18"
                          className="w-full px-3 py-2 border rounded">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-white shadow rounded">
                          <SelectItem
                            value="Yes"
                            className="px-3 py-2 hover:bg-gray-200">
                            Yes
                          </SelectItem>
                          <SelectItem
                            value="No"
                            className="px-3 py-2 hover:bg-gray-200">
                            No
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.over18 && (
                        <p className="text-red-500 text-sm">
                          {errors.over18.message}
                        </p>
                      )}
                    </div>

                    {/* Sponsorship */}
                    <div className="mb-4">
                      <Label
                        htmlFor="sponsorship"
                        className="block font-medium mb-2 leading-5">
                        Will you require sponsorship to work in the US?
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setValue(
                            "requireSponsorship",
                            value === "Yes" ? true : false
                          )
                        }>
                        <SelectTrigger
                          id="sponsorship"
                          className="w-full px-3 py-2 border rounded">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-white shadow rounded">
                          <SelectItem
                            value="Yes"
                            className="px-3 py-2 hover:bg-gray-200">
                            Yes
                          </SelectItem>
                          <SelectItem
                            value="No"
                            className="px-3 py-2 hover:bg-gray-200">
                            No
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.requireSponsorship && (
                        <p className="text-red-500 text-sm">
                          {errors.requireSponsorship.message}
                        </p>
                      )}
                    </div>

                    {/* Are You Willing to Relocate */}
                    <div className="mb-4">
                      <Label
                        htmlFor="willingToRelocate"
                        className="block font-medium mb-2 leading-5">
                        Are you willing to relocate?
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setValue("willingToRelocate", value == "Yes")
                        }>
                        <SelectTrigger
                          id="willingToRelocate"
                          className="w-full px-3 py-2 border rounded">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-white shadow rounded">
                          <SelectItem
                            value="Yes"
                            className="px-3 py-2 hover:bg-gray-200">
                            Yes
                          </SelectItem>
                          <SelectItem
                            value="No"
                            className="px-3 py-2 hover:bg-gray-200">
                            No
                          </SelectItem>
                          <SelectItem
                            value="Depends"
                            className="px-3 py-2 hover:bg-gray-200">
                            Depends
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.willingToRelocate && (
                        <p className="text-red-500 text-sm">
                          {errors.willingToRelocate.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="mb-6">
                    {/* Highest Level of Education */}
                    <div className="mb-4">
                      <Label
                        htmlFor="highestEducation"
                        className="block font-medium mb-2 leading-5">
                        Highest Level of Education
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setValue("highestLevel", value)
                        }>
                        <SelectTrigger
                          id="highestLevel"
                          className="w-full px-3 py-2 border rounded">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-white shadow rounded">
                          <SelectItem
                            value="High School"
                            className="px-3 py-2 hover:bg-gray-200">
                            High School
                          </SelectItem>
                          <SelectItem
                            value="Associate Degree"
                            className="px-3 py-2 hover:bg-gray-200">
                            Associate Degree
                          </SelectItem>
                          <SelectItem
                            value="Bachelor's Degree"
                            className="px-3 py-2 hover:bg-gray-200">
                            Bachelor's Degree
                          </SelectItem>
                          <SelectItem
                            value="Master's Degree"
                            className="px-3 py-2 hover:bg-gray-200">
                            Master's Degree
                          </SelectItem>
                          <SelectItem
                            value="PhD"
                            className="px-3 py-2 hover:bg-gray-200">
                            PhD
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.highestLevel && (
                        <p className="text-red-500 text-sm">
                          {errors.highestLevel.message}
                        </p>
                      )}
                    </div>

                    {/* Are You Legally Authorized to Work in the US */}
                    <div className="mb-4">
                      <Label
                        htmlFor="legallyAuthorized"
                        className="block font-medium mb-2 leading-5">
                        Are you legally authorized to work in the US?
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setValue("legallyAuthorized", value === "Yes")
                        }>
                        <SelectTrigger
                          id="legallyAuthorized"
                          className="w-full px-3 py-2 border rounded">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-white shadow rounded">
                          <SelectItem
                            value="Yes"
                            className="px-3 py-2 hover:bg-gray-200">
                            Yes
                          </SelectItem>
                          <SelectItem
                            value="No"
                            className="px-3 py-2 hover:bg-gray-200">
                            No
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.legallyAuthorized && (
                        <p className="text-red-500 text-sm">
                          {errors.legallyAuthorized.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="w-full mr-2"
                  onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="w-full text-semantic-white"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
            {/* <form
                id="myForm"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4">
                {currentStep === 0 && (
                  <PersonalInfo
                    register={register}
                    errors={errors}
                    jobRole={jobRole}
                    handleCancel={handleCancel}
                    goNext={goToNextStep}
                  />
                )}
                {currentStep === 1 && (
                  <FurtherQuestionsForm
                    form={form}
                    handleCancel={handleCancel}
                    goNext={goToNextStep}
                    goBack={goToPreviousStep}
                  />
                )}
                {currentStep === 2 && (
                  <ReviewForm
                    form={form}
                    jobRole={jobRole}
                    goBack={goToPreviousStep}
                    isSubmitting={isSubmitting}
                  />
                )}
              </form> */}
            {/* <DialogHeader className="text-center"></DialogHeader> */}
            <DialogTitle className="text-2xl font-bold">
              Square Results
            </DialogTitle>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
