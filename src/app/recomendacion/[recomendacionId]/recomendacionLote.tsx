'use client';

import RecomendacionGeneral from "@/app/recomendacion/[recomendacionId]/general/recomendacionGeneral";
import RecomendacionFenologia from "@/app/recomendacion/[recomendacionId]/fenologia/recomendacionFenologia";
import RecomendacionPerfil from "@/app/recomendacion/[recomendacionId]/perfil/recomendacionPerfil";

export default function RecomendacionLote(props: {selectedSection: 'general' | 'fenologia' | 'perfil' | undefined}) {
  return (
    <>
      {props.selectedSection === 'general' && <RecomendacionGeneral />}
      {props.selectedSection === 'fenologia' && <RecomendacionFenologia />}
      {props.selectedSection === 'perfil' && <RecomendacionPerfil />}
    </>
  )
}