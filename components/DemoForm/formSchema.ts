import * as z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional()
    .or(z.literal("")),
  inquiryType: z.string().min(2, "At least a selection is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type FormSchema = z.infer<typeof formSchema>;
