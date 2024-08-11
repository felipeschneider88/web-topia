import Image from "next/image";
import { Analytics } from '@vercel/analytics/react';
import MicrosoftClarity from "./msclarity";
import Link from 'next/link'
import ContactLinkWpp from "@/components/links/ContactLinkWpp";

export default function Home() {
  return (
    <div>
      <MicrosoftClarity />
      <main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-7 mb-10">
        <div className="flex flex-col  gap-1 ">

          <Link href="/ratoncito" className="inline-flex gap-3">
            <Image src="/images/ratoncito.png" width={300} height={300} alt="Portada de Topia" />
          </Link>
          <ContactLinkWpp />
        </div>
        <Link href="/topia" className="inline-flex gap-3">
          <Image src="/images/book-cover.webp" width={300} height={300} alt="Portada de Topia" />
        </Link>

      </main>
      <section className="px-7">
        <Analytics />
      </section>
    </div>
  )
}
