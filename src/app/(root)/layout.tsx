import Navbar from "@/components/navbar"
// import { ThemeToggle } from '@/components/theme-toggle'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main className="container min-h-screen mx-auto grid px-4 py-4 xl:py-0">
        <div className="grid space-x-6 grid-template-center-layout ">
          {/* Empty top row for spacing */}
          <div className="grid-area-empty-top"></div>

          {/* Content row */}
          <div className="grid-area-content">{children}</div>
          <div className="grid-area-navbar hidden lg:block">
            <Navbar />
          </div>

          {/* Empty bottom row for spacing */}
          <div className="grid-area-empty-bottom"></div>
        </div>
      </main>
    </>
  )
}


