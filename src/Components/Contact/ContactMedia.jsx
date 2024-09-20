import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";

function ContactMedia() {
  return ( 
    <media-container class=" flex flex-col gap-y-3 md:col-span-5 lg:col-span-4">
      <contact-us class="flex flex-col items-start ml-4 w-full ">
        <h4 class=" text-2xl font-semibold text-grey-1">Contáctanos</h4>
        <p>Correo: <Link href={"mailto:info@estudiomartinbajda.com.ar"}>segurosvip2020@gmail.com</Link></p>
        <p>Teléfono: <span class="text-grey-1">+58 424-2817056</span></p>
        <Link className='relative underline underline-offset-2 hover:text-golden transition-all duration-700 group hover:ml-2' href={"https://www.instagram.com/rcvvip2020/?hl=es"} target='blank'>
        Visitá Nuestro Instagram: 
        <FaInstagram className="text-green-500 h-6 w-6 cursor-pointer absolute top-0 -right-8 group-hover:text-black   transition-all duration-700" />
        </Link>
      </contact-us>
      <find-us class="flex flex-col items-start ml-4  w-full">
        <h4 class=" text-2xl font-semibold text-grey-1">Encuéntranos</h4>
        <p>C.C. Milenium Mall</p>
        <p>los dos caminos.</p>
        
      </find-us>
    </media-container>
  )
}

export default ContactMedia
