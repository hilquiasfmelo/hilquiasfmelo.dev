import checkinImg from '../assets/checkin.png'
import cronosImg from '../assets/cronos.png'
import inventxImg from '../assets/inventx.png'
import pjeImg from '../assets/pje.png'
import { ProjectsItem } from './ProjectsItem'

export function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#001b5e]">
        Projetos
      </h1>
      <div className="space-y-4 pb-8">
        <p className="text-justify">
          Esses projetos foram desenvolvidos utilizando as melhores tecnologias
          como{' '}
          <span className="font-bold text-teal-700 animate-pulse">Node</span>,{' '}
          <span className="font-bold text-teal-700 animate-pulse">React</span>,{' '}
          <span className="font-bold text-teal-700 animate-pulse">Next.js</span>
          ,{' '}
          <span className="font-bold text-teal-700 animate-pulse">
            Typescript
          </span>{' '}
          e outras ferramentas modernas. Eu desenvolvi diversos projetos
          pessoais utilizando essas tecnologias, e tenho orgulho em dizer que
          obtive resultados incríveis com cada um deles.
        </p>
        <p className="text-justify">
          Nessas aplicações utilizei conceitos importantes, tais como,
          autenticação usando o{' '}
          <span className="font-bold text-teal-700 animate-pulse">
            Next-Auth
          </span>
          , para lhe dar bem com Banco de Dados aderir o{' '}
          <span className="font-bold text-teal-700 animate-pulse">Prisma</span>,
          um ORM fantástico para utilizar com{' '}
          <span className="font-bold text-teal-700 animate-pulse">
            Typescript.{' '}
          </span>
          Támbem bibliotecas de estilo como{' '}
          <span className="font-bold text-teal-700 animate-pulse">
            Stitches
          </span>
          ,{' '}
          <span className="font-bold text-teal-700 animate-pulse">
            Styled-Component
          </span>{' '}
          e{' '}
          <span className="font-bold text-teal-700 animate-pulse">
            Tailwindcss
          </span>{' '}
          como tudo que há de melhor nesse ecossistema.
        </p>
        <p className=" text-justify">
          Amo trabalhar com tecnologias modernas e estou sempre buscando
          aprender mais e aprimorar minhas habilidades. Se você está procurando
          por um desenvolvedor dedicado e comprometido para trabalhar em seu
          próximo projeto, não hesite em entrar em contato comigo. Eu adoraria
          ajudá-lo a transformar suas ideias em realidade.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem
          img={pjeImg}
          title="Pje OAB-MA App"
          description="Next.js e Typescript"
        />
        <ProjectsItem
          img={cronosImg}
          title="Cronos App"
          description="Next.js e Typescript"
        />
        <ProjectsItem
          img={inventxImg}
          title="InventX App"
          description="React.js e Typescript"
        />
        <ProjectsItem
          img={checkinImg}
          title="CheckIn App"
          description="React.js e Typescript"
        />
      </div>
    </div>
  )
}
