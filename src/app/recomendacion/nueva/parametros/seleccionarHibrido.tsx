"use client"

import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import type { Lote } from '@/components/recomendacion/recomendacion';
import { Badge } from "@/components/ui/badge";

export default function SeleccionarHibrido(props: any) {
  const lotes: Lote[] = [{
    id: 1,
    nombre: 'Nombre del lote',
    riego: true,
    estrategia: 'agresiva',
    fecha: '',
    hibrido: 'AJKH8AS618A',
  },
  {
    id: 2,
    nombre: 'Nombre del lote',
    riego: true,
    estrategia: 'agresiva',
    fecha: '',
    hibrido: 'AJKH8AS618A',
  },
  {
    id: 3,
    nombre: 'Nombre del lote',
    riego: true,
    estrategia: 'agresiva',
    fecha: '',
    hibrido: 'AJKH8AS618A',
  }];

  const [selected, setSelected] = useState<Lote[]>([]);

  const CultivoCard = (props: { lote: Lote }) => (
    <div
      className={"flex items-stretch justify-between flex-1 rounded-lg shadow-gray-200 shadow " + (selected.includes(props.lote) ? 'border-l-8 border-primary' : '')}>
      <div className="flex flex-1 items-center gap-8 pl-4 py-2">
        <Image
          src="/map.jpg"
          width={195}
          height={130}
          alt={props.lote.nombre} />
        <div className="flex flex-col gap-2">
          <span className="font-semibold">{props.lote.nombre}</span>
          <div className="flex items-center gap-2">
            <Checkbox id="check" squared />
            <label
              htmlFor="check"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Riego
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center px-8 border-x">
        <ToggleGroup
          type="single"
          defaultValue="center"
          disabled={props.lote.id === 2}>
          <ToggleGroupItem value="a">Agresiva</ToggleGroupItem>
          <ToggleGroupItem value="b">Moderada</ToggleGroupItem>
          <ToggleGroupItem value="c">Conservadora</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-1 items-center justify-stretch gap-2 pl-5">
        <div className="flex flex-1 gap-2">
          <Select onValueChange={() => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Fecha de siembra" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Óptima</SelectLabel>
                <SelectItem value="apple">Óptima/Temprana</SelectItem>
                <SelectItem value="banana">Óptima/Tardía</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={() => {}}>
            <SelectTrigger>
              <SelectValue placeholder="Híbrido" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Híbrido óptimo</SelectLabel>
                <SelectItem value="a">
                  <div>Hibrido 1</div>
                </SelectItem>
                <SelectItem value="b" className="flex justify-between w-full">
                  <span className="mr-auto">Hibrido 1</span>
                  <Badge className="ml-auto">Comprado</Badge>
                </SelectItem>
                <SelectItem value="c">
                  <div>Hibrido 1</div>
                </SelectItem>
                <SelectItem value="d">
                  <div>Hibrido 1</div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Checkbox id="checkbox" squared className="mb-auto mt-3 mr-3" />
      </div>
    </div>
  )

  return (
    <div className="mt-9 mb-8">
      <div className="flex justify-between items-center">
        <Label>Seleccionar híbrido y perfil productivo</Label>
        <Button>Agregar Lote</Button>
      </div>
      <div className="flex mt-9 mb-2">
        <div className="flex-1">
          <Label className="pl-[250px]">Información general</Label>
        </div>
        <div className="flex-1">
          <Label className="pl-[20px]">Estrategia Productiva</Label>
        </div>
        <div className="flex-1">
          <Label className="pl-[40px]">Fecha de siembra</Label>
          <Label className="pl-[150px]">Híbrido</Label>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {lotes.map((lote) => (
          <CultivoCard lote={lote} key={lote.id.toString()} />
        ))}
      </div>
    </div>
  );
}
