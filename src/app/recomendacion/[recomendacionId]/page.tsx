'use client';

import { useState, useEffect } from "react";
import Container from '@/components/layouts/Container';
import LeftBar from '@/components/layouts/LeftBar';
import RightBar from '@/components/layouts/RightBar';
import RecomendacionTopNav from '@/app/recomendacion/[recomendacionId]/recomendacionTopNav';
import RecomendacionSidenav from '@/app/recomendacion/[recomendacionId]/recomendacionSidenav';
import RecomendacionResumen from '@/app/recomendacion/[recomendacionId]/recomendacionResumen';
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
      setLoading(false);
    }, 1000);
  },[])

  const [view, setView] = useState<string>('summary');
  const changeContent = (chosenView: any) => {
    setView(chosenView);
  };

  return (
    <Container
      top={
        loading ? <Loading  className="self-center"/> :
        <RecomendacionTopNav lote={{id: params.recomendacionId}} />
      }

      left={
        <LeftBar size="sm">
          { loading ? <Loading  className="self-center"/> :
          <RecomendacionSidenav handleChange={changeContent} /> }
        </LeftBar>
      }

      right={
        <RightBar>
          { loading ? <Loading  className="self-center"/> :
            <RecomendacionResumen recomendacionId={params.recomendacionId} />
          }
        </RightBar>
      }
    />
  );
}
