import { useState } from 'react';;
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faCheckCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputFile } from "@/components/ui/input-file";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

export default function CrearLotes() {
  const [lote, setLote] = useState<string>('');

  const isInvalid = () => {
    return !lote.length;
  }

  function errorToast() {
    toast({
      variant: "destructive",
      description: (
        <div className="flex gap-2 items-center text-base">
          <FontAwesomeIcon icon={faCircleXmark} />
          <span>Este lote ya fue cargado anteriormente.</span>
          <u>Revisar lote previo</u>
        </div>
      ),
    })
  }

  function successToast() {
    toast({
      variant: "success",
      description: (
        <div className="flex gap-2 items-center text-base">
          <FontAwesomeIcon icon={faCheckCircle} />
          <span>Lote creado exitosamente.</span>
        </div>
      ),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Crear Lote
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[945px] max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>Crear Lote</DialogTitle>
          <DialogDescription>Para crear una propiedad es necesario crear un lote.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex gap-4 py-4 px-10">
            <div className="flex flex-1 flex-col justify-between gap-2">
              <Label>Nombre de la propiedad</Label>
              <p className="mb-1 text-lg">Nombre de la Propiedad</p>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label>Nombre del lote</Label>
              <Input placeholder="Seleccionar" onInput={(event) => setLote(event.target.value)} />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label>* Formato para subir KMZ</Label>
              <InputFile onInput={(value) => console.log(value)}>
                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                Cargar KML
              </InputFile>
            </div>
          </div>
          <div className="h-[30vh] min-h-[350px] bg-green-200 py-4 px-10">
            <Input className="w-1/2" placeholder="Buscar coordenadas" onInput={(value) => console.log(value)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-primary" />
            </Input>
          </div>
        </div>
        <DialogFooter>
          <Button variant={'secondary'} onClick={errorToast}>Cancelar</Button>
          <Button onClick={successToast} disabled={isInvalid()}>Guardar Lote</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
