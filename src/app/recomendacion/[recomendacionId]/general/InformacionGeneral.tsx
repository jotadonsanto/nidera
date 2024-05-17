import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faSunPlantWilt, faSeedling, faLemon, faMedal, faTruck, faWater, faTruckField  } from '@fortawesome/free-solid-svg-icons';
import EditarInformacionGeneral from "@/app/recomendacion/[recomendacionId]/general/editarInformacionGeneral";

const sample = {
  manejo: {
    fecha: '20/11/2034',
    indice: 9000,
    hibrido: 'BNASUULASJJ82 JAS23',
    bolsas_totales: 20,
    coeficiente: 93,
  },
  precio: {
    precio_grano: 190,
    precio_bolsa: 230,
    gastos_comercializacion: 20,
  },
  ambiente: {
    profundidad: 100,
    textura: 'Franco',
    ano: 2023,
    agua_util: '75',
  },
};

const items = {
  fecha: {
    label: 'Fecha de siembra óptima',
    icon: faCalendar,
    type: 'datepicker',
  },
  indice: {
    label: 'Indice Ambiental (kg/ha)',
    icon: faSunPlantWilt,
    type: 'number',
  },
  hibrido: {
    label: 'Híbrido',
    icon: faSeedling,
  },
  bolsas_totales: {
    label: 'Bolsas Totales - Variable (80.0000 sem/bolsa)',
    icon: faSeedling,
    type: 'number',
  },
  coeficiente: {
    label: 'Coeficiente de logro (%)',
    icon: faMedal,
    type: 'number',
  },
  precio_grano: {
    label: 'Precio grano (USD/Tn)',
    icon: faLemon,
    type: 'number',
  },
  precio_bolsa: {
    label: 'Precio bolsa (USD/Bolsa)',
    icon: faSeedling,
    type: 'number',
  },
  gastos_comercializacion: {
    label: 'Gastos de comercialización y flete (%)',
    icon: faTruck,
    type: 'number',
  },
  profundidad: {
    label: 'Profundidad (cm)',
    icon: faWater,
    type: 'number',
  },
  textura: {
    label: 'Textura de suelo',
    icon: faTruckField,
    type: 'select',
  },
  ano: {
    label: 'Año',
    icon: faCalendar,
    type: 'number',
  },
  agua_util: {
    label: 'Agua útil a la siembra (%)',
    icon: faWater,
    type: 'select',
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
        <EditarInformacionGeneral fields={sample} items={items} />
      </div>
    </div>
  )
}