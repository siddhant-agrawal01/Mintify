import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, TwitterIcon, HexagonIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs/${page_routes[0].href}`,
  },
  {
    title: "Examples",
    href: "#",
  },
  {
    title: "Guides",
    href: "#",
  },
  {
    title: "Community",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-8">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex">
              <Link
                href=""
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              {/* <ModeToggle /> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg
        width="103"
        height="24"
        viewBox="0 0 103 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6"
      >
        <path
          d="M33.8891 18H30.7691V4H34.5891L38.4091 14.26L42.2091 4H46.0291V18H42.9091V9.36L39.6891 18H37.1091L33.8891 9.36V18ZM49.5854 6.34C49.0787 6.34 48.6454 6.16667 48.2854 5.82C47.9387 5.46 47.7654 5.02 47.7654 4.5C47.7654 3.99333 47.9387 3.56667 48.2854 3.22C48.6454 2.87333 49.0787 2.7 49.5854 2.7C50.1054 2.7 50.5387 2.87333 50.8854 3.22C51.2321 3.56667 51.4054 3.99333 51.4054 4.5C51.4054 5.02 51.2321 5.46 50.8854 5.82C50.5387 6.16667 50.1054 6.34 49.5854 6.34ZM51.1254 18H48.0454V7.4H51.1254V18ZM52.9626 18V7.4H55.4426L55.7026 8.9C55.9959 8.34 56.4492 7.88667 57.0626 7.54C57.6892 7.19333 58.3892 7.02 59.1626 7.02C60.2826 7.02 61.1759 7.38 61.8426 8.1C62.5226 8.82 62.8626 9.78667 62.8626 11V18H59.7826V11.16C59.7826 10.7067 59.6359 10.3467 59.3426 10.08C59.0492 9.81333 58.6492 9.68 58.1426 9.68C57.5426 9.68 57.0426 9.86 56.6426 10.22C56.2426 10.58 56.0426 11.0467 56.0426 11.62V18H52.9626ZM69.2688 18C68.0022 18 67.0288 17.7067 66.3488 17.12C65.6822 16.5333 65.3488 15.68 65.3488 14.56V10H63.6088V7.4H65.3488V3.78H68.4288V7.4H71.0288V10H68.4288V14.22C68.4288 14.6067 68.5288 14.9 68.7288 15.1C68.9288 15.3 69.2155 15.4 69.5888 15.4H70.8088V18H69.2688ZM75.3891 18H72.3091V3H75.3891V18ZM78.7854 6.34C78.2787 6.34 77.8454 6.16667 77.4854 5.82C77.1387 5.46 76.9654 5.02 76.9654 4.5C76.9654 3.99333 77.1387 3.56667 77.4854 3.22C77.8454 2.87333 78.2787 2.7 78.7854 2.7C79.3054 2.7 79.7387 2.87333 80.0854 3.22C80.4321 3.56667 80.6054 3.99333 80.6054 4.5C80.6054 5.02 80.4321 5.46 80.0854 5.82C79.7387 6.16667 79.3054 6.34 78.7854 6.34ZM80.3254 18H77.2454V7.4H80.3254V18ZM83.3426 18V10H81.6026V7.4H83.3426V6.24C83.3426 5.18667 83.6626 4.38667 84.3026 3.84C84.9426 3.28 85.8692 3 87.0826 3H89.3426V5.6H87.4026C86.7492 5.6 86.4226 5.92667 86.4226 6.58V7.4H89.1426V10H86.4226V18H83.3426ZM90.4591 22V19.4H92.5991C93.3191 19.4 93.7725 19.1467 93.9591 18.64L94.1991 18H93.7391L89.5391 7.4H92.8391L95.4791 14.54L98.1191 7.4H101.319L96.8391 19.42C96.5191 20.2867 96.0191 20.9333 95.3391 21.36C94.6591 21.7867 93.7458 22 92.5991 22H90.4591Z"
          className="fill-primary dark:fill-primary-light"
        ></path>
        <g clip-path="url(#clip0_115_7772)">
          <path
            d="M5.53338 7.66241C5.54806 5.66259 6.34114 3.74714 7.74443 2.32227H7.74185L2.32412 7.73999H2.32671C2.30654 7.75586 2.28753 7.77314 2.26981 7.79171C0.95223 9.10757 0.153396 10.8545 0.0199146 12.7118C-0.113567 14.5691 0.42726 16.4123 1.54314 17.9031L7.01517 12.431L7.07206 12.3767C6.05218 11.0186 5.51109 9.36073 5.53338 7.66241Z"
            fill="#0C8C5E"
          ></path>
          <path
            d="M18.6882 13.2688C17.6513 14.285 16.3497 14.9894 14.9318 15.3017C13.514 15.614 12.0369 15.5216 10.669 15.0351C9.93963 14.7761 9.25417 14.4073 8.63634 13.9412L8.57945 13.9981L3.10742 19.4675C4.59878 20.5806 6.44095 21.1197 8.29711 20.9863C10.1533 20.8529 11.8994 20.0558 13.2162 18.7408L13.2705 18.6865L18.6882 13.2688Z"
            fill="#0C8C5E"
          ></path>
          <path
            d="M21.0104 7.73998V3.87298e-06H13.2704C12.2539 -0.00101453 11.2472 0.198818 10.3081 0.588023C9.36903 0.977229 8.51612 1.54814 7.79835 2.26795L7.74404 2.32226C6.79795 3.28273 6.12105 4.47511 5.78125 5.77977C6.39637 5.62048 7.02851 5.53626 7.66388 5.52893C9.36226 5.50894 11.0196 6.05079 12.3782 7.0702C13.5992 7.98076 14.5233 9.23241 15.0341 10.6674C15.5546 12.134 15.623 13.7231 15.2306 15.2291C16.5355 14.8899 17.728 14.2129 18.6881 13.2663L18.7424 13.2146C19.4625 12.4965 20.0336 11.6432 20.4228 10.7037C20.812 9.76414 21.0117 8.75694 21.0104 7.73998Z"
            fill="#18E299"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_115_7772">
            <rect width="21" height="21" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
