import React from "react";
import type { LoginFormInput } from "interfaces";
import * as yup from "yup";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "components/Input";
import Link from "components/Link";
import PasswordInput from "components/PasswordInput";
import { login } from "hooks/store";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

export default function SignIn() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "email@example.com",
      password: "123456",
    },
  });

  const onSubmit = (data: any) => {
    dispatch(login(data.email));
    enqueueSnackbar("You have successfully logged in.", {
      variant: "success",
    });
  };

  return (
    <FormProvider {...methods}>
      <Head>
        <title>Sign in</title>
      </Head>
      <Box
        component="form"
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{ mt: 1 }}
      >
        <Input
          required
          fullWidth
          margin="normal"
          id="email"
          type="email"
          label="Email"
          name="email"
          autoComplete="email"
        />
        <PasswordInput />
        <Link href="/auth/signup" variant="body2" display="block" align="right">
          Create account
        </Link>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          data-testid="submit"
        >
          Sign in
        </Button>
      </Box>
    </FormProvider>
  );
}
