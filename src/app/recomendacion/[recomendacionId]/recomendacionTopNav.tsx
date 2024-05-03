import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt  } from '@fortawesome/free-solid-svg-icons';

export default function RecomendacionTopNav(props: any) {
  return (
    <div className="border-b h-24 flex px-10">
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-lg font-bold leading-none-6 ">Fortezza SA {props.lote.id}</h3>
        <h4 className="text-sm font-semibold text-gray-500 leading-none">Nombre de la propiedad</h4>
      </div>
      <div className="flex-1 self-end">
        <Tabs value={'/'} className="flex justify-center">
          <TabsList>
            <TabsTrigger className="mx-4" value="/">
              Resumen
            </TabsTrigger>
            <TabsTrigger className="mx-4" value="/tablero">
              Lote 2
            </TabsTrigger>
            <TabsTrigger className="mx-4" value="/lotes">
              Lote con un nonbre re larguirucho
            </TabsTrigger>
            <TabsTrigger className="mx-4" value="/lotes">
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
    </div>
  )
}