import { technologies } from '../constants'

const Technologies = () => {
  return (
    <div id="technologies" className="my-12">
    <ul className="flex flex-wrap justify-center">
      {technologies.map((tech) => (
        <li key={tech.id} className="m-8">
          <img src={tech.img} alt={tech.name} className="w-16 h-16" />
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Technologies;
