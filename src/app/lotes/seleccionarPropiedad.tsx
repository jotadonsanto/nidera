import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem} from '@/components/ui/dropdown-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical  } from '@fortawesome/free-solid-svg-icons';
import { Loading } from '@/components/ui/loading';
import CrearPropiedades from '@/app/propiedades/crearPropiedades';

export default function SeleccionarPropiedad(props: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [propiedades, setPropiedades] = useState<any>([]);
  useEffect(()=>{
    // faking API delay
    setTimeout(() => {
      setPropiedades([{ id: '1234' }, { id: '2345' }, { id: '3456' }, { id: '4567' }]);
      setLoading(false);
    }, 1000);
  },[])

  const [selected, setSelected] = useState<string | null>(null);
  const handleCheck = (value:boolean, id: string) => {
    if (selected === id) {
      setSelected(null);
      props.handleChange('propiedad', '');
    } else {
      setSelected(id);
      props.handleChange('propiedad', id);
    }
  }

  const isSelected = (id: string) => selected === id;

  const showDetails = (id: string) => isSelected(id) || selected === null;

  const PropiedadCard = (props: any) => (
    <div
      data-state={isSelected(props.propiedad.id) ? 'open' : 'closed'}
      key={props.propiedad.id}
      className={
        "data-[state=open]:animate-in data-[state=open]:fade-in-10 " +
        "rounded-lg shadow-sm hover:bg-gray-50/50 border p-4 " +
        (isSelected(props.propiedad.id) ? "border-green-600 border-2" : "border-gray-100")}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-bold">Nombre de la propiedad</p>
          {showDetails(props.propiedad.id) &&
            <>
              <p className="text-sm text-gray-500">5 Lotes</p>
              <p className="text-sm text-gray-500">134 ha</p>
            </>
          }
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size={'icon'}>
                <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Editar (modal create/edit propiedad)
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">
                  Borrar
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Checkbox
            className="ml-2"
            checked={isSelected(props.propiedad.id)}
            onCheckedChange={(value) => handleCheck(value as boolean, props.propiedad.id)} />
        </div>
      </div>
    </div>
  )

  return (
    <div className="border-b flex flex-col min-h-[200px]" style={{ flex: '1 1 0' }}>
      <div className="flex justify-between items-center mb-4">
        <Label>Seleccionar Propiedad {propiedades.length > 0 && `[${propiedades.length}]`}</Label>
        <Button>
          Crear Propiedad
        </Button>
        <CrearPropiedades />
      </div>
      { loading ? <Loading  className="self-center"/> :
        <div className="flex flex-col gap-2 overflow-scroll min-h-0">
          {
            propiedades.map((propiedad: { id: string }) => (
              <PropiedadCard propiedad={propiedad} key={propiedad.id} />
            ))
          }
        </div>
      }
    </div>
  )
}