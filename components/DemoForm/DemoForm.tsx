import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { SendIcon, X } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { formSchema, FormSchema } from "./formSchema";
import { FormFields } from "./FormFields";

export function DemoForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const jobRoles = ["Hiring Partner", "Job Seeker", "Other"];

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobRole: "",
      message: "",
    },
  });

  const handleCancel = () => {
    form.reset();
    onOpenChange(false);
  };

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  async function onSubmit(values: FormSchema) {
    setIsSubmitting(true);
    try {
      const formLink = `https://formsubmit.co/ajax/${process.env.FORM_SUBMIT_TEST}`;
      await fetch(formLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      toast({
        title: "Message Submitted!",
        description: "We'll contact you shortly to talk about your request.",
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.warn("Error Message: ", (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] overflow-y-visible sm:overflow-hidden bg-primary bg-opacity-100 shadow-lg rounded-lg">
        <button
          onClick={handleCancel}
          className="bg-white absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-semantic-white">
            Request a Meeting Today
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-300">
            Discover how SquareResults services can help you find your next
            opportunity or talent.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="hidden sm:block md:col-span-2 relative h-40 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500">
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-green-400/20 to-green-500/20"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="absolute top-6 left-1/4 w-12 h-12 bg-white rounded-full opacity-50" />
              <div className="absolute top-10 left-1/2 w-16 h-16 bg-white rounded-full opacity-30" />
              <div className="absolute top-4 right-1/4 w-10 h-10 bg-white rounded-full opacity-40" />
            </div>
          </div>

          <Form {...form}>
            <form
              id="myForm"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 md:col-span-2">
              <FormFields form={form} jobRoles={jobRoles} />
              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-semantic-white font-semibold py-2 px-4 rounded-full"
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <div className="flex items-center">
                      <p>Send Message</p>
                      <SendIcon className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="px-8 rounded-full text-semantic-black border-semantic-white hover:bg-red-500 hover:text-semantic-white">
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
