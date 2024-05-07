'use client';

import InformacionGeneral from "@/app/recomendacion/[recomendacionId]/general/InformacionGeneral";
import AmbientacionGeneral from "@/app/recomendacion/[recomendacionId]/general/AmbientacionGeneral";
import TablaGeneral from "@/app/recomendacion/[recomendacionId]/general/TablaGeneral";

export default function RecomendacionLote() {
  return (
    <div className="flex flex-col">
      <div className="p-10 flex gap-8">
        <InformacionGeneral className="w-[380px] h-[500px]" />
        <AmbientacionGeneral className="flex-1" />
      </div>

      <hr />

      <div className="p-10">
        <TablaGeneral className="flex-1" />
      </div>
    </div>
  )
}