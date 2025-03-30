import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/base/button'



export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <section className="text-center items-center">
      <h1> Home </h1>
      <Button>test</Button>

      <div
        className={
          'f-col *:font-semibold bg-indigo-800 max-w-md rounded-xl p-10 gap-6'
        }
      >
        <h1> 25º</h1>
        <h5> Joinville / SC (Brazil) </h5>

        <div className="f-row ">
          <div>
            <p>1 015 hPa</p>
            <span>Pressure</span>
          </div>
          <div>
            <p>10 km/h</p>
            <span>Wind</span>
          </div>
          <div>
            <p>65%</p>
            <span>Humidity</span>
          </div>
        </div>
      </div>
    </section>
  )
}
