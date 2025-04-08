import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Control } from "react-hook-form"; // Ensure this import exists if using react-hook-form
import { DialogClose } from "../ui/dialog";

interface PersonalInfoProps {
  register: (name: string) => {
    onChange: () => void;
    onBlur: () => void;
    ref: React.Ref<any>;
  };
  errors: Record<string, { message: string }>; // Replace with a more specific type if available
  jobRole: { title: string } | null;
  handleCancel: () => void;
  goNext: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  register,
  errors,
  jobRole,
  handleCancel,
  goNext,
}) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium mb-2">
              First Name
            </label>
            <Input {...register("firstName")} />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <Input placeholder="Doe" />

          <Input placeholder="janedoe@gmail.com" />

          <Input placeholder="(123) 456-7890" />

          <Input placeholder="https://linkedin.com/in/yourprofile" />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Software Engineer"
            className="bg-gray-200"
            disabled
            value={jobRole ? jobRole.title : ""}
          />

          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => field.onChange(e.target.files?.[0] || null)}
            onBlur={field.onBlur}
            name={field.name}
            ref={field.ref}
            className="hover:bg-gray-50 hover:text-primary-medium cursor-pointer"
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
                  <Input placeholder="https://yourwebsite.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <DialogClose className="w-full mr-2">
          <Button
            className="w-full mr-2"
            variant="outline"
            onClick={handleCancel}>
            Cancel
          </Button>
        </DialogClose>
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

export default PersonalInfo;
