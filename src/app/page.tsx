import Link from "next/link";

import { Icons } from "@/components/icons";
import { LinkBadge } from "@/components/link-badge";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="mx-auto py-12 max-w-[692px] px-6 text-gray-1200 antialiased sm:py-32 md:py-16">
      <header className="mb-24 flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-lg inline-block font-medium">Cesar Silva</h1>
          <span className="text-base font-medium text-muted-foreground leading-none text-gray-1100">
            Developer
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <ModeToggle />
          <Link
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            href="https://github.com/cesarscfilho"
            target="_blank"
          >
            <Icons.gitHub className="size-4" />
          </Link>
        </div>
      </header>
      <main>
        <h2 className="mb-5 block font-medium sm:mb-6">About</h2>
        <p className="text-muted-foreground">
          I&apos;m Cesar, building things for the web and mobile devices. I like
          working on open source projects, playing video games and playing beach
          volleyball.
        </p>

        <div className="-mb-3 mt-16 sm:mt-24">
          <h2 className="mb-5 block font-medium sm:mb-6">Today</h2>

          <p className="text-muted-foreground">
            I currently work as a front-end developer at{" "}
            <LinkBadge href="https://www.vilaapps.com.br/">VilaApps</LinkBadge>{" "}
            and am building an open source CMR platform built with the latest
            Next.js features.
          </p>
        </div>
      </main>
    </div>
  );
}
