import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt  } from '@fortawesome/free-solid-svg-icons';

import type { Lote } from '@/app/recomendacion/recomendacion';

export default function RecomendacionTopNav(props: any) {
  return (
    <div className="border-b h-24 flex px-10 gap-4">
      {props.loading ? <Loading  className="self-center w-full"/> :
      <>
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-lg font-bold leading-none-6 ">Fortezza SA</h3>
        <h4 className="text-sm font-semibold text-gray-500 leading-none">Nombre de la propiedad</h4>
      </div>
      <div className="flex-1 flex mx-auto self-end overflow-scroll">
        <Tabs value={props.selectedView.toString()} className="mx-auto">
          <TabsList>
            { props.views.length > 1 &&
              <TabsTrigger className="mx-4" onClick={() => props.handleChange('summary')} value="summary">
                Resumen
              </TabsTrigger>
            }
            { props.views.map((view: Lote) => (
              <TabsTrigger key={view.id} className="mx-4" onClick={() => props.handleChange(view.id)} value={view.id.toString()}>
                {view.nombre}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center justify-end ">
        <Button variant={'secondary'} className="flex justify-between" >
          <FontAwesomeIcon icon={faShareAlt} className="text-primary mr-2" />
          Compartir Recomendacion
        </Button>
      </div>
      </>
      }
    </div>
  )
}