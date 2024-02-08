"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImage, faBell, faStar, faHeart  } from '@fortawesome/free-regular-svg-icons';


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex items-start min-h-screen flex-col justify-start p-8">
      <div className="font-mono text-sm">
        <p className="border-b border-neutral-300 bg-gradient-to-b from-neutral-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-neutral-800/30 dark:from-inherit static w-auto  rounded-xl border bg-neutral-200 p-4">
          @jotadonsanto
        </p>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          I will use this space to document my components.
          <br/>
          Useful links to libraries will be also added here.
        </a>
      </div>
      <hr className="my-4 w-full" />
      <div className="flex flex-row justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Neutral Colors</h3>
          <div className="flex flex-col flex-wrap gap-4">
            <div className="h-9 w-9 bg-neutral-100" />
            <div className="h-9 w-9 bg-neutral-200" />
            <div className="h-9 w-9 bg-neutral-300" />
            <div className="h-9 w-9 bg-neutral-400" />
            <div className="h-9 w-9 bg-neutral-500" />
            <div className="h-9 w-9 bg-neutral-600" />
            <div className="h-9 w-9 bg-neutral-700" />
            <div className="h-9 w-9 bg-neutral-800" />
            <div className="h-9 w-9 bg-neutral-900" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Buttons</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Button variant={'default'}>Default</Button>
              <Button variant={'secondary'}>Secondary</Button>
              <Button variant={'destructive'}>Destructive</Button>
              <Button variant={'ghost'}>Ghost</Button>
              <Button variant={'link'}>Link</Button>
              <Button variant={'outline'}>Outline</Button>
            </div>
            <div className="grid gap-2">
              <Button disabled variant={'default'}>Default</Button>
              <Button disabled variant={'secondary'}>Secondary</Button>
              <Button disabled variant={'destructive'}>Destructive</Button>
              <Button disabled variant={'ghost'}>Ghost</Button>
              <Button disabled variant={'link'}>Link</Button>
              <Button disabled variant={'outline'}>Outline</Button>
            </div>
            <div className="grid gap-2">
              <Button size={'lg'}>Size LG</Button>
              <Button size={'default'} variant={'default'}>Size Default</Button>
              <Button size={'sm'} variant={'default'}>Size SM</Button>
              <Button size={'icon'} variant={'default'}>Icon</Button>
            </div>
          </div>
        </div>
        {/* Buttons */}

        {/* Input Forms */}
        <div>
          <h3 className="text-2xl">Form with validations</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        {/* Input Forms */}

        {/* Tabs */}
        <div>
          <h3 className="text-2xl">Tabs</h3>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="soraya">Dashboard</TabsTrigger>
              <TabsTrigger value="account">Mis Recomendaciones</TabsTrigger>
              <TabsTrigger value="password">Mis Lotes</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
            <TabsContent value="soraya">Change your password here.</TabsContent>
          </Tabs>

          <hr className="my-4" />

          {/* Icons */}
          <h3 className="text-2xl">Icons</h3>
          <FontAwesomeIcon icon={faUser} size="2x" className="text-primary mr-2" />
          <FontAwesomeIcon icon={faImage} size="2x" className="text-secondary mr-2" />
          <FontAwesomeIcon icon={faStar} size="2x" className="text-primary-foreground mr-2" />
          <FontAwesomeIcon icon={faHeart} size="2x" className="text-accent mr-2" />
          <FontAwesomeIcon icon={faBell} size="2x" className="text-destructive mr-2" />
        </div>
      </div>
    </div>
  );
}
