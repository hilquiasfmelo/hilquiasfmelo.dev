// import { FiAlertOctagon } from 'react-icons/fi'

export function ProjectsItem({ img, title, description }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-2 text-white text-center">{description}</p>
        {/* <a href="/">
          <p className="text-center flex items-center justify-center gap-1 p-1 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm">
            <FiAlertOctagon /> Info
          </p>
        </a> */}
      </div>
    </div>
  )
}
