import Link from "next/link";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="mx-auto my-12 max-w-[692px] px-6 text-gray-1200 antialiased sm:my-32 md:my-16">
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
        <h2 className="mb-5 block font-medium sm:mb-6">Today</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          modi sed cum eveniet quaerat nulla molestiae hic iure. Quo aspernatur
          deserunt autem pariatur enim possimus id cumque consequuntur ut!
          Perferendis.
        </p>

        <div className="-mb-3 mt-16 sm:mt-24">
          <h2 className="mb-5 block font-medium sm:mb-6">Projects</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            modi sed cum eveniet quaerat nulla molestiae hic iure. Quo
            aspernatur deserunt autem pariatur enim possimus id cumque
            consequuntur ut! Perferendis.
          </p>
        </div>
      </main>
    </div>
  );
}
