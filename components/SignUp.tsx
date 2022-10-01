import React from "react";
import * as yup from "yup";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "components/Input";
import PasswordInput from "components/PasswordInput";
import { SignUpFormInput } from "interfaces";
import { login } from "hooks/store";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required();

export default function SignUp() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm<SignUpFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(login(data.email));
    enqueueSnackbar("You have successfully signed up.", { variant: "success" });
  };

  return (
    <FormProvider {...methods}>
      <Head>
        <title>Sign up</title>
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
          id="firstName"
          label="First name"
          name="firstName"
          autoComplete="fname"
          margin="normal"
        />
        <Input
          required
          fullWidth
          id="lastName"
          label="Last name"
          name="lastName"
          autoComplete="lname"
          margin="normal"
        />
        <Input
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          label="Email"
          margin="normal"
        />
        <PasswordInput />
        <Typography variant="subtitle2" fontWeight={400} color="text.secondary">
          Your password must contain at least one letter, number, or special
          character. Also, your password must be at least 8 characters. should
          occur.
        </Typography>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          data-testid="submit"
        >
          Sign up
        </Button>
      </Box>
    </FormProvider>
  );
}
