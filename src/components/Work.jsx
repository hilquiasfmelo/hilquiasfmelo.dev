import { data } from '../utils/experiencies'
import { WorkItem } from './WorkItem'

export function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#001b5e]">
        Experiências
      </h1>

      {data.map((item, idx) => {
        return (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            organization={item.orgazionation}
            details={item.details}
          />
        )
      })}
    </div>
  )
}
