"use client"

import createGlobe from "cobe"
import { MapPinIcon } from "lucide-react"
import { useEffect, useRef } from "react"
import { useSpring } from "@react-spring/web"

export default function LocationGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const fadeMask =
    "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)"

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }))

  useEffect(() => {
    let width = 0

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener("resize", onResize)
      }
    }
    onResize()

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 2,
      mapSamples: 12_000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 0, 0],
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: [39.5727, 2.6569], size: 0.1 }],
      scale: 1.05,
      onRender: (state) => {
        state.phi = 4.5 + r.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [r])

  return (
    <div className="shadow-feature-card relative flex h-60 flex-col gap-6 overflow-hidden rounded-xl ">
      <div className="flex items-center gap-2">
        <MapPinIcon className="size-[18px]" />
        <h2 className="text-sm">palma de mallorca</h2>
      </div>
      <div className="absolute inset-x-0  mx-auto aspect-square h-[388px]">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            overflow: "visible",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1/1",
              maxWidth: 800,
              WebkitMaskImage: fadeMask,
              maskImage: fadeMask,
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={(e) => {
                pointerInteracting.current =
                  e.clientX - pointerInteractionMovement.current
                if (canvasRef.current)
                  canvasRef.current.style.cursor = "grabbing"
              }}
              onPointerUp={() => {
                pointerInteracting.current = null
                if (canvasRef.current) canvasRef.current.style.cursor = "grab"
              }}
              onPointerOut={() => {
                pointerInteracting.current = null
                if (canvasRef.current) canvasRef.current.style.cursor = "grab"
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current
                  pointerInteractionMovement.current = delta
                  api.start({
                    r: delta / 200,
                  })
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta =
                    e.touches[0].clientX - pointerInteracting.current
                  pointerInteractionMovement.current = delta
                  api.start({
                    r: delta / 100,
                  })
                }
              }}
              style={{
                width: "100%",
                height: "100%",
                contain: "layout paint size",
                cursor: "auto",
                userSelect: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
