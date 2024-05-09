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

import type { Recomendacion, Lote } from '@/app/recomendacion/recomendacion';
import { fakeRecomendacion } from '@/app/mockFile';

export default function RecomendacionLotes({ params }: {
  params: { recomendacionId: number };
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Recomendacion>();

  useEffect(()=>{
    setSelectedSection('general');
    // faking API delay
    setTimeout(() => {
      // do request..
      setData(fakeRecomendacion);
      const getLotes: Lote[] | undefined = fakeRecomendacion.lotes;
      setViews(getLotes);
      setSelectedView(getLotes && getLotes.length > 1 ? 'summary' : getLotes![0].id);
      setLoading(false);
    }, 1000);
  },[])

  const [views, setViews] = useState<any[]>();
  const [selectedView, setSelectedView] = useState<number | string>();
  const changeView = (view: number | string) => {
    setSelectedView(view);
  }

  const [selectedSection, setSelectedSection] = useState<'general' | 'fenologia' | 'perfil'>();
  const changeSection = (section: 'general' | 'fenologia' | 'perfil') => {
    setSelectedSection(section);
  }

  return (
    <Container
      top={
        <RecomendacionTopNav handleChange={changeView} selectedView={selectedView} views={views} loading={loading} />
      }

      left={
        <LeftBar size="sm">
          <RecomendacionSidenav handleChange={changeSection} selectedSection={selectedSection} disabled={selectedView === 'summary'} />
        </LeftBar>
      }

      right={
        <RightBar>
          { loading ? <Loading  className="self-center"/> :
            selectedView === 'summary' ? <RecomendacionResumen recomendacionId={params.recomendacionId} /> :
            <RecomendacionLote selectedSection={selectedSection} />
          }
        </RightBar>
      }
    />
  );
}
