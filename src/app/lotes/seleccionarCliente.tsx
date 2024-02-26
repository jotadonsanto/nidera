import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Input } from "@/components/ui/input";

export default function SeleccionarCliente(props: any) {
  return (
    <div className="border-b">
      <Label className="mb-2">Seleccionar Cliente</Label>
      <Input placeholder="Buscar Razon Social (cliente)" onInput={(value) => props.handleChange('cliente', value)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-primary" />
      </Input>
    </div>
  )
}