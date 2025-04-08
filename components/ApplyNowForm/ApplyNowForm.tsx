import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FaAngleDoubleRight } from "react-icons/fa";
import PersonalInfo from "./PersonalInfo";
import StepperComponent from "../StepperComponent";
import FurtherQuestionsForm from "./FurtherQuestionsForm";
import ReviewForm from "./ReviewForm";
import { X } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
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
});

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
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    return () => {
      setCurrentStep(0);
    };
  }, [open]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobRole: "",
      resume: undefined,
      coverLetter: undefined,
      linkedIn: "",
      github: "",
      website: "",
    },
  });

  const handleCancel = () => {
    setCurrentStep(0);
    form.reset();
    onOpenChange(false);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const formLink = `https://formsubmit.co/ajax/${process.env.FORM_SUBMIT}`;
      // Simulate API call
      await fetch(formLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(values);
      toast({
        title: "Demo Requested!",
        description: "We'll contact you shortly to schedule your demo.",
      });
      form.reset();
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

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/10 transition-opacity overflow-y-auto">
          <DialogContent className="sm:max-w-screen-sm h-full overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-center">Apply Now</DialogTitle>
              <DialogDescription className="text-center">
                Please fill out the form below to apply for the position.
              </DialogDescription>
              <StepperComponent currentStep={currentStep} steps={steps} />
              {/* <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                <li className="flex items-center text-blue-600 dark:text-blue-500">
                  <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                    1
                  </span>
                  Personal{" "}
                  <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                  <FaAngleDoubleRight className="sm:inline-flex sm:ms-2" />
                </li>
                <li className="flex items-center">
                  <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    2
                  </span>
                  Further{" "}
                  <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                  <FaAngleDoubleRight className="sm:inline-flex sm:ms-2" />
                </li>
                <li className="flex items-center">
                  <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    3
                  </span>
                  Review
                </li>
              </ol> */}

              <Form {...form}>
                <form
                  id="myForm"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4">
                  {currentStep === 0 && (
                    <PersonalInfo
                      form={form}
                      jobRole={jobRole}
                      handleCancel={handleCancel}
                      goNext={goToNextStep}
                    />
                  )}
                  {currentStep === 1 && (
                    <FurtherQuestionsForm
                      form={form}
                      jobRole={jobRole}
                      handleCancel={handleCancel}
                      goNext={goToNextStep}
                      goBack={goToPreviousStep}
                    />
                  )}
                  {currentStep === 2 && <ReviewForm />}
                  {/* <PersonalInfo
                    form={form}
                    jobRole={jobRole}
                    handleCancel={handleCancel}
                  /> */}
                  {/* <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="janedoe@gmail.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="linkedIn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn Profile</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://linkedin.com/in/yourprofile"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <FormField
                        control={form.control}
                        name="jobRole"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Role</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Software Engineer"
                                {...field}
                                className="bg-gray-200"
                                disabled
                                value={jobRole ? jobRole.title : ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="resume"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resume</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) =>
                                  field.onChange(e.target.files?.[0] || null)
                                }
                                onBlur={field.onBlur}
                                name={field.name}
                                ref={field.ref}
                                className="hover:bg-gray-50 hover:text-primary-medium cursor-pointer"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="coverLetter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Letter</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) =>
                                  field.onChange(e.target.files?.[0] || null)
                                }
                                onBlur={field.onBlur}
                                name={field.name}
                                ref={field.ref}
                                className="hover:bg-gray-50 hover:text-primary-medium cursor-pointer"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="github"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GitHub Profile</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://github.com/yourprofile"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Website / Portfolio{" "}
                              <span className="text-gray-400">(Optional)</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://yourwebsite.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

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
                  </div> */}
                </form>
              </Form>

              <DialogHeader className="text-center"></DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Square Results
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
