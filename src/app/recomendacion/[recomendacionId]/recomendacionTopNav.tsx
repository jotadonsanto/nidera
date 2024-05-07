import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt  } from '@fortawesome/free-solid-svg-icons';

export default function RecomendacionTopNav(props: any) {
  return (
    <div className="border-b h-24 flex px-10">
      {props.loading ? <Loading  className="self-center w-full"/> :
      <>
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-lg font-bold leading-none-6 ">Fortezza SA {props.lote.id}</h3>
        <h4 className="text-sm font-semibold text-gray-500 leading-none">Nombre de la propiedad</h4>
      </div>
      <div className="flex-1 self-end">
        <Tabs value={props.view} className="flex justify-center">
          <TabsList>
            <TabsTrigger className="mx-4" onClick={() => props.handleChange('summary')} value="summary">
              Resumen
            </TabsTrigger>
            <TabsTrigger className="mx-4" onClick={() => props.handleChange('lote1')} value="lote1">
              Lote 2
            </TabsTrigger>
            <TabsTrigger className="mx-4" onClick={() => props.handleChange('lote2')} value="lote2">
              Lote con un nonbre re larguirucho
            </TabsTrigger>
            <TabsTrigger className="mx-4" onClick={() => props.handleChange('lote3')} value="lote3">
              Lote 4
            </TabsTrigger>
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