import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faQuestionCircle  } from '@fortawesome/free-solid-svg-icons';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function EditarAmbientacion(props: any) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className="flex gap-2 absolute right-8 bottom-8">
          <FontAwesomeIcon icon={faEdit} />
          Editar Ambientación
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[590px] max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>Editar criterios de ambientación</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 px-24 py-2">
          <div className="flex flex-1 flex-col gap-2">
            <Label>Cantidad de ambientes (entre 2 y 10)</Label>
            <Input type="number" placeholder="Ingresá cantidad" onInput={(event) => null} />
            <span className="text-[0.8rem] font-medium text-destructive">El valor debe ser mayor o igual a 2 y menor o igual a 10</span>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex justify-between">
              <Label>Tamaño mínimo de polígonos (entre 0,5 y 3 ha)</Label>
              <Tooltip>
                <TooltipTrigger>
                  <FontAwesomeIcon icon={faQuestionCircle} size="sm" className="text-primary" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Superficie (ha) de áreas<br/>pequeñas que se quiere conservar.</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input placeholder="Ingresá el tamaño" onInput={(event) => null} />
          </div>
        </div>
        <DialogFooter>
          <Button variant={'secondary'}>Cancelar</Button>
          <Button>Guardar cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
