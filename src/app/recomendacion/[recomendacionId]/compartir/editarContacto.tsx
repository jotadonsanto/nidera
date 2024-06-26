import {
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlus  } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt  } from '@fortawesome/free-solid-svg-icons';


export default function EditarContacto(props: any) {
  return (
    <>
    <DialogHeader>
      <DialogTitle>Compartir Recomendacion</DialogTitle>
    </DialogHeader>
    <div className="flex flex-col gap-4 px-10 py-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label>Nombre*</Label>
          <Input placeholder="Nombre" onInput={(event) => props.setForm({contacto: 'Juan Carlos Romero Lopez', mensaje: props.form.mensaje})} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Apellido*</Label>
          <Input placeholder="Apellido" onInput={(event) => props.setForm({contacto: 'Juan Carlos Romero Lopez', mensaje: props.form.mensaje})} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Email*</Label>
          <Input placeholder="Email" onInput={(event) => props.setForm({contacto: 'Juan Carlos Romero Lopez', mensaje: props.form.mensaje})} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Telefono</Label>
          <Input placeholder="+5491112345678" onInput={(event) => props.setForm({contacto: 'Juan Carlos Romero Lopez', mensaje: props.form.mensaje})} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Descripción (Opcional)</Label>
        <Textarea placeholder="Breve descripción" onInput={(event) => props.setForm({contacto: props.form.contacto, mensaje: (event.target as HTMLTextAreaElement).value})} />
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant={'secondary'} onClick={() => props.setStage('elegir-contacto')}>Cancelar</Button>
      </DialogClose>
      <Button disabled={props.isInvalid} onClick={() => props.setStage('enviada')}>Compartir por Email</Button>
      <Button disabled={props.isInvalid} onClick={() => props.setStage('enviada')}><FontAwesomeIcon icon={faShareAlt} className="text-black mr-2" />Compartir por Whatsapp</Button>
    </DialogFooter>
    </>
  )
}