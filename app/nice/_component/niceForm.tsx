"use client";
import { testNiceAction } from "@/actions/test-nice";
import { Button, Input } from "@nextui-org/react";
import { useFormState } from "react-dom";

type Props = {};

const NiceForm = (props: Props) => {
  const [formState, action] = useFormState(testNiceAction, { errors: {} });
  return (
    <div>
      <h1>Nice Form</h1>
      {formState.success ? <p>NIce la boy</p> : null}
      <form action={action}>
        <label htmlFor="title">Title</label>
        <Input type="text" name="title" />
        <p>{formState.errors.title?.join(", ")}</p>
        <label htmlFor="description">Description</label>
        <Input type="text" name="description" />
        <p>{formState.errors.description?.join(", ")}</p>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default NiceForm;
