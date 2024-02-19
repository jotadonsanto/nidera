import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem} from '@/components/ui/dropdown-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical  } from '@fortawesome/free-solid-svg-icons';
import { Badge } from "@/components/ui/badge";

const lotes = [{ id: '1234' }, { id: '2345' }, { id: '3456' }, { id: '4567' }, { id: '5678' },{ id: '12234' }, { id: '23445' }, { id: '34556' }, { id: '45667' }, { id: '567823' },{ id: '1234234' }, { id: '2345435' }, { id: '3464556' }, { id: '4576567' }, { id: '5687678' }];

export default function SeleccionarLotes(props: any) {
  const [state, setState] = useState<string[]>([]);
  const handleAdd = (id: string) => {
    const newState = [...state, id];
    setState(newState);
    props.handleChange('lotes', newState);
  }

  const isSelected = (id: string) => state.includes(id);

  const LotesCard = (props: { lote: { id: string} }) => (
    <div
      data-state={isSelected(props.lote.id) ? 'open' : 'closed'}
      key={props.lote.id}
      className={
        "data-[state=open]:animate-in data-[state=open]:slide-in-from-left-10 data-[state=open]:sm:slide-in-from-left-10 " +
        "rounded-lg shadow-sm hover:bg-gray-50/50 border p-4 " +
        (isSelected(props.lote.id) ? "border-green-600 border-2" : "border-gray-100")}>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-2">
            <p className="text-sm font-bold">
              Nombre del lote
            </p>
            <Badge variant={'destructive'}>Enviado</Badge>
          </div>
          {isSelected(props.lote.id) &&
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
                  Editar (modal create/edit lote)
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">
                  Borrar
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Checkbox
            className="ml-2"
            squared
            checked={isSelected(props.lote.id)}
            onCheckedChange={(value) => handleAdd(props.lote.id)} />
        </div>
      </div>
    </div>
  )

  return (
    <div className="border-b flex flex-col min-h-0" style={{ flex: '2 1 0' }}>
      <div className="flex justify-between items-center mb-4">
        <Label>Seleccionar Lote {`[${lotes.length}]`}</Label>
        <Button>
          Crear Lote
        </Button>
      </div>
      <div className="flex flex-col gap-2 overflow-scroll min-h-0">
        {
          lotes.map((lote: { id: string }) => (
            <LotesCard lote={lote} key={lote.id} />
          ))
        }
      </div>
    </div>
  )
}