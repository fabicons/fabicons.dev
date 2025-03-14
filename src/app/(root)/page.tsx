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
import { TransitionWrapper } from "@/components/ui/transition-wrapper"

export default function Home() {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-9 lg:grid-rows-8 h-full gap-6">
      {/* Fabicons */}
      <TransitionWrapper
        direction="left"
        delay={100}
        className="w-full lg:col-span-3 lg:row-span-2 font-black text-4xl flex flex-col justify-center"
      >
        <Box className="">
          <p>fabian.</p> <p>fabicons.</p> <p>frontend dev.</p>
        </Box>
      </TransitionWrapper>
      {/* Location */}
      <TransitionWrapper
        direction="top"
        delay={200}
        className="lg:col-span-3 lg:row-span-3 xl:col-span-4 lg:h-full h-64"
      >
        <Box className="w-full h-full pt-auto pb-0 px-0">
          <LocationGlobe />
        </Box>
      </TransitionWrapper>
      {/* Profile pic */}
      <TransitionWrapper
        direction="top"
        delay={300}
        className="w-full lg:col-span-3 lg:row-span-3 xl:col-span-2 "
      >
        <Box className="p-0 h-full">
          <Image
            src={profilePicture}
            alt="Fabian's profile picture"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 25vw"
            className="w-full h-full object-cover rounded-lg"
            priority
          />
        </Box>
      </TransitionWrapper>
      {/* Tech stack*/}
      <Box className="w-full lg:col-span-3 lg:row-span-6 font-black text-4xl space-y-6 text-center">
        <p> Tech Stack</p>
        <TechStackList />
      </Box>
      {/* Featured project */}
      <TransitionWrapper
        className="w-full lg:col-span-6 lg:row-span-3"
        direction="center"
      >
        <Box className="h-full">WORKING</Box>
      </TransitionWrapper>
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
