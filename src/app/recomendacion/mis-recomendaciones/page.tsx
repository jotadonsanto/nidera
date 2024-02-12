"use client"

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
import DataTable from '@/components/recomendacion/recomendacionDataTable';

import { tableData } from '@/app/mockFile';

// Form libraries and validations.
import { zodResolver } from "@hookform/resolvers/zod"
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
  const form = useForm<z.infer<typeof FormSchema>>({
    // resolver: zodResolver(FormSchema),
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
            <Button variant="default">Crear Recomendación</Button>
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
                          <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-primary" />
                          <Input placeholder="shadcn" {...field} />
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
          <DataTable list={tableData} />
        </MainSide>
      }
    />
  );
}
