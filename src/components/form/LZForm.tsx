import type { ReactNode } from "react";
import {
  FormProvider,
  useForm,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";

type TLZFormProps = {
  onsubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultValues?: Record<string, unknown>;
};

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
};

const LZForm = ({ onsubmit, children, defaultValues }: TLZFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)}>{children}</form>;
    </FormProvider>
  );
};

export default LZForm;
