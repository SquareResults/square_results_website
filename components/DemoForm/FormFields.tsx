import { Asterisk } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { UseFormReturn } from "react-hook-form";

export function FormFields({
  form,
  inquiryOptions,
}: {
  form: UseFormReturn<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    inquiryType: string;
    message: string;
  }>;
  inquiryOptions: string[];
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="hidden"
          name="_subject"
          value="New submission for Square Results!"
        />
        <input type="hidden" name="_template" value="table" />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-semantic-white flex items-center">
                <label>First Name</label>
                <Asterisk className="w-4 h-4 text-red-500" />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  className="bg-semantic-white placeholder-gray-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-semantic-white flex items-center">
                <label>Last Name</label>
                <Asterisk className="w-4 h-4 text-red-500" />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                  className="bg-semantic-white placeholder-gray-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-semantic-white flex items-center">
                <label>Email</label>
                <Asterisk className="w-4 h-4 text-red-500" />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="john@company.com"
                  {...field}
                  className="bg-semantic-white placeholder-gray-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-semantic-white flex items-center">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="+1 (555) 000-0000"
                  {...field}
                  className="bg-semantic-white placeholder-gray-500"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="inquiryType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-semantic-white flex items-center">
              <label>Inquiry Type</label>
              <Asterisk className="w-4 h-4 text-red-500" />
            </FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue="">
                <SelectTrigger className="bg-semantic-white placeholder-gray-500">
                  <SelectValue
                    placeholder="Choose an option"
                    className="placeholder-gray-500"
                  />
                </SelectTrigger>
                <SelectContent className="bg-semantic-white">
                  {inquiryOptions.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className="hover:bg-gray-200">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-semantic-white flex items-center">
              <label>Message</label>
              <Asterisk className="w-4 h-4 text-red-500" />
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Write your message here..."
                {...field}
                className="bg-semantic-white placeholder-gray-500"
              />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
    </>
  );
}
