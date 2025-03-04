"use client";

import { IUpdateUser, IUserInfo } from "@/types";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { updateMyProfile } from "@/services/auth";
import { toast } from "sonner";

import { IErrorResponse } from "@/types";

import { Locations } from "@/constants/locations";
import Container from "@/components/shared/Container";
import { z } from "zod";

const UserProfile = ({ user }: { user: IUserInfo }) => {
  const form = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      location: user.location,
      phoneNumber: user.phoneNumber,
    },
    resolver: zodResolver(
      z.object({
        name: z
          .string({ required_error: "Name is equired" })
          .min(2, "Name must be at least 2 characters"),
        email: z
          .string({ required_error: "Email is equired" })
          .email("Please enter a valid email"),
        location: z.string({ required_error: "Location is required" }),
        phoneNumber: z
          .string({ required_error: "Phone number is equired" })
          .min(11, "Phone number must be 11 digits"),
      })
    ),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<IUpdateUser> = async (data) => {
    try {
      const res = await updateMyProfile(data);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      const error = err as IErrorResponse;
      toast.error(error?.message);
    }
  };
  return (
    <Container>
      <section className="py-10 my-auto dark:bg-gray-900">
        <div className="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] sm:w-[88%] w-full mx-auto shadow-xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div>
              <h2 className="text-grey text-sm mb-1 dark:text-gray-400">
                Hey {user?.name}, Welcome to your
              </h2>
              <h1 className="lg:text-3xl md:text-2xl text-xl font-serif font-extrabold mb-4 dark:text-white">
                Profile
              </h1>

              <div>
                <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center py-4">
                  <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://i.postimg.cc/cJ3DWwSx/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg')] bg-cover bg-center bg-no-repeat"></div>
                </div>
              </div>
              <div className="py-6 lg:py-12">
                <Form {...form}>
                  <form
                    className="p-6 md:p-8"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="name">Name</Label>
                              <FormControl>
                                <Input
                                  id="name"
                                  type="text"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="email">Email</Label>
                              <FormControl>
                                <Input
                                  id="email"
                                  type="email"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="phoneNumber">Phone Number</Label>
                              <FormControl>
                                <Input
                                  id="phoneNumber"
                                  type="text"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="location">Location</Label>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger id="location">
                                    <SelectValue placeholder="Select your location" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent id="location">
                                  {Object.values(Locations).map(
                                    (location: string) => (
                                      <SelectItem
                                        key={location}
                                        value={location}
                                      >
                                        {location}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting && <Loader2 className="animate-spin" />}
                        Update
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default UserProfile;
