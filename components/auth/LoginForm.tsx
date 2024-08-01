"use client";
import { CardWrapper } from "./CardWrapper";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { login } from "@/actions/login";
export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");

  const [isloading, startTransition] = useTransition();
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setErrorMessage("");
    setSuccessMessage("");
    startTransition(() => {
      login(values).then((data) => {
        setErrorMessage(data.error);
        setSuccessMessage(data.success);
      });
    });
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <CardWrapper
      headerLabel="Welcome Back !"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isloading}
                      {...field}
                      placeholder="johndoe123@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isloading}
                      {...field}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={errorMessage} />
          <FormSuccess message={successMessage} />
          <Button className="w-full" disabled={isloading}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
