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
        <div
          className="grid gap-6 "
          style={{
            gridTemplateRows: '1fr auto 1fr',
            gridTemplateColumns: '1fr auto',
            gridTemplateAreas: `
              "empty-top empty-top"
              "content navbar"
              "empty-bottom empty-bottom"
            `,
          }}
        >
          {/* Empty top row for spacing */}
          <div style={{ gridArea: 'empty-top' }}></div>

          {/* Content row */}
          <div style={{ gridArea: 'content' }} className="w-full">
            {children}
          </div>
          <div style={{ gridArea: 'navbar', width: 'fit-content' }}>
            <Navbar />
          </div>

          {/* Empty bottom row for spacing */}
          <div style={{ gridArea: 'empty-bottom' }}></div>
        </div>
      </main>
    </>
  )
}
