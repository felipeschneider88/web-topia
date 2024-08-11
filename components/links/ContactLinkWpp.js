import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactLinkWpp = () => {
  return (
    <Link
      href="https://wa.me/59899000631?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20el%20libro%20del%20ratoncito"
      className='inline-flex items-center gap-3 py-1 px-3 rounded bg-[#f06292]'
    >
      <Image src="/svg/wpp.svg" height={20} width={30} alt="" />
      <span className='font-semibold text-white'>
        Contacto
      </span>
    </Link>
  )
}


export default ContactLinkWpp