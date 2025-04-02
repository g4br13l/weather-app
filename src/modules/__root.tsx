import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { TopMenu } from '@/components/layout/topMenu'



export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <main className="f-col w-full items-center">

      <div className="f-col mb-32 w-full max-w-7xl">
        <TopMenu />
        <Outlet />
      </div>

      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </main>
  )
}
