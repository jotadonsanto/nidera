"use client"

// Form libraries.
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

// Import UI components
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faChevronDown  } from '@fortawesome/free-solid-svg-icons';
import { faUser, faImage, faBell, faStar, faHeart  } from '@fortawesome/free-regular-svg-icons';

import { tableData } from '@/app/mockFile';

// Form validations
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const recomendacionStatus = (status: string) => {
  switch (status) {
    case 'processing':
      return <Badge variant="default">Procesando</Badge>
    case 'results_available':
      return <Badge variant="secondary">Resultados disponibles</Badge>
    case 'downloaded':
      return <Badge variant="outline">Descargado</Badge>
    case 'sent':
      return <Badge variant="destructive">Resultados disponibles</Badge>
    default:
      return <div>-</div>;
  }
}


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
      <div className="grid grid-cols-1 gap-10 w-full">

        {/* Table */}
        <div className="flex gap-8">
          <div>
            {/* Color Palette */}
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
          </div>
          <div className="flex-1">
            <h3 className="text-2xl">Table</h3>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Propiedad</TableHead>
                  <TableHead>Cant. Lote</TableHead>
                  <TableHead>Distribuidor</TableHead>
                  <TableHead>Cultivo</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Creado por</TableHead>
                  <TableHead className="w-[60px]">Sembrado</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                tableData.map((recomendacion) => (
                  <Collapsible key={recomendacion.id} asChild>
                    <>
                      <CollapsibleTrigger asChild type={undefined} className="cursor-pointer">
                        {/* Acá se itera cada fila de la tabla */}
                        <TableRow>
                            <TableCell>{recomendacion.id}</TableCell>
                            <TableCell>{recomendacion.cliente}</TableCell>
                            <TableCell>{recomendacion.propiedad}</TableCell>
                            <TableCell>{recomendacion.cantidad}</TableCell>
                            <TableCell>{recomendacion.distribuidor}</TableCell>
                            <TableCell>{recomendacion.cultivo}</TableCell>
                            <TableCell>
                              { recomendacionStatus(recomendacion.estado) }
                            </TableCell>
                            <TableCell>{recomendacion.creado}</TableCell>
                            <TableCell className="text-center">
                              {recomendacion.sembrado &&
                                <FontAwesomeIcon icon={faCircleCheck} size="lg" className="text-green-600 mr-2" />
                              }
                            </TableCell>
                            <TableCell className="text-center">
                              <FontAwesomeIcon icon={faChevronDown} size="sm" className="text-gray-500 mr-2" />
                            </TableCell>
                        </TableRow>
                      </CollapsibleTrigger>

                      {/* Si tiene data que desplegar */}
                      {recomendacion.lotes?.length &&
                      <CollapsibleContent asChild className="CollapsibleContent">
                        <TableRow>
                          <TableCell colSpan={10}>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Lote</TableHead>
                                  <TableHead>Fecha de siembra</TableHead>
                                  <TableHead>Hibrido</TableHead>
                                  <TableHead colSpan={4}>Superficie</TableHead>
                                  <TableHead>Sembrado</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <>{
                                recomendacion.lotes.map((lote) => (
                                  <TableRow key={lote.id}>
                                    <TableCell>{lote.nombre}</TableCell>
                                    <TableCell>{lote.fecha}</TableCell>
                                    <TableCell>{lote.hibrido}</TableCell>
                                    <TableCell>{lote.superficie}</TableCell>
                                    <TableCell colSpan={1}>-</TableCell>
                                    <TableCell className="text-right">
                                      <Button variant="default" size="sm">
                                        Enviar seguimiento a Nidera
                                      </Button>
                                    </TableCell>
                                    <TableCell className="text-right">
                                    {lote.sembrado &&
                                      <FontAwesomeIcon icon={faCircleCheck} size="lg" className="text-green-600 mr-2" />
                                    }
                                    </TableCell>
                                  </TableRow>
                                  ))
                                }</>
                              </TableBody>
                            </Table>
                          </TableCell>
                        </TableRow>
                      </CollapsibleContent>
                      }
                    </>
                  </Collapsible>
                  ))
                }
              </TableBody>
            </Table>
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
                      Probá las validaciones haciendo submit
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>

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

          <hr className="my-4" />

          {/* Icons */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-2xl">Badges</h3>
            <Badge variant="default">Procesando</Badge>
            <Badge variant="secondary">Resultados disponibles</Badge>
            <Badge variant="outline">Descargado</Badge>
            <Badge variant="destructive">Resultados disponibles</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
