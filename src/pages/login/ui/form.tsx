import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

import { useUnit } from "effector-react";

import { $$loginModel } from "../model";

import { Input, Button } from "@/shared/ui/atoms";

type TFormValues = {
  username: string;
  password: string;
};

export const LoginForm: FC = () => {
  const handleLogin = useUnit($$loginModel.handleLogin);
  const { control, handleSubmit } = useForm<TFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: TFormValues) => {
    console.log(data);
    handleLogin();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => <Input {...field} label="Username" />}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input {...field} type="password" label="Password" />
        )}
      />
      <Button fullWidth type="submit">
        Login
      </Button>
    </form>
  );
};
