import { careerTimeline } from '../constants';

const Carieer = () => {
  return (
    <div className="h-[100vh] container mx-auto p-4">
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {careerTimeline.map((event, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute -left-3.5 w-5 h-5 rounded-full bg-white border border-black"></div>
            <div className="flex items-center mb-1">
              <span className="text-lg font-poppins font-semibold text-gray-900 dark:text-white">{event.year}</span>
              <span className="mx-2">-</span>
              <span className="text-lg font-poppins font-semibold text-gray-700 dark:text-gray-300">{event.title}</span>
            </div>
            <p className="text-base font-normal text-gray-600 dark:text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carieer
