import { Box } from "./ui/box"
import {
  BriefcaseBusiness,
  Contact,
  GraduationCap,
  Home,
  ScanFace,
} from "lucide-react"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"

const NavItem = ({
  href,
  text,
  icon,
}: {
  href?: string
  text: string
  icon: React.ReactNode
}) => {
  return href ? (
    <Link
      className={buttonVariants({ variant: "brutalist" })}
      href={href}
      aria-label={text}
    >
      {icon} <p>{text}</p>
    </Link>
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
  return (
    <div className="space-y-6 h-full ">
    
        <nav>
          <ul className="space-y-6">
            <li>
              <NavItem text="Home" icon={<Home  />} />
            </li>
            <li>
              <NavItem text="About" icon={<ScanFace />} />
            </li>
            <li>
              <NavItem text="Education" icon={<GraduationCap />} />
            </li>
            <li>
              <NavItem text="Experience" icon={<BriefcaseBusiness />} />
            </li>
            <li>
              <NavItem text="Contact" icon={<Contact />} />
            </li>
          </ul>
        </nav>
   
      <div className="flex gap-6 ">
        <Box className="flex-1">Theme</Box>
        <Box className="flex-1 ">lang</Box>
      </div>
    </div>
  )
}
