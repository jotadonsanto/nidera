import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFileCircleExclamation  } from '@fortawesome/free-solid-svg-icons';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem} from '@/components/ui/dropdown-menu';

export default function RecomendacionDescargar(props: any) {
  const [form, setForm] = useState<{marca?: string, modelo?: string, densidad?: string, distancia?: string }>({});
  const isInvalid = () => {
    return !form.marca || !form.marca.length;
  }

  const showDisclaimer = () => {
    return form.marca && form.modelo;
  }

  return (
    <Dialog onOpenChange={() => setForm({})}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'secondary'} className="flex justify-between ml-2">
            <FontAwesomeIcon icon={faDownload} className="text-primary mr-2" />
            Descargar
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Descargar Prescripción
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DialogTrigger>
                Descargar Recomendación
              </DialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="w-[590px] max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>Para descargar la recomendación,<br/>seleccioná un monitor de siembra</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 px-16 py-2">
          <p className="font-bold -mb-2">Monitor</p>
          {/* Marca y Modelo */}
          <div className="flex flex-row gap-2">
            <Select onValueChange={(value) => setForm({marca: value, modelo: form.modelo, densidad: form.densidad, distancia: form.distancia })}>
              <SelectTrigger>
                <SelectValue placeholder="Marca" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Fortezza</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setForm({marca: form.marca, modelo: value, densidad: form.densidad, distancia: form.distancia })}>
              <SelectTrigger>
                <SelectValue placeholder="Modelo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Fortezza</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Densidad de siembra */}
          <div className="flex gap-2">
            <span className="text-gray-400 text-sm">Densidad de siembra:</span>
            <RadioGroup defaultValue="sem-ha" className="flex" onValueChange={(value) => setForm({marca: form.marca, modelo: form.modelo, densidad: value, distancia: form.distancia })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sem-ha" id="sem-ha" />
                <Label htmlFor="sem-ha">sem/ha</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sem-m" id="sem-m" />
                <Label htmlFor="sem-m">sem/m</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Distancia entre surcos */}
          <Select onValueChange={(value) => setForm({marca: form.marca, modelo: form.modelo, densidad: form.densidad, distancia: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Distancia entre surcos" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">0.35 mts</SelectItem>
                <SelectItem value="banana">0.45 mts</SelectItem>
                <SelectItem value="blueberry">0.67 mts</SelectItem>
                <SelectItem value="grapes">0.88 mts</SelectItem>
                <SelectItem value="pineapple">1 mts</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Disclaimer */}
          {showDisclaimer() && 
          <div className="relative">
            <FontAwesomeIcon icon={faFileCircleExclamation} className="text-black absolute -left-8 bottom-2" />
            <div className="bg-yellow-400 px-10 py-4 text-sm rounded-xl">
            Recordá que podrás cargar la prescripción en tu monitor vía xx (usb, cable, tarjeta de memoria, etc)
            </div>
          </div>}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'secondary'}>Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled={isInvalid()}>Descargar prescripción</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
