"use client"

import { Box } from "./ui/box"
import {
  BriefcaseBusiness,
  Contact,
  GraduationCap,
  Home,
  ScanFace,
} from "lucide-react"
import { Button, buttonVariants } from "./ui/button"
import { TransitionLink } from "./transition-link"
import { TransitionWrapper } from "./ui/transition-wrapper"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavItem = {
  text: string
  href: string
  icon: React.JSX.Element
}
const navList: NavItem[] = [
  {
    text: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    text: "About",
    href: "/about",
    icon: <ScanFace />,
  },
  {
    text: "Education",
    href: "/education",
    icon: <GraduationCap />,
  },
  {
    text: "Experience",
    href: "experience",
    icon: <BriefcaseBusiness />,
  },
  {
    text: "Contact",
    href: "/contact",
    icon: <Contact />,
  },
]

const NavItem = ({
  text,
  href,
  icon,
  isCurr,
}: NavItem & { isCurr: boolean }) => {
  return href ? (
    <TransitionLink
      className={cn(
        buttonVariants({ variant: "brutalist" }),
        isCurr && "bg-foreground text-background",
        "w-full !justify-between py-4 h-full gap-6",
      )}
      href={href}
      aria-label={text}
    >
      <p className="text-2xl">{text}</p>
      {icon}
    </TransitionLink>
  ) : (
    <Button
      size="lg"
      variant="brutalist"
      className="w-full justify-between py-4 h-fit gap-6 "
    >
      <p className="text-2xl">{text}</p>
      {icon}
    </Button>
  )
}

export default function Navbar() {
  const path = usePathname()
  return (
    <div className="space-y-6 h-full ">
      <nav>
        <ul className="space-y-6">
          {navList.map((navItem, index) => (
            <li key={navItem.text}>
              <TransitionWrapper delay={index * 50} direction="right">
                <NavItem {...navItem} isCurr={path === navItem.href}></NavItem>
              </TransitionWrapper>
            </li>
          ))}
        </ul>
      </nav>
      <TransitionWrapper delay={(navList.length + 1) * 50} direction="right">
        <div className="flex gap-6 ">
          <Box className="flex-1">Theme</Box>
          <Box className="flex-1 ">lang</Box>
        </div>
      </TransitionWrapper>
    </div>
  )
}
