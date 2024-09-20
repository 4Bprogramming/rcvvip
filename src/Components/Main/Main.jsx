"use client";
import React, {  useTransition, useState } from "react";
import Image from "next/image";
import mainBanner from "../../../public/resources/mainImage.jpg";
import nuestroEstudio from "../../../public/resources/nuestro.jpg";
import SendEmail from "../Services/SendEmail";
import whatsapp from "@/assets/whatsapp.svg"
import '../../styles/globals.css'
import TabButton from "./TabButton";
import Cantidad from "../Cantidad/Cantidad";
// import Local from "../Local/local";


const TAB_DATA = [
  {
    title: "Misión",
    id: "mision",
    content: (
      <ul className="list-disc pl-2">
        <li>Satisfacer de forma legal, transparente, técnica y humana, las necesidades requeridas por los asegurados o tomadores, asumiendo sus riesgos, brindándoles tranquilidad, respuesta, prevención, solidaridad y confianza en la prestación del servicio integral.</li>
      
        
      </ul>
    ),
  },
  {
    title: "Visión",
    id: "vision",
    content: (
      <ul className="list-disc pl-2">
        <li>Desarrollarse como el Emprendimiento de Seguros líder del sector Asegurador Cooperativo Nacional, manteniendo una participación continúa con los Órganos de Participación Ciudadana, sector Público, Privado y Mixto en la Actividad Aseguradora. En permanentes acciones sociales y gremiales, con una activa interacción con la Comunidad.</li>
       
      </ul>
    ),
  },
 
];




function Main() {
  const [tab, setTab] = useState("mision");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <>
      <main className="pt-32" id="home">
        <section className="relative">
          <div className="w-full h-44  overflow-hidden sm:h-56 md:h-72 lg:h-96 xl:h-[30rem]">
            <Image
              src={mainBanner}
              alt="main banner "
              layout="fill"
      objectFit="cover"
      className="opacity-85"
              // style={{ width: "100%", height: "auto", opacity: "85%" }}
              
            />
          </div>
          <article className="absolute top-6 left-2 sm:top-9 md:top-20 lg:left-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(44, 38, 36 , 0.6)' }}>
            <h1 className="text-white max-320:text-3xl text-4xl md:text-7xl lg:text-8xl ">
              <span className="tituli text-dorado">
                Seguros VIP
              </span>{" "}
              2020
            </h1>
            <p className="text-white md:text-4xl md:pt-custom lg:text-4xl ">
              Tu Seguridad Primero
            </p>
          </article>
        </section>
        <section className="flex flex-col items-center" id="nosotros">

          <p>Seguros VIP 2020, Inscritos Autorizados y Avalados por la Superintendencia de la Actividad Aseguradora bajo el Nro.19. Providencia SUDEASEG Nro. SAA-2-5-0209</p>
          {/* <GreenButton  href="/proyectos" text="Proyectos" style="mt-10 mb-10" /> */}
          <br/><br/>

         
          <h2 className=" text-5xl tituli" >Nosotros</h2>
        </section>
        <a href="https://api.whatsapp.com/send?phone=58">
      <Image src={whatsapp} className="btnFlotante" />
      </a>
      
        <section>
          <article className="grid grid-cols-1  md:grid-cols-2 md:mb-14 md:mt-8 md:mr-32">
            <nuestro-estudio-left class="block p-2 md:p-6">
              <Image src={nuestroEstudio} alt="nuestro estudio" />
            </nuestro-estudio-left>
            <nuestro-estudio-right class="block relative p-2 md:p-6">
              {/* <h3 className="text-3xl font-semibold uppercase mb-2">
                Nuestro
                <span className=" text-grey-2 after:content-[''] after:absolute after:bg-custom-green after:h-1 after:w-16 after:top-10 after:left-2 md:after:top-[60px] md:after:left-[26px]">
                  Estudio
                </span>
              </h3> */}
              <p className="text-grey-1 text-justify">
              Seguros VIP 2020 es un Emprendimiento Venezolano de Responsabilidad Limitada, 
              con visión Corporativa y Humana, especializados en Seguros para Vehículos, 
              en la actualidad específicamente Seguros de Responsabilidad Civil Vehicular (RCV) 
              el cuál es de obligatorio cumplimiento para circular vehículos en todo el territorio 
              nacional según lo establecido en el Articulo 58 de la Ley de Transporte Terrestre
               «Todo vehículo a motor debe estar amparado por una póliza de seguro de responsabilidad 
               civil, para responder suficientemente por los daños que ocasione al Estado o a los y 
               las particulares.»
             </p>
          
             <div className=" space-x-4 flex flex-row justify-around mt-8  my-1 font-semibold ">
            <TabButton
            
              selectTab={() => handleTabChange("mision")}
              active={tab === "mision"}
            >
              {" "}
              Misión{" "}
            </TabButton>
            
           
          
            <TabButton
           
              selectTab={() => handleTabChange("vision")}
              active={tab === "vision"}
            >
              {" "}
              Visión{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
              
              
            </nuestro-estudio-right>
          </article>
          <div style={{ marginRight:"100px", marginLeft:"100px"}}>
          <Cantidad />
          </div>
        </section >
      </main>
      {/* <Local /> */}
      <h2 className="tituli text-5xl  text-center  bg-custom-contact md:pb-8 md:pt-8" id="contacto">Contacto</h2>
      <SendEmail/>
    </>
  );
}

export default Main;  
