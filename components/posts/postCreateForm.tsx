"use client";

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormBottom from "../common/form-bottom";
import { useFormState } from "react-dom";
import { createPosts } from "@/actions";

interface PostCreateFormProps {
  slug: string;
}

const PostCreateForm = ({ slug }: PostCreateFormProps) => {
  const [formState, action] = useFormState(createPosts.bind(null, slug), {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 *: p-4 w-80">
            <h3 className="text-lg">Create a post</h3>
            <Input
              name="title"
              label="title"
              labelPlacement="outside"
              placeholder="title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="content"
              labelPlacement="outside"
              placeholder="content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-400">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}
            <FormBottom>Create</FormBottom>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
