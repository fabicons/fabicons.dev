import { Box } from "@/components/ui/box"
import { GithubIcon, LinkedinIcon } from "~/icons"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import profilePicture from "~/profile-pic.webp"
import Image from "next/image"

export default function Home() {
  return (
    <section className="grid grid-cols-9 grid-rows-8 h-full gap-6">
      <Box className="col-span-full md:col-span-3 row-span-2">
        <p>fabian.</p> <p>fabicons.</p> <p>frontend dev.</p>
      </Box>
      <Box className="col-span-full md:col-span-4 row-span-3">LOCATION</Box>
      <Box className="col-span-full md:col-span-2 row-span-3 p-0">
        <Image
          src={profilePicture}
          alt="Fabian's profile picture"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 25vw"
          className="w-full h-full object-cover rounded-lg"
          priority
        />
      </Box>
      <Box className="col-span-full md:col-span-3 row-span-6">TECH STACK</Box>
      <Box className="col-span-full md:col-span-6 row-span-3">WORKING</Box>
      <Link
        href=""
        className={`col-span-full md:col-span-1 row-span-1 h-full ${buttonVariants(
          {
            variant: "brutalist",
          }
        )}`}
      >
        <GithubIcon size={32} strokeWidth={1.5} />
      </Link>
      <Link
        href=""
        className={`col-span-full md:col-span-1 row-span-1 h-full ${buttonVariants(
          {
            variant: "brutalist",
          }
        )}`}
      >
        <LinkedinIcon />
      </Link>
      <Box className="col-span-full md:col-span-4 row-span-2"></Box>
      <Box className="col-span-full md:col-span-1 row-span-1 col-start-4"></Box>
      <Box className="col-span-full md:col-span-1 row-span-1 col-start-5"></Box>
    </section>
  )
}
