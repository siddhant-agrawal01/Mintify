// import DocsBreadcrumb from "@/components/docs-breadcrumb";
// import Pagination from "@/components/pagination";
// import Toc from "@/components/toc";
// import { page_routes } from "@/lib/routes-config";
// import { notFound } from "next/navigation";
// import { getMarkdownForSlug } from "@/lib/markdown";
// import { PropsWithChildren, cache } from "react";
// import { cn } from "@/lib/utils";
// import AnimatedGridPattern from "@/components/ui/background";

// type PageProps = {
//   params: { slug: string[] };
// };

// const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

// export default async function DocsPage({ params: { slug = [] } }: PageProps) {
//   const pathName = slug.join("/");
//   const res = await cachedGetMarkdownForSlug(pathName);

//   if (!res) notFound();
//   return (
//     <div className="flex items-start gap-12 h-full">
//       <div className="relative top-0 left-0 right-0 flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
//         <AnimatedGridPattern
//           numSquares={30}
//           maxOpacity={0.1}
//           duration={3}
//           repeatDelay={1}
//           className={cn(
//             "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
//             "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
//           )}
//         ></AnimatedGridPattern>
//         <div
//           className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-emerald-500/30 to-transparent pointer-events-none"
//           style={{
//             backgroundImage:
//               "radial-gradient(ellipse at top, rgba(43,190,96,0.2), transparent 100%)",
//             filter: "blur(80px)",
//             transform: "translateY(-50%)",
//           }}
//         />
//         <div className="flex-[3] pt-10">
//           <DocsBreadcrumb paths={slug} />
//           <Markdown>
//             <h1>{res.frontmatter.title}</h1>
//             <p className="-mt-4 text-muted-foreground text-[16.5px]">
//               {res.frontmatter.description}
//             </p>
//             <div>{res.content}</div>
//             <Pagination pathname={pathName} />
//           </Markdown>
//         </div>
//         <Toc path={pathName} />
//       </div>
//     </div>
//   );
// }

// function Markdown({ children }: PropsWithChildren) {
//   return (
//     <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2 prose-code:before:content-none prose-code:after:content-none">
//       {children}
//     </div>
//   );
// }

// export async function generateMetadata({ params: { slug = [] } }: PageProps) {
//   const pathName = slug.join("/");
//   const res = await cachedGetMarkdownForSlug(pathName);
//   if (!res) return null;
//   const { frontmatter } = res;
//   return {
//     title: frontmatter.title,
//     description: frontmatter.description,
//   };
// }

// export function generateStaticParams() {
//   return page_routes.map((item) => ({
//     slug: item.href.split("/"),
//   }));
// }

import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getMarkdownForSlug } from "@/lib/markdown";
import { PropsWithChildren, cache } from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/background";

type PageProps = {
  params: { slug: string[] };
};

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);

  if (!res) notFound();
  
  return (
    <div className="relative min-h-screen">
        <div
          className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-emerald-500/30 to-transparent pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(43,190,96,0.2), transparent 100%)",
            filter: "blur(80px)",
            transform: "translateY(-50%)",
          }}
        />
      {/* The animated grid pattern is now positioned at the top of the viewport */}
      <div className="fixed top-0 left-0 w-full h-[300px] z-0 overflow-hidden pointer-events-none">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-0 h-full skew-y-12"
          )}
        />
      </div>
      
      <div className="relative z-10 flex items-start gap-12 h-full pt-10">
        <div className="flex-[3] pt-10">
          <DocsBreadcrumb paths={slug} />
          <Markdown>
            <h1>{res.frontmatter.title}</h1>
            <p className="-mt-4 text-muted-foreground text-[16.5px]">
              {res.frontmatter.description}
            </p>
            <div>{res.content}</div>
            <Pagination pathname={pathName} />
          </Markdown>
        </div>
        <Toc path={pathName} />
      </div>
    </div>
  );
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2 prose-code:before:content-none prose-code:after:content-none">
      {children}
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/"),
  }));
}
