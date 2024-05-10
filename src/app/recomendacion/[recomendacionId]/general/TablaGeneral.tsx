import { cn } from "@/lib/utils";

const sample = {
  variable: [
    {
      id: 106,
      nombre: 'Nombres Lots Uysi',
      fecha: '24/12/12',
      ambiente: 'high',
      hibrido: 'NSAO234BOWEQ234BKJSD1',
      superficie: '3000 ha',
      indice: '18912',
      bolsas_totales: '87',
      sembrado: true,
    },
    {
      id: 107,
      nombre: 'Lote Sjuyhjolip 76',
      fecha: '24/12/12',
      ambiente: 'mid',
      hibrido: 'NSAO234BOWEQ234BKJSD1',
      superficie: '3000 ha',
      indice: '18912',
      bolsas_totales: '87',
      sembrado: true,
    },
    {
      id: 108,
      nombre: 'Lotes tium 87',
      fecha: '24/12/12',
      ambiente: 'average',
      hibrido: 'NSAO234BOWEQ234BKJSD1',
      superficie: '3000 ha',
      indice: '18912',
      bolsas_totales: '87',
      sembrado: true,
    },
    {
      id: 106,
      nombre: 'Nombres Lots Uysi',
      fecha: '24/12/12',
      ambiente: 'low',
      hibrido: 'NSAO234BOWEQ234BKJSD1',
      superficie: '3000 ha',
      indice: '18912',
      bolsas_totales: '87',
      sembrado: true,
    },
    {
      id: 107,
      nombre: 'Lote Sjuyhjolip 76',
      fecha: '24/12/12',
      ambiente: 'high',
      hibrido: 'NSAO234BOWEQ234BKJSD1',
      superficie: '3000 ha',
      indice: '18912',
      bolsas_totales: '87',
      sembrado: true,
    }
  ],
  fija: [
    {
      id: 106,
      nombre: 'Nombres Lots Uysi',
      fecha: '24/12/12',
      ambiente: 'fixed',
      hibrido: 'NSAO234BOWEQ234BKJSD1',
      superficie: '3000 ha',
      indice: '18912',
      bolsas_totales: '87',
      sembrado: true,
    }
  ]
}

const dictionary = {
  fija: 'Fija',
  variable: 'Variable'
}

export default function AmbientacionGeneral(props: any) {
  const statusIndicator = {
    high: {
      label: 'Alta',
      color: 'bg-green-700'
    },
    mid: {
      label: 'Media',
      color: 'bg-yellow-400'
    },
    low: {
      label: 'Baja',
      color: 'bg-red-500'
    },
    average: {
      label: 'Promedio',
      color: 'bg-gray-400'
    },
    fixed: {
      label: 'Fija',
      color: 'bg-black'
    }
  }
  const AmbienteStatus = (props: { status: keyof typeof statusIndicator }) => (
    <div className="flex gap-2">
      <span className={cn(statusIndicator[props.status as keyof typeof statusIndicator].color, 'rounded-full h-5 w-5')}></span>
      {statusIndicator[props.status as keyof typeof statusIndicator].label}
    </div>
  )

  return (
    <div>
      <div className="flex flex-col text-sm">
        {/* Header of list */}
        <div className="flex bg-gray-50 p-3 rounded-lg">
          <div className="w-[55px] text-center italic self-center"></div>
          <div className="w-[18%] text-center italic self-center">Ambiente</div>
          <div className="w-[16%] text-center italic self-center">Superficie (ha)</div>
          <div className="w-[18%] text-center italic self-center">Indice Ambiental<br/>(kg/ha)</div>
          <div className="w-[23%] text-center italic self-center">Densidad</div>
          <div className="w-[15%] text-center italic self-center">Rendimiento Proyectado<br/>del hibrido (kg/ha)</div>
          <div className="w-[13%] text-center italic self-center">Requerimiento de N<br/>(kg N/Tn grano)</div>
        </div>
        {Object.keys(sample).map((keyName, index) => (
          <div key={index} className="flex rounded-xl overflow-hidden border shadow-md mt-3">
            <div className="w-[45px] flex items-center justify-center bg-yellow-200/80">
              <div className="-rotate-90 text-center">
                {/* @ts-ignore */}
                {dictionary[keyName]}
              </div>
            </div>
            <div className="flex flex-col flex-1">
            {sample[keyName as keyof typeof sample].map((lote: any, id: number) => (
              <div key={id} className="flex p-4 mt-2 border-b">
                <div className="w-[18%] flex justify-center items-center"><AmbienteStatus status={lote.ambiente} /></div>
                <div className="w-[16%] flex justify-center items-center">{lote.fecha}</div>
                <div className="w-[18%] flex justify-center items-center">{lote.indice}</div>
                <div className="w-[23%] flex justify-center items-center">{lote.hibrido}</div>
                <div className="w-[15%] flex justify-center items-center">{lote.superficie}</div>
                <div className="w-[13%] flex justify-center items-center">{lote.bolsas_totales}</div>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}