import Image from "next/image"
import Link from "next/link"
import React from "react"

const navItems = [
  {
    label: "Ratoncito",
    path: "/ratoncito",
    subItems: [
      {
        label: "Escuchar fragmento",
        path: "/ratoncito/arte",
      }]
  },
  {
    label: "Topia la novela",
    path: "/topia",
    subItems: [
      {
        label: "Prólogo",
        path: "/topia/prologo",
      },
      {
        label: "¿Qué personaje serías?",
        path: "/topia/juegos",
      },
      {
        label: "Preguntas",
        path: "/topia/faq",
      }]
  },
]


const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-3 sm:px-4 border-b-2 border-neutral-800 mb-10">
      <Link href="/" className="inline-flex gap-3">
        <Image width={30} height={30} src="/svg/island.svg" />
        <h2 className="text-center text-2xl sm:3xl font-semibold text-[#333]">
          Editorial Topia
        </h2>
      </Link>
      <nav>
        <ul className="flex gap-2 sm:gap-4">
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link className="w-max block" href={item.path}>
                {item.label}
              </Link>
              {item.subItems && (
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.path}>
                      <Link className="block px-4 py-2" href={subItem.path}>
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
