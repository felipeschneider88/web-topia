import Image from "next/image";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div>
      <main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-7 mb-10">
        <div className="flex flex-col gap-1 text-[#333]">
          <h1 className="text-3xl sm:max-w-sm font-semibold mb-3">"Ratoncito no puede dormir"</h1>
          <p className="max-w-lg text-lg mb-5">Había una vez un ratoncito de color gris, que tenía una cola larga (muy larga)
            con la que se rascaba la nariz...
          </p>
        </div>
        <div className="flex flex-col gap-1 text-[#333]">
          <Image src="/images/ratonleyendo.png" width={300} height={300} alt="Ratoncito leyendo" />
          <audio controls>
            <source src="/audio/intro.ogg" type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </main>
      <section className="px-7">

      </section>
    </div>
  )
}
