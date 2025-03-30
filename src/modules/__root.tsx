import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { TopMenu } from '@/components/layout/topMenu'



export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
  },
)

function RootComponent() {
  return (

    <main id="main" className="f-col w-full">

      <TopMenu />

      <h3>Root Component</h3>

      <Outlet />

      <TanStackRouterDevtools />
    </main>

  )
}
