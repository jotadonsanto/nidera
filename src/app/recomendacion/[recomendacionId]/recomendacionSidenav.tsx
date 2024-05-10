import { cn } from "@/lib/utils"

export default function RecomendacionSidenav(props: {handleChange: any, selectedSection: 'general' | 'fenologia' | 'perfil' | undefined, disabled: boolean}) {
  return (
    <div className="border-r h-full flex flex-col bg-gray-050 !p-0">
      <div
        className={cn(
          "text-sm leading-5 px-6 py-8 border-b bg-gray-50 data-[state=active]:font-bold data-[state=active]:bg-primary transition-all",
          !props.disabled && "hover:bg-gray-100 cursor-pointer bg-transparent"
        )}
        data-state={!props.disabled && props.selectedSection === 'general' ? 'active' : 'inactive'}
        onClick={() => props.handleChange('general')}>
        Datos Generales
      </div>
      <div
        className={cn(
          "text-sm leading-5 px-6 py-8 border-b bg-gray-50  data-[state=active]:font-bold data-[state=active]:bg-primary transition-all",
          !props.disabled && "hover:bg-gray-100 cursor-pointer bg-transparent"
        )}
        data-state={!props.disabled && props.selectedSection === 'fenologia' ? 'active' : 'inactive'}
        onClick={() => props.handleChange('fenologia')}>
        Fenología y Condiciones<br/>Climáticas
      </div>
      <div
        className={cn(
          "text-sm leading-5 px-6 py-8 border-b bg-gray-50  data-[state=active]:font-bold data-[state=active]:bg-primary transition-all",
          !props.disabled && "hover:bg-gray-100 cursor-pointer bg-transparent"
        )}
        data-state={!props.disabled && props.selectedSection === 'perfil' ? 'active' : 'inactive'}
        onClick={() => props.handleChange('perfil')}>
        Perfil de Producto
      </div>
    </div>
  )
}