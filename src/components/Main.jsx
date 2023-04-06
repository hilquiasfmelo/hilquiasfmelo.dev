import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'

export function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Bg Site"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        {/* TODO: Remove here lg:items-start */}
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            👋 Olá! Me chamo Hilquias
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Coder',
                2000,
                'Tech Passionate',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaGithub className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaTwitter className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
