import { useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Form } from "../ui/form";

const ApplicantSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .nonempty(),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .nonempty(),
  emailAddress: z.string().email("Invalid email address").nonempty(),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  jobRole: z.string().min(2, "Job role must be at least 2 characters"),
  resume: z
    .any()
    .refine(
      (fileList) =>
        fileList?.length > 0 && fileList[0].type === "application/pdf",
      "Only PDF files are allowed."
    )
    .refine(
      (fileList) => fileList?.length > 0 && fileList[0].size <= 5 * 1024 * 1024,
      "File size must be less than 5MB."
    ),
  coverLetter: z.any().optional().or(z.literal(undefined)),
  linkedIn: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  website: z.string().url().optional().or(z.literal("")),
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
    .refine(
      (val) => (val === true ? "Yes" : val === false ? "No" : "Depends"),
      "You must be willing to relocate"
    ),
});

type FormValues = z.infer<typeof ApplicantSchema>;

export function ApplyNowForm({
  open,
  onOpenChange,
  jobRole,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobRole: { title: string } | null;
}) {
  const form = useForm<FormValues>({
    mode: "onChange", // Enables validation on value change
    resolver: zodResolver(ApplicantSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      jobRole: jobRole?.title || "",
      resume: undefined,
      coverLetter: undefined,
      linkedIn: "",
      github: "",
      website: "",
      over18: false,
      highestLevel: "",
      legallyAuthorized: false,
      requireSponsorship: false,
      willingToRelocate: false,
    },
  });

  useEffect(() => {
    if (jobRole) {
      form.setValue("jobRole", jobRole.title);
    }
  }, [jobRole, form]);

  const handleCancel = () => {
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/10  transition-opacity overflow-y-auto">
          <DialogContent className="w-full sm:max-w-screen-sm h-full overflow-y-auto ">
            <DialogHeader>
              <DialogTitle className="text-center">Apply Now</DialogTitle>
              <DialogDescription className="text-center py-0 my-0 text-md text-primary-medium bold">
                {jobRole?.title}
              </DialogDescription>
              <DialogDescription className="text-center">
                Please fill out the form below to apply for the position.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                id="myForm"
                method="post"
                action={`https://formsubmit.co/${process.env.FORM_SUBMIT}`}
                encType="multipart/form-data"
                className="w-full max-w-lg mx-auto bg-white rounded ">
                {/* Personal Info Section */}
                <input
                  type="hidden"
                  name="_subject"
                  value={`New submission for ${form.watch(
                    "jobRole"
                  )} at Square Results!`}
                />
                <input
                  type="hidden"
                  name="_next"
                  value={`https://www.squareresults.com/submitted`}></input>
                <input type="hidden" name="_template" value="table" />
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
                          {...form.register("firstName")}
                          className="w-full px-3 py-2 border rounded"
                        />
                        {form.formState.errors.firstName && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.firstName.message}
                          </p>
                        )}
                      </div>
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
                          {...form.register("lastName")}
                          className="w-full px-3 py-2 border rounded"
                        />
                        {form.formState.errors.lastName && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.lastName.message}
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
                          {...form.register("phoneNumber")}
                          className="w-full px-3 py-2 border rounded"
                        />
                        {form.formState.errors.phoneNumber && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.phoneNumber.message}
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
                          {...form.register("emailAddress")}
                          className="w-full px-3 py-2 border rounded"
                        />
                        {form.formState.errors.emailAddress && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.emailAddress.message}
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
                          placeholder="https://github.com/yourusername"
                          {...form.register("github")}
                          className="w-full px-3 py-2 border rounded"
                        />
                        {form.formState.errors.github && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.github.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="mb-6">
                      {/* LinkedIn */}
                      <div className="mb-4">
                        <Label
                          htmlFor="linkedIn"
                          className="block font-medium mb-2">
                          LinkedIn Profile (optional)
                        </Label>
                        <input
                          id="linkedIn"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          {...form.register("linkedIn")}
                          className="w-full px-3 py-2 border rounded"
                        />
                        {form.formState.errors.linkedIn && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.linkedIn.message}
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
                          placeholder="Website URL"
                          type="url"
                          {...form.register("website")}
                          className="w-full px-3 py-2 border rounded"
                        />
                        {form.formState.errors.website && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.website.message}
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
                          accept="application/pdf"
                          {...form.register("resume")}
                          className="w-full"
                        />
                        {form.formState.errors.resume && (
                          <p className="text-red-500 text-sm">
                            {String(form.formState.errors.resume.message)}
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
                          accept="application/pdf"
                          {...form.register("coverLetter")}
                          className="w-full"
                          defaultValue={""}
                        />
                        {form.formState.errors.coverLetter && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.coverLetter.message?.toString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Further Questions Section */}
                <h2 className="text-xl font-semibold ">Further Questions</h2>
                <DialogDescription className="text-slate-500 mb-4">
                  Please note, your responses to these questions are for
                  informational purposes only and will not influence the outcome
                  of your submission.
                </DialogDescription>
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
                        <Select {...form.register("over18")}>
                          <SelectTrigger
                            id="over18"
                            className="w-full px-3 py-2 border rounded">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-white shadow rounded">
                            <SelectItem
                              value="Yes"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              Yes
                            </SelectItem>
                            <SelectItem
                              value="No"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              No
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.over18 && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.over18.message}
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
                        <Select {...form.register("requireSponsorship")}>
                          <SelectTrigger
                            id="sponsorship"
                            className="w-full px-3 py-2 border rounded">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-white shadow rounded">
                            <SelectItem
                              value="Yes"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              Yes
                            </SelectItem>
                            <SelectItem
                              value="No"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              No
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.requireSponsorship && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.requireSponsorship.message}
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
                        <Select {...form.register("willingToRelocate")}>
                          <SelectTrigger
                            id="willingToRelocate"
                            className="w-full px-3 py-2 border rounded">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-white shadow rounded">
                            <SelectItem
                              value="Yes"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              Yes
                            </SelectItem>
                            <SelectItem
                              value="No"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              No
                            </SelectItem>
                            <SelectItem
                              value="Depends"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              Depends
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.willingToRelocate && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.willingToRelocate.message}
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
                          htmlFor="highestLevel"
                          className="block font-medium mb-2 leading-5">
                          Highest Level of Education
                        </Label>
                        <Select {...form.register("highestLevel")}>
                          <SelectTrigger
                            id="highestLevel"
                            className="w-full px-3 py-2 border rounded">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-white shadow rounded">
                            <SelectItem
                              value="High School"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              High School
                            </SelectItem>
                            <SelectItem
                              value="Associate Degree"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              Associate Degree
                            </SelectItem>
                            <SelectItem
                              value="Bachelor's Degree"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              Bachelor&apos;s Degree
                            </SelectItem>
                            <SelectItem
                              value="Master's Degree"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              Master&apos;s Degree
                            </SelectItem>
                            <SelectItem
                              value="PhD"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              PhD
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.highestLevel && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.highestLevel.message}
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
                        <Select {...form.register("legallyAuthorized")}>
                          <SelectTrigger
                            id="legallyAuthorized"
                            className="w-full px-3 py-2 border rounded">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-white shadow rounded">
                            <SelectItem
                              value="Yes"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              Yes
                            </SelectItem>
                            <SelectItem
                              value="No"
                              className="px-3 py-2 pl-8 hover:bg-gray-200">
                              No
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.legallyAuthorized && (
                          <p className="text-red-500 text-sm">
                            {form.formState.errors.legallyAuthorized.message}
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
                    className="w-full mr-2 shadow-md shadow-slate-500/50"
                    onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="w-full text-semantic-white shadow-md shadow-slate-500/50">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>

            <DialogTitle className="text-2xl font-bold">
              Square Results
            </DialogTitle>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
