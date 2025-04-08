import React from "react";
import { Button } from "@/components/ui/button";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";

interface FurtherQuestionsFormProps {
  form: { control: Control<any> }; // Replace 'any' with the specific type if known
  handleCancel: () => void;
  goNext: () => void;
  goBack: () => void;
}

const FurtherQuestionsForm: React.FC<FurtherQuestionsFormProps> = ({
  form,
  goNext,
  goBack,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-4 mt-4">
          <FormField
            control={form.control}
            name="over18"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel>Are you over 18?</FormLabel>
                <FormControl>
                  <Checkbox
                    {...field}
                    className="text-semantic-white"
                    style={{ margin: "0 0 0 8px " }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="highestLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Highest Level of Education</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="py-1 w-1/4 rounded border border-1 border-solid border-primary-dark text-gray-700"
                    style={{ margin: "0 0 0 8px " }}>
                    <option value="">Select...</option>
                    <option value="highschool">High School</option>
                    <option value="bachelors">Bachelors</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="legallyAuthorized"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel>
                  Are you legally authorized to work in the US?
                </FormLabel>
                <FormControl>
                  <Checkbox
                    {...field}
                    className="text-semantic-white"
                    style={{ margin: "0 0 0 8px " }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="requireSponsorship"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel>
                  Do you require sponsorship to work in the US?
                </FormLabel>
                <FormControl>
                  <Checkbox
                    {...field}
                    className="text-semantic-white"
                    style={{ margin: "0 0 0 8px " }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="willingToRelocate"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel>Are you willing to relocate?</FormLabel>
                <FormControl>
                  <Checkbox
                    {...field}
                    className="text-semantic-white"
                    style={{ margin: "0 0 0 8px " }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
