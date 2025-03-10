import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DockerIcon, JavascriptIcon, NextjsIcon, NodejsIcon, NpmIcon, PythonIcon, ReactIcon, TypescriptIcon } from "~/icons"

export default function TechStackList() {
  return (
    <TooltipProvider>
      <div className="flex justify-center flex-wrap gap-6">
        <Tooltip>
          <TooltipTrigger>
            <JavascriptIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Javascript</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <TypescriptIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Typescript</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <ReactIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">React</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NextjsIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Nextjs</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NodejsIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Nodejs</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NpmIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Npm</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <PythonIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Python</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <DockerIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Docker</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <JavascriptIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Typescript</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <JavascriptIcon size={80} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">Typescript</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
