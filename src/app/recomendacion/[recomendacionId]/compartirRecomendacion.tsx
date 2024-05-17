import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt  } from '@fortawesome/free-solid-svg-icons';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { faCheckCircle, faCopy } from '@fortawesome/free-regular-svg-icons';
import { toast } from "@/components/ui/use-toast";

export default function CompartirRecomendacion(props: any) {
  const [stage, setStage] = useState<string>('first');
  const [form, setForm] = useState<{contacto?: string, mensaje?: string }>({});

  const isInvalid = () => {
    return !form.contacto || !form.contacto.length;
  }

  function copyLink(value: string) {
    toast({
      title: "El link ha sido copiado!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{value}</code>
        </pre>
      ),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'} className="flex justify-between" >
          <FontAwesomeIcon icon={faShareAlt} className="text-primary mr-2" />
          Compartir Recomendacion
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[590px] max-w-[50vw]">
        {stage === 'first' ? <>
          <DialogHeader>
            <DialogTitle>Compartir Recomendacion</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 px-24 py-2">
            <div className="flex flex-1 flex-col gap-2">
              <Label>Contacto *</Label>
              <Select onValueChange={(value) => setForm({contacto: value, mensaje: form.mensaje})}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar Cliente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Lucio Lopez</SelectItem>
                    <SelectItem value="banana">Fernan Miras</SelectItem>
                    <SelectItem value="blueberry">Ernesto Romero Gray</SelectItem>
                    <SelectItem value="grapes">Juan Diaz Gomez</SelectItem>
                    <SelectItem value="pineapple">7 ire Lop</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label>Descripción (Opcional)</Label>
              <Textarea placeholder="Breve descripción" onInput={(event) => setForm({contacto: form.contacto, mensaje: (event.target as HTMLTextAreaElement).value})} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={'secondary'}>Cancelar</Button>
            </DialogClose>
            <Button disabled={isInvalid()} onClick={() => setStage('second')}>Compartir por Email</Button>
            <Button disabled={isInvalid()} onClick={() => setStage('second')}><FontAwesomeIcon icon={faShareAlt} className="text-black mr-2" />Compartir por Whatsapp</Button>
          </DialogFooter>
        </> : 
        <>
          <DialogHeader>
            <DialogTitle>Copiá el link si querés reenviarlo por otro medio</DialogTitle>
          </DialogHeader>
          <div className="mx-20 rounded p-4 bg-green-300 flex items-center justify-center leading-none">
            <FontAwesomeIcon icon={faCheckCircle} className="text-black mr-2" />
            Recomendación enviada con éxito
          </div>
          <div className="flex flex-col gap-4 px-24 py-2">
            <div className="flex flex-1 gap-2">
              <Input value="https://www.nidera.com/recomenda=2?..." />
              <Button variant={'secondary'} onClick={() => copyLink('https://www.nidera.com/recomenda=2?...')}><FontAwesomeIcon icon={faCopy} className="text-primary mr-2" />Copiar link</Button>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={'default'} onClick={() => setStage('first')}>Cancelar</Button>
            </DialogClose>
          </DialogFooter>
        </>}
      </DialogContent>
    </Dialog>
  )
}
