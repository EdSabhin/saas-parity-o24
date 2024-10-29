"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const productDetailsSchema = z.object({
  name: z.string().min(1, "Required"),
  url: z.string().url().min(1, "Required"),
  description: z.string().optional(),
})

export function ProductDetailsForm() {
  const form = useForm<z.infer<typeof productDetailsSchema>>({
    resolver: zodResolver(productDetailsSchema),
    defaultValues: {}
  })

  function onSubmit(values: z.infer<typeof productDetailsSchema>)  {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FormField
          control={form.control} name="name" render={({ field }) => (
            <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control} name="url" render={({ field }) => (
            <FormItem>
                <FormLabel>Enter your website URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription >
                  Include the protocol (http/https) and the full path to the sales page.
                </FormDescription>
                <FormMessage />
            </FormItem>
          )}
          />
        </div>
        
      </form>
    </Form>
  )
}