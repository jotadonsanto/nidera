"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/layouts/Container';
import MainSide from '@/components/layouts/MainSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import RecomendacionesTable from '@/app/tablero/recomendacionesTable';

import { tableData } from '@/app/mockFile';
import type { Recomendacion } from '@/app/recomendacion/recomendacion';

// Form libraries and validations.
import { useForm } from "react-hook-form"
import { z } from "zod"
const FormSchema = z.object({
  terminos: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  cliente: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  cultivo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  campana: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  estado: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Recomendaciones() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Recomendacion[]>([]);

  useEffect(()=>{
    // faking API delay
    setTimeout(() => {
      console.log('despues de n segundos carga');
      setData(tableData);
      setLoading(false);
    }, 1000);
  },[])

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      terminos: "",
      cliente: "",
      cultivo: "",
      campana: "",
      estado: "",
    },
  })

  function formChange(data: z.infer<typeof FormSchema>) {
    console.log('cambia un valor del formulario, deberia realizarse una actualizacion de la tabla');
    console.log(data);
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
    <Container
      main={
        <MainSide>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUserCheck} size="1x" className="text-primary" />
              <h3 className="font-bold">Mis Recomendaciones</h3>
            </div>
            <Link href="/recomendacion/lotes">
              <Button variant="default">Crear Recomendación</Button>
            </Link>
          </div>

          {/* Filtros de la tabla */}
          <div className="mt-5 mb-2">
            <Form {...form}>
              <form onChange={form.handleSubmit(formChange)} className="flex gap-4 flex-1">
                <FormField
                  control={form.control}
                  name="terminos"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <span className="flex items-center gap-2">
                          <Input placeholder="Buscar" {...field}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-primary" />
                          </Input>
                        </span>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cliente"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Cliente" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Guelanciada">Guelanciada</SelectItem>
                          <SelectItem value="Pobuntrocia">Pobuntrocia</SelectItem>
                          <SelectItem value="Tresta">Tresta</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cultivo"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Cultivo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Guelanciada">Guelanciada</SelectItem>
                          <SelectItem value="Pobuntrocia">Pobuntrocia</SelectItem>
                          <SelectItem value="Tresta">Tresta</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="campana"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Campaña" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Guelanciada">Guelanciada</SelectItem>
                          <SelectItem value="Pobuntrocia">Pobuntrocia</SelectItem>
                          <SelectItem value="Tresta">Tresta</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="estado"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Estado" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Guelanciada">Guelanciada</SelectItem>
                          <SelectItem value="Pobuntrocia">Pobuntrocia</SelectItem>
                          <SelectItem value="Tresta">Tresta</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <RecomendacionesTable list={data} loading={loading} />
        </MainSide>
      }
    />
  );
}
