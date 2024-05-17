// @ts-nocheck

import { useState } from 'react';
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { faCircleXmark, faEdit  } from '@fortawesome/free-solid-svg-icons'; 
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  fecha: z.string().min(2, {
    message: "Mensaje de validación",
  }),
  indice: z.number().min(2, {
    message: "Mensaje de validación",
  }),
  hibrido: z.string().min(2, {
    message: "Mensaje de validación",
  }),
  bolsas_totales: z.number().min(2, {
    message: "Mensaje de validación",
  }),
  coeficiente: z.number().min(2, {
    message: "Mensaje de validación",
  }),
  precio_grano: z.number().min(2, {
    message: "Mensaje de validación",
  }),
  precio_bolsa: z.number().min(2, {
    message: "Mensaje de validación",
  }),
  gastos_comercializacion: z.number().int().gte(1).lte(100),
  profundidad: z.number().min(2, {
    message: "Mensaje de validación",
  }),
  textura: z.string().min(2, {
    message: "Mensaje de validación",
  }),
  ano: z.string().min(2, {
    message: "Mensaje de validación",
  }),
  agua_util: z.number().min(2, {
    message: "Mensaje de validación",
  }),
})


export default function EditarInformacionGeneral(props: any) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fecha: "11/11/2025",
      indice: 1234,
      hibrido: "JKHASHH U8ks",
      bolsas_totales: 12,
      coeficiente: 92,
      precio_grano: 20,
      precio_bolsa: 100,
      gastos_comercializacion: 0,
      profundidad: 100,
      textura: "Franco",
      ano: "2023",
      agua_util: 230,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      variant: "success",
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <FontAwesomeIcon icon={faEdit} />
          Editar información
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[945px] max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>Editar Información General</DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 py-4 px-10">
            {Object.keys(props.fields).map((key, index) => (
              <>
                {/* @ts-ignore */}
                {Object.keys(props.fields[key as keyof typeof props.fields]).map((keyName, keyIndex) => (
                  <FormField
                    key={keyIndex}
                    control={form.control}
                    name={keyName}
                    render={({ field }) => (
                      <FormItem className="flex flex-1 flex-col gap-2">
                        <FormLabel>{props.items[keyName].label}</FormLabel>
                          {props.items[keyName].type === 'datepicker' ?
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <button
                                    className={cn(
                                      "border rounded pb-1 pt-2 pl-2 text-sm h-[36px] text-left font-normal",
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "dd-MM-yyyy")
                                    ) : (
                                      <span>Elije una fecha</span>
                                    )}
                                  </button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={new Date(field.value)}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover> :
                          props.items[keyName].type === 'select' ?
                            <FormControl>
                              <Input {...field} defaultValue={props.fields[key][keyName]} /> 
                            </FormControl> :
                          props.items[keyName].type === 'number' ?
                            <FormControl>
                              <Input type="number" {...field} defaultValue={props.fields[key][keyName]} />
                            </FormControl> :
                            <FormControl>
                              <Input {...field} defaultValue={props.fields[key][keyName]} />
                            </FormControl> 
                          }

                        <FormMessage />
                      </FormItem>
                    )} />
                ))}
              </>
            ))}
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button variant={'secondary'}>Cancelar</Button>
          <Button onClick={form.handleSubmit(onSubmit)}>Guardar cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
