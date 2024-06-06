import {
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem} from '@/components/ui/dropdown-menu';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlus  } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt  } from '@fortawesome/free-solid-svg-icons';


export default function ElegirContacto(props: any) {
  return (
    <>
    <DialogHeader>
      <DialogTitle>Compartir Recomendacion</DialogTitle>
    </DialogHeader>
    <div className="flex flex-col gap-4 px-24 py-2">
      <div className="flex flex-1 flex-col gap-2">
        <Label>Contacto *</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-full border rounded-md px-3 py-2 text-sm">
              {props.form.contacto ? <span>{ props.form.contacto }</span> : 
              <div className="flex justify-between">
                Elegir contacto 
                <FontAwesomeIcon icon={faChevronDown} size="sm" className="text-gray-400 mt-1 mr-1" />
              </div> }
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-96">
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex" onSelect={() => props.setStage('editar-contacto')}>
                <FontAwesomeIcon icon={faPlus} size="sm" className="text-primary mr-2" />
                <span className="font-semibold underline">Agregar nuevo contacto</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start" onSelect={() => props.setForm({contacto: 'Juan Carlos Romero Lopez', mensaje: props.form.mensaje})}>
                <span className="font-bold">Juan Carlos Romero Lopez</span>
                <span>email@email.com / 123456789</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start" onSelect={() => props.setForm({contacto: 'Eliseo Diaz Brest', mensaje: props.form.mensaje})}>
                <span className="font-bold">Eliseo Diaz Brest</span>
                <span>email@email.com / 123456789</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-1 flex-col gap-2">
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