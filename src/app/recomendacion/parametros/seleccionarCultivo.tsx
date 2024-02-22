"use client"

import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SeleccionarCultivo(props: any) {
  const [selected, setSelected] = useState<string>()

  const handleSelected = (field: string, value: string) => {
    setSelected(value);
    props.handleChange(field, value);
  }

  const CultivoCard = (props: { cultivo: string }) => (
    <div
      className={"flex items-center justify-between flex-1 rounded-lg pl-10 py-6 pr-5 shadow-gray-200 shadow-2xl " + (selected === props.cultivo ? 'border-l-8 border-primary' : '')}>
      <div className="flex gap-3 items-center">
        {props.cultivo === 'maíz' &&
        <Image
          src={`/${props.cultivo}.svg`}
          width={40}
          height={64}
          alt="Picture of the author" />
        }
        {props.cultivo === 'girasol' &&
          <Image
            src={`/${props.cultivo}.svg`}
            width={44}
            height={43}
            alt="Picture of the author" />
        }
        <span className=" text-4xl font-semibold">{props.cultivo.charAt(0).toUpperCase() + props.cultivo.slice(1)}</span>
      </div>
      <Checkbox
        className="ml-2"
        checked={selected === props.cultivo}
        onCheckedChange={() => handleSelected('cultivo', props.cultivo)} />
    </div>
  )

  return (
    <div className="mt-9 mb-6">
      <Label>Seleccionar cultivo</Label>
      <div className="flex gap-9 mt-9">
        <CultivoCard cultivo="maíz" />
        <CultivoCard cultivo="girasol" />
      </div>
    </div>
  );
}
