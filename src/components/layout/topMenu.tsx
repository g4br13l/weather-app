import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'



export function TopMenu() {
  return (
    <div className="w-full sticky top-0 z-50 f-col-center h-16 bg-sidebar">
      <div className="f-row flex-1 w-full max-w-7xl items-center h-16 bg-sidebar px-6">
        <img
          className="w-32 h-full object-contain"
          src="/logo/logo.png"
          alt="Weather logo"
        />

        <div className="f-row-center w-full">
          <div className={
            "f-row w-fit mx-8 gap-8 items-center *:place-content-center *:font-semibold"
          }>
            <span>Current</span>
            <span>Week</span>
          </div>
        </div>

        <div className="f-row items-center w-48 gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage
              className="rounded-full cursor-pointer"
              src="/user/default-avatar.png"
              alt="user photo"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="w-fit">
            Gabriel Lima
          </span>
        </div>
      </div>
    </div>
  )
}
