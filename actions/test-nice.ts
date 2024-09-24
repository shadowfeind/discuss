"use action";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { z } from "zod";

type TestNiceState = {
  errors: {
    title?: string[];
    description?: string[];
  };
  success?: boolean;
};

const TestNiceSchema = z.object({
  title: z.string().min(3).max(10),
  description: z.string().max(20),
});

export const testNiceAction = async (
  formState: TestNiceState,
  formData: FormData
): Promise<TestNiceState> => {
  const result = TestNiceSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  //   revalidatePath('/')
  //   redirect('/');

  return { errors: {}, success: true };
};
