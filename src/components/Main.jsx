import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

import {
  LINK_GITHUB,
  LINK_INSTA,
  LINK_LINKEDIN,
  LINK_TWITTER,
} from '../utils/links-site'

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
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col lg:items-start justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Hilquias Melo 👋
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
            <a
              href={LINK_GITHUB}
              target="_blank"
              title="GitHub"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href={LINK_LINKEDIN}
              target="_blank"
              title="Linkedin"
              rel="noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a
              href={LINK_INSTA}
              target="_blank"
              title="Instagram"
              rel="noreferrer"
            >
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a
              href={LINK_TWITTER}
              target="_blank"
              title="Twitter"
              rel="noreferrer"
            >
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
