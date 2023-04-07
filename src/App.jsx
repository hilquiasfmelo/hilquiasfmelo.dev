import { Contact } from './components/Contact'
import { Main } from './components/Main'
import { Projects } from './components/Projects'
import { SideNav } from './components/SideNav'
import { Work } from './components/Work'

export function App() {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-white to-gray-100">
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}
