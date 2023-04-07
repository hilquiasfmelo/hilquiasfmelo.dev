import { useState } from 'react'

import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
// import { BsPerson } from 'react-icons/bs'

export function SideNav() {
  const [nav, setNav] = useState(false)

  function handleNav() {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col  justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Início</span>
          </a>

          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Trabalho</span>
          </a>

          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projetos</span>
          </a>

          {/* <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Sobre</span>
          </a> */}

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contato</span>
          </a>
        </div>
      ) : (
        ''
      )}

      {/* Navegação lateral  */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col ">
          <a
            href="#main"
            className="rounded-full shadow-lg group bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <div className="hidden group-hover:block absolute ml-12 top-3 transition ease-in duration-75">
              <span className="bg-[#001b5e] text-gray-100 px-3 py-1 rounded-lg font-semibold">
                Início
              </span>
            </div>
          </a>

          <a
            href="#work"
            className="rounded-full shadow-lg group bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <div className="hidden group-hover:block absolute ml-12 top-3 transition ease-in duration-75">
              <span className="bg-[#001b5e] text-gray-100 px-3 py-1 rounded-lg font-semibold">
                Experiências
              </span>
            </div>
          </a>

          <a
            href="#projects"
            className="rounded-full shadow-lg group bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <div className="hidden group-hover:block absolute ml-12 top-3 transition ease-in duration-75">
              <span className="bg-[#001b5e] text-gray-100 px-3 py-1 rounded-lg font-semibold">
                Projetos
              </span>
            </div>
          </a>

          {/* <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
          </a> */}

          <a
            href="#contact"
            className="rounded-full shadow-lg group bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <div className="hidden group-hover:block absolute ml-12 top-3 transition ease-in duration-75">
              <span className="bg-[#001b5e] text-gray-100 px-3 py-1 rounded-lg font-semibold">
                Contato
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
