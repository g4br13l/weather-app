import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <section className="text-center">
      <h1> Home </h1>
    </section>
  )
}
