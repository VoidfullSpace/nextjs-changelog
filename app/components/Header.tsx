import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

export function Header() {
  return (
    <header className="flex justify-between items-center max-w-6xl mx-auto py-2">
      <div>
        <Link href={"/"} className="flex items-center space-x-2 sm:space-x-4">
          <Image
            src="/voidfull.svg"
            alt="voidfull logo"
            width={32}
            height={32}
            priority
          />
          <span className="sr-only">Voidfull</span>
          <p className="text-xl font-semibold">Blog</p>
        </Link>
      </div>

      <ul className="list-none text-sm sm:text-base">
        <li>
          <a
            className={clsx(
              "flex items-center justify-between",
              "space-x-2 text-dark-blue",
              "rounded-lg px-2.5 py-1",
              "hover:bg-white/25 focus:bg-white/25 focus:outline-none",
            )}
            href={
              "https://voidfull.com?utm_source=blog&utm_medium=navbar&utm_content=go_to_homepage"
            }
            rel="noreferrer noopener"
          >
            Go to Homepage ↗
          </a>
        </li>
      </ul>
    </header>
  );
}
