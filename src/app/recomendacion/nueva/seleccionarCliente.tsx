import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";

export default function SeleccionarCliente(props: any) {
  return (
    <div className="border-b">
      <Label className="mb-2">Cliente</Label>
      <Select onValueChange={(value) => props.handleChange('cliente', value)}>
        <SelectTrigger>
          <SelectValue placeholder="Seleccionar Cliente" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Fortezza SA</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}