import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faEdit  } from '@fortawesome/free-solid-svg-icons';

const sample = {
  manejo: {
    fecha: '20/11/2034',
    indice: 'xxxxxx',
    hibrido: 'xxxxxxx',
    bolsas_totales: 'xxxxxxx',
    coeficiente: 'xxxxxxx',
  },
  precio: {
    precio_grano: 'xxxxxxxxxxx',
    precio_bolsa: 'xxxxxxxxxxx',
    gastos_comercializacion: 'xxxxxxxxxxx',
  },
  ambiente: {
    profundidad: 'xxxxxxxxxxx',
    textura: 'xxxxxxxxxxx',
    ano: 'xxxxxxxxxxx',
    agua_util: 'xxxxxxxxxxx',
  },
};

const dictionary = {
  fecha: 'Fecha de siembra óptima',
  indice: 'Indice Ambiental (kg/ha)',
  hibrido: 'Híbrido',
  bolsas_totales: 'Bolsas Totales - Variable (80.0000 sem/bolsa)',
  coeficiente: 'Coeficiente de logro (%)',
  precio_grano: 'Precio grano (USD/Tn)',
  precio_bolsa: 'Precio bolsa (USD/Bolsa)',
  gastos_comercializacion: 'Gastos de comercialización y flete (%)',
  profundidad: 'Profundidad (cm)',
  textura: 'Textura de suelo',
  ano: 'Año',
  agua_util: 'Agua útil a la siembra (%)',
  ambiente: 'Ambiente',
  precio: 'Precio',
  manejo: 'Manejo',

}

export default function InformacionGeneral(props: any) {
  return (
    <div className={cn(props.className, 'rounded-xl border shadow-md flex flex-col')}>
      <div className="p-8 flex flex-col gap-3 overflow-scroll">
        {Object.keys(sample).map((key, index) => (
          <div key={index}>
            {/* @ts-ignore */}
            <h5 className="italic text-gray-400 mb-3">{dictionary[key]}</h5>
            {Object.keys(sample[key as keyof typeof sample]).map((keyName, keyIndex) => (
              <div className="flex gap-3 items-center" key={keyIndex}>
                <FontAwesomeIcon icon={faCakeCandles} className="text-primary" />
                {/* @ts-ignore */}
                <span className="text-xs">{dictionary[keyName]}</span>
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