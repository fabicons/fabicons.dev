import { Box } from "@/components/ui/box"
import { GithubIcon, LinkedinIcon } from "~/icons"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import profilePicture from "~/profile-pic.webp"
import Image from "next/image"
import TechStackList from "./_components/tech-stack-list"
import LocationGlobe from "./_components/location-globe"
import HeartButton from "./_components/heart-button"
import CookieButton from "./_components/cookie-button"

export default function Home() {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-9 lg:grid-rows-8 h-full gap-6">
      {/* Fabicons */}
      <Box className="w-full lg:col-span-3 lg:row-span-2 font-black text-4xl flex flex-col justify-center">
        <p>fabian.</p> <p>fabicons.</p> <p>frontend dev.</p>
      </Box>
      {/* Location */}
      <Box className="w-full lg:col-span-3 lg:row-span-3 xl:col-span-4 pt-auto pb-0 px-0">
        <LocationGlobe />
      </Box>
      {/* Profile pic */}
      <Box className="w-full lg:col-span-3 lg:row-span-3 xl:col-span-2 p-0">
        <Image
          src={profilePicture}
          alt="Fabian's profile picture"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 25vw"
          className="w-full h-full object-cover rounded-lg"
          priority
        />
      </Box>
      {/* Tech stack*/}
      <Box className="w-full lg:col-span-3 lg:row-span-6 font-black text-4xl space-y-6 text-center">
        <p> Tech Stack</p>
        <TechStackList />
      </Box>
      {/* Featured project */}
      <Box className="w-full lg:col-span-6 lg:row-span-3">WORKING</Box>
      {/* Github icon */}
      <Link
        href=""
        className={`w-auto lg:col-span-1 lg:row-span-1 lg:h-full ${buttonVariants(
          {
            variant: "brutalist",
          }
        )}`}
      >
        <GithubIcon size={32} strokeWidth={1.5} />
      </Link>
      {/* Linkedin icon*/}
      <Link
        href=""
        className={`w-auto lg:col-span-1 lg:row-span-1 lg:h-full ${buttonVariants(
          {
            variant: "brutalist",
          }
        )}`}
      >
        <LinkedinIcon className="stroke-1" />
      </Link>
      {/* Languages */}
      <Box className="w-full lg:col-span-4 lg:row-span-2 font-black text-2xl flex flex-col gap-6">
        {" "}
        <p> Talk to me in:</p>
        <div className="flex gap-4">
          <p>EN</p>
          <p>DE</p>
          <p>ES</p>
          <p>CA</p>
          <p>NOR</p>
        </div>

      </Box>
      {/* Heart */}
      <HeartButton />
      {/* Cookie */}
      <CookieButton />
    </section>
  )
}
