import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  // return (
  //   <section>
  //     <div className="mb-8 md:mb-16">
  //       <CoverImage title={title} src={coverImage} slug={slug} />
  //     </div>
  //     <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
  //       <div>
  //         <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
  //           <Link href={`/posts/${slug}`} className="hover:underline">
  //             {title}
  //           </Link>
  //         </h3>
  //         <div className="mb-4 md:mb-0 text-lg">
  //           <DateFormatter dateString={date} />
  //         </div>
  //       </div>
  //       <div>
  //         <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
  //         <Avatar name={author.name} picture={author.picture} />
  //       </div>
  //     </div>
  //   </section>
  // );

  // design 1: editorial layout
  // return (
  //   <section className="max-w-3xl mx-auto">
  //     <CoverImage title={title} src={coverImage} slug={slug} />

  //     <header className="mt-10">
  //       <h1 className="text-4xl md:text-5xl font-serif leading-tight">{title}</h1>
  //       <div className="mt-4 flex items-center text-sm text-gray-500">
  //         <DateFormatter dateString={date} />
  //         <span className="mx-2">.</span>
  //         <Avatar name={author.name} picture={author.picture} />
  //       </div>
  //     </header>

  //     <p className="mt-8 text-xl leading-relaxed text-gray-700">{excerpt}</p>
  //   </section>
  // )

  // design 2: meta first
  // return (
  //   <section className="grid md:grid-cols-3 gap-8 items-start">
  //     <div className="md:col-span-2">
  //       <CoverImage title={title} src={coverImage} slug={slug} />
  //     </div>

  //     <aside className="md:col-span-1 sticky top-24">
  //       <h2 className="text-2xl font-bold leading-snug">
  //         <Link href={`/posts/${slug}`}>{title}</Link>
  //       </h2>

  //       <div className="mt-3 text-sm text-gray-500">
  //         <DateFormatter dateString={date} />
  //       </div>

  //       <p className="mt-4 text-base leading-relaxed">{excerpt}</p>
  //       <div className="mt-6">
  //         <Avatar name={author.name} picture={author.picture} />
  //       </div>
  //     </aside>
  //   </section>
  // )

  // return (
  //   <section>
  //     <div className="grid lg:grid-cols-12 gap-8 items-end">
  //       <div className="lg:col-span-7">
  //         <CoverImage title={title} src={coverImage} slug={slug} />
  //       </div>

  //       <div className="lg:col-span-5">
  //         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  //           <Link href={`/posts/${slug}`}>{title}</Link>
  //         </h1>
  //         <p className="mt-6 text-lg leading-relaxed text-gray-600">{excerpt}</p>
  //         <div className="mt-6 flex items-center justify-between">
  //           <DateFormatter dateString={date} />
  //           <Avatar name={author.name} picture={author.picture} />
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )

  return (
    <section className="border-b border-gray-200 pb-12">
      <div className="grid sm:grid-cols-4 gap-6">
        <div className="sm:col-span-1">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>

        <div className="sm:col-span-3">
          <h2 className="text-2xl font-semibold">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h2>
          <div className="mt-2 text-sm text-gray-500">
            <DateFormatter dateString={date} />
          </div>
          <p className="mt-3 text-base leading-relaxed line-clamp-3">{excerpt}</p>
          <div className="mt-4">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </section>
  )
}
