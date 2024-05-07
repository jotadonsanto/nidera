import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faEdit  } from '@fortawesome/free-solid-svg-icons';

const sample = {
  manejo: {
    fecha: '20/11/2034',
    indice: 'por',
    hibrido: 'escandalo',
  },
  precios: {
    fecha: '20/11/2034',
    indice: '20/11/2034',
    hibrido: '20/11/2034',
  },
  ambiente: {
    fecha: '20/11/2034',
    indice: '20/11/2034',
    hibrido: '20/11/2034',
    fechas: '20/11/2034',
    indise: '20/11/2034',
    hibpido: '20/11/2034',
  },
}

export default function InformacionGeneral(props: any) {
  return (
    <div className={cn(props.className, 'rounded-xl border shadow-md flex flex-col')}>
      <div className="p-8 flex flex-col gap-3 overflow-scroll">
        {Object.keys(sample).map((key, index) => (
          <div key={index}>
            <h5 className="italic text-gray-400 mb-3">{key}</h5>
            {Object.keys(sample[key as keyof typeof sample]).map((keyName, keyIndex) => (
              <div className="flex gap-3 items-center" key={keyIndex}>
                <FontAwesomeIcon icon={faCakeCandles} className="text-primary" />
                <span className="text-xs">{keyName}</span>
                {/* @ts-ignore */}
                <span className="text-xs font-bold rounded bg-gray-50 p-1">{sample[key][keyName]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr />
      <div className="p-8">
        <Button className="flex gap-2">
          <FontAwesomeIcon icon={faEdit} />
          Editar información
        </Button>
      </div>
    </div>
  )
}