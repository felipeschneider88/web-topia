import MercadoPagoLink from "@/components/links/MercadoPagoLink";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link'
import ContactLinkWpp from "@/components/links/ContactLinkWpp";

export default function Home() {
  return (
    <div>
      <main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-7 mb-10">
        <div className="flex flex-col gap-1 text-[#333]">
          <h1 className="text-3xl sm:max-w-sm font-semibold mb-3">"Ratoncito no puede dormir"</h1>
          <p className="max-w-lg text-lg mb-5">"Ratoncito no puede dormir" es un cuento pensando para peques de 0 a 8 años para leer a la hora de irse a dormir.
            Busca inducir el sueño a través de un relato apacible y dulce, con imágenes sin estridencias y cargadas de ternura.
            Es una aventura de conexión entre el adulto lector y el niño, un ratito de presencia y encuentro que ambos guardarán en la memoria del corazón.  💜🐭🥰</p>
          <div className="flex gap-3">
            <ContactLinkWpp />
            <Link
              href="/ratoncito/arte"
              className='inline-flex items-center gap-3 py-1 px-3 rounded bg-[#41ffa3]'
            >
              <span className='font-semibold text-black'>
                Escuchar fragmento
              </span>
            </Link>
          </div>
        </div>
        <Image src="/images/ratoncito.png" width={300} height={300} alt="Portada Ratoncito no puede dormir" />
      </main>
      <section className="px-7">
        <Analytics />
      </section>
    </div>
  )
}
