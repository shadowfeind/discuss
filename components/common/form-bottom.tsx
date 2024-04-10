"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

interface FormBottomProps {
  children: React.ReactNode;
}

const FormBottom = ({ children }: FormBottomProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {pending ? `${children}ing...` : children}
    </Button>
  );
};

export default FormBottom;
