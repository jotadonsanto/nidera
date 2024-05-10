import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faCalendar, faSunPlantWilt, faSeedling, faLemon, faMedal, faEdit, faTruck, faWater, faTruckField  } from '@fortawesome/free-solid-svg-icons';

const sample = {
  manejo: {
    fecha: '20/11/2034',
    indice: 'xxx',
    hibrido: 'xxxx',
    bolsas_totales: 'xxxx',
    coeficiente: 'xxxx',
  },
  precio: {
    precio_grano: 'xxxxxxxx',
    precio_bolsa: 'xxxxxxxx',
    gastos_comercializacion: 'xxxxxxxx',
  },
  ambiente: {
    profundidad: 'xxxxxxxx',
    textura: 'xxxxxxxx',
    ano: 'xxxxxxxx',
    agua_util: 'xxxxxxxx',
  },
};

const items = {
  fecha: {
    label: 'Fecha de siembra óptima',
    icon: faCalendar,
  },
  indice: {
    label: 'Indice Ambiental (kg/ha)',
    icon: faSunPlantWilt,
  },
  hibrido: {
    label: 'Híbrido',
    icon: faSeedling,
  },
  bolsas_totales: {
    label: 'Bolsas Totales - Variable (80.0000 sem/bolsa)',
    icon: faSeedling,
  },
  coeficiente: {
    label: 'Coeficiente de logro (%)',
    icon: faMedal,
  },
  precio_grano: {
    label: 'Precio grano (USD/Tn)',
    icon: faLemon,
  },
  precio_bolsa: {
    label: 'Precio bolsa (USD/Bolsa)',
    icon: faSeedling,
  },
  gastos_comercializacion: {
    label: 'Gastos de comercialización y flete (%)',
    icon: faTruck,
  },
  profundidad: {
    label: 'Profundidad (cm)',
    icon: faWater,
  },
  textura: {
    label: 'Textura de suelo',
    icon: faTruckField,
  },
  ano: {
    label: 'Año',
    icon: faCalendar,
  },
  agua_util: {
    label: 'Agua útil a la siembra (%)',
    icon: faWater,
  },
  ambiente: {
    label: 'Ambiente',
  },
  precio: {
    label: 'Precio',
  },
  manejo: {
    label: 'Manejo',
  }
}

export default function InformacionGeneral(props: any) {
  return (
    <div className={cn(props.className, 'rounded-xl border shadow-md flex flex-col')}>
      <div className="p-8 flex flex-col gap-3 overflow-scroll">
        {Object.keys(sample).map((key, index) => (
          <div key={index}>
            {/* @ts-ignore */}
            <h5 className="italic text-gray-400 mb-3">{items[key].label}</h5>
            {Object.keys(sample[key as keyof typeof sample]).map((keyName, keyIndex) => (
              <div className="flex gap-3 items-center" key={keyIndex}>
                {/* @ts-ignore */}
                <FontAwesomeIcon icon={items[keyName].icon} className="text-primary" />
                {/* @ts-ignore */}
                <span className="text-sm">{items[keyName].label}</span>
                {/* @ts-ignore */}
                <span className="text-sm font-bold rounded bg-gray-50 p-1">{sample[key][keyName]}</span>
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