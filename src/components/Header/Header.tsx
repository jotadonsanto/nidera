"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-regular-svg-icons';

import { HeaderProfile } from "@/components/Header/HeaderProfile";

export function Header() {
  return (
    <header className="bg-neutral-050 w-full flex flex-row justify-between items-center px-10 h-14">
      <div className="flex gap-10">
        <Image
          src="/logo.svg"
          width={71}
          height={40}
          alt="Picture of the author" />
        <Button variant="link">&#60; Volver a Experiencia Nidera</Button>
      </div>
      <div className="self-end">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="soraya">Dashboard</TabsTrigger>
            <TabsTrigger value="account">Mis Recomendaciones</TabsTrigger>
            <TabsTrigger value="password">Mis Lotes</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <HeaderProfile name="Edgardo Gonzalez" />
    </header>
  );
}
