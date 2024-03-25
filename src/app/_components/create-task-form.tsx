"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { api } from "~/trpc/react";

import { toast } from "sonner";

import { createTaskSchema } from "~/schemas";

const CreateTaskForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const createTask = api.task.create.useMutation({
    onSuccess: () => {
      toast.success("Task was created");
      form.reset();
    },

    onSettled: () => {
      router.refresh();
    },

    onError: (data) => {
      toast.success(data.message);
      form.reset();
    },
  });

  const onSubmit = (values: z.infer<typeof createTaskSchema>) => {
    startTransition(async () => {
      await createTask.mutateAsync({
        title: values.title,
        description: values.description,
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="relative text-white">
              <FormLabel>Title *</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Buy a present"
                  {...field}
                />
              </FormControl>
              <FormDescription>Create a title for the task</FormDescription>
              <FormMessage className="absolute bottom-0 right-0" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="relative text-white">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="I've promised my friend..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Create a description for the taks
              </FormDescription>
              <FormMessage className="absolute bottom-0 right-0" />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Create
        </Button>
      </form>
    </Form>
  );
};

export default CreateTaskForm;
