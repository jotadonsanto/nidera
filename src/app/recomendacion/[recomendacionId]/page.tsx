'use client';

import { useState, useEffect } from "react";
import Container from '@/components/layouts/Container';
import LeftBar from '@/components/layouts/LeftBar';
import RightBar from '@/components/layouts/RightBar';
import RecomendacionTopNav from '@/app/recomendacion/[recomendacionId]/recomendacionTopnav';
import RecomendacionSidenav from '@/app/recomendacion/[recomendacionId]/recomendacionSidenav';
import RecomendacionResumen from '@/app/recomendacion/[recomendacionId]/recomendacionResumen';
import RecomendacionLote from '@/app/recomendacion/[recomendacionId]/recomendacionLote';
import { Loading } from '@/components/ui/loading';

import type { Recomendacion } from '@/app/recomendacion/recomendacion';
import { fakeRecomendacion } from '@/app/mockFile';

export default function RecomendacionLotes({ params }: {
  params: { recomendacionId: number };
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Recomendacion>();

  useEffect(()=>{
    // faking API delay
    setTimeout(() => {
      setData(fakeRecomendacion);
      setSection('general');
      setLoading(false);
    }, 1000);
  },[])


  const [view, setView] = useState<string>('summary');
  const changeView = (view: string) => {
    setView(view);
  }

  const [section, setSection] = useState<'general' | 'fenologia' | 'perfil'>();
  const changeSection = (section: 'general' | 'fenologia' | 'perfil') => {
    setSection(section);
  }

  return (
    <Container
      top={
        <RecomendacionTopNav lote={{id: params.recomendacionId}} handleChange={changeView} view={view} loading={loading} />
      }

      left={
        <LeftBar size="sm">
          <RecomendacionSidenav handleChange={changeSection} section={section} disabled={view === 'summary'} />
        </LeftBar>
      }

      right={
        <RightBar>
          { loading ? <Loading  className="self-center"/> :
          view === 'summary' ? <RecomendacionResumen recomendacionId={params.recomendacionId} /> :
            <RecomendacionLote />
          }
        </RightBar>
      }
    />
  );
}
