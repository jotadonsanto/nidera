"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { HeaderProfile } from "@/components/header/headerProfile";

export default function Header() {

  const url = `/${usePathname().split('/')[1]}`;

  return (
    <header className="bg-neutral-050 w-full flex flex-row justify-between items-center shrink-0 px-10 h-14">
      <div className="flex gap-10">
        <Image
          src="/logo.svg"
          width={82}
          height={47}
          alt="Asista" />
        {url.includes('/recomendacion') &&
          <Button variant="link">
            <Link href="/tablero">&#60; Volver a Mis Recomendaciones</Link>
          </Button>
        }
      </div>
      {!url.includes('/recomendacion') &&
        <div className="self-end">
          <Tabs value={url} className="w-[400px]">
            <TabsList>
              <Link href="/">
                <TabsTrigger value="/">
                  Dashboard
                </TabsTrigger>
              </Link>
              <Link href="/tablero">
                <TabsTrigger value="/tablero">
                  Mis Recomendaciones
                </TabsTrigger>
              </Link>
              <Link href="/lotes">
                <TabsTrigger value="/lotes">
                  Mis Lotes
                </TabsTrigger>
              </Link>
            </TabsList>
          </Tabs>
        </div>
      }
      <HeaderProfile name="Edgardo Gonzalez" />
    </header>
  );
}
