"use client";
import { createTopic } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormBottom from "../common/form-bottom";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex  flex-col gap-4 p-4">
            <h3 className="text-lg">
              <Input
                label="name"
                name="name"
                labelPlacement="outside"
                placeholder="name"
                isInvalid={!!formState.errors.name}
                errorMessage={formState.errors.name?.join(", ")}
              />
              <Textarea
                name="description"
                label="description"
                labelPlacement="outside"
                placeholder="Describe your topic"
                isInvalid={!!formState.errors.description}
                errorMessage={formState.errors.description?.join(", ")}
              />
            </h3>
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-400">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <FormBottom>Submit</FormBottom>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
