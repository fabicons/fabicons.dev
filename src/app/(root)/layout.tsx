import Navbar from '@/components/Navbar'
// import { ThemeToggle } from '@/components/theme-toggle'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main className="container min-h-screen mx-auto grid border">
        <div className="grid gap-6 grid-template-center-layout">
          {/* Empty top row for spacing */}
          <div className="grid-area-empty-top"></div>

          {/* Content row */}
          <div className="grid-area-content w-full">
            {children}
          </div>
          <div className="grid-area-navbar">
            <Navbar />
          </div>

          {/* Empty bottom row for spacing */}
          <div className="grid-area-empty-bottom"></div>
        </div>
      </main>
    </>
  )
}
