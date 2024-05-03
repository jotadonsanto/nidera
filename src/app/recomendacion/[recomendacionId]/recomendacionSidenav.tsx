'use client';

import { useState } from "react";

export default function RecomendacionSidenav(props: any) {
  const [active, setActive] = useState<string>('datos');

  return (
    <div className="border-r h-full flex flex-col bg-gray-050 !p-0">
      <div 
        className="text-sm leading-5 px-6 py-8 border-b cursor-pointer hover:bg-gray-100  data-[state=active]:font-bold data-[state=active]:bg-primary transition-all" 
        data-state={active === 'datos' ? 'active' : 'inactive'}>
        Datos Generales
      </div>
      <div 
        className="text-sm leading-5 px-6 py-8 border-b cursor-pointer hover:bg-gray-100  data-[state=active]:font-bold data-[state=active]:bg-primary transition-all" 
        data-state={active === 'fenologia' ? 'active' : 'inactive'}>
        Fenología y Condiciones<br/>Climáticas
      </div>
      <div 
        className="text-sm leading-5 px-6 py-8 border-b cursor-pointer hover:bg-gray-100  data-[state=active]:font-bold data-[state=active]:bg-primary transition-all" 
        data-state={active === 'perfil' ? 'active' : 'inactive'}>
        Perfil de Producto
      </div>
    </div>
  )
}