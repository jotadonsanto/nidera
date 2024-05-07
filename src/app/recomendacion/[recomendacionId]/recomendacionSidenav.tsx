export default function RecomendacionSidenav(props: {handleChange: any, section: 'general' | 'fenologia' | 'perfil' | undefined, disabled: boolean}) {
  return (
    <div className="border-r h-full flex flex-col bg-gray-050 !p-0">
      <div 
        className="text-sm leading-5 px-6 py-8 border-b cursor-pointer hover:bg-gray-100  data-[state=active]:font-bold data-[state=active]:bg-primary transition-all" 
        data-state={!props.disabled && props.section === 'general' ? 'active' : 'inactive'}
        onClick={() => props.handleChange('general')}>
        Datos Generales
      </div>
      <div 
        className="text-sm leading-5 px-6 py-8 border-b cursor-pointer hover:bg-gray-100  data-[state=active]:font-bold data-[state=active]:bg-primary transition-all" 
        data-state={!props.disabled && props.section === 'fenologia' ? 'active' : 'inactive'}
        onClick={() => props.handleChange('fenologia')}>
        Fenología y Condiciones<br/>Climáticas
      </div>
      <div 
        className="text-sm leading-5 px-6 py-8 border-b cursor-pointer hover:bg-gray-100  data-[state=active]:font-bold data-[state=active]:bg-primary transition-all" 
        data-state={!props.disabled && props.section === 'perfil' ? 'active' : 'inactive'}
        onClick={() => props.handleChange('perfil')}>
        Perfil de Producto
      </div>
    </div>
  )
}