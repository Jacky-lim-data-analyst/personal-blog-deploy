import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  // return (
  //   <div>
  //     <div className="mb-5">
  //       <CoverImage slug={slug} title={title} src={coverImage} />
  //     </div>
  //     <h3 className="text-3xl mb-3 leading-snug">
  //       <Link href={`/posts/${slug}`} className="hover:underline">
  //         {title}
  //       </Link>
  //     </h3>
  //     <div className="text-lg mb-4">
  //       <DateFormatter dateString={date} />
  //     </div>
  //     <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
  //     <Avatar name={author.name} picture={author.picture} />
  //   </div>
  // );
  // design 1: card
  // return (
  //   <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
  //     <CoverImage slug={slug} title={title} src={coverImage} />
  //     <div className="p-6">
  //       <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
  //         <DateFormatter dateString={date} />
  //       </div>

  //       <h3 className="text-2xl font-bold mb-3 leading-snug">
  //         <Link href={`/posts/${slug}`} className="hover:text-gray-600 transition-colors">
  //           {title}
  //         </Link>
  //       </h3>

  //       <p className="text-gray-600 leading-relaxed mb-4">{excerpt}</p>
  //       <Avatar name={author.name} picture={author.picture} />
  //     </div>
  //   </div>
  // )

  // design 2: overlay style
  // return (
  //   <Link href={`posts/${slug}`} className="block group">
  //     <div className="relative overflow-hidden rounded-lg mb-4">
  //       <CoverImage slug={slug} title={title} src={coverImage} />
  //       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  //     </div>
  //     <h3 className="text-2xl font-bold mb-2 leading-snug group-hover:text-gray-600 transition-colors">
  //       {title}
  //     </h3>
  //     <p className="text-gray-600 leading-relaxed mb-3">{excerpt}</p>
  //     <div className="flex items-center justify-between">
  //       <Avatar name={author.name} picture={author.picture} />
  //       <span className="text-sm text-gray-500">
  //         <DateFormatter dateString={date} />
  //       </span>
  //     </div>
  //   </Link>
  // )

  // design 3: magazine style
  // return (
  //   <article className="group">
  //     <div className="mb-5 overflow-hidden rounded-lg">
  //       <CoverImage slug={slug} title={title} src={coverImage} />
  //     </div>
  //     <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-3">
  //       <DateFormatter dateString={date} />
  //     </div>
  //     <h3 className="text-3xl font-bold mb-4 leading-tight">
  //       <Link href={`/posts/${slug}`} className="group-hover:underline">
  //         {title}
  //       </Link>
  //     </h3>
  //     <p className="text-lg text-gray-700 leading-relaxed mb-5">{excerpt}</p>
  //     <div className="flex items-center justify-between pt-4 border-t border-gray-200">
  //       <Avatar name={author.name} picture={author.picture} />
  //       <Link 
  //         href={`/posts/${slug}`}
  //         className="text-sm font-semibold hover:underline">
  //           Read more ...
  //       </Link>
  //     </div>
  //   </article>
  // )

  // design 4: glass card
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden hover:bg-white/80 transition-all">
      <CoverImage slug={slug} title={title} src={coverImage} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 leading-snug">
          <Link href={`/posts/${slug}`} className="hover:text-gray-600 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <Avatar name={author.name} picture={author.picture} />
          <span className="text-sm text-gray-500">
            <DateFormatter dateString={date} />
          </span>
        </div>
      </div>
    </div>
  )

  // design 5: timeline style
  // return (
  //   <div className="flex gap-6">
  //     <div className="flex flex-col items-center">
  //       <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
  //         {new Date(date).getDate()}
  //       </div>
  //       <div className="w-px h-full bg-gray-200 mt-2"/>
  //     </div>
  //     <div className="flex-1 pb-8">
  //       <div className="text-sm text-gray-500 mb-2">
  //         <DateFormatter dateString={date} />
  //       </div>
  //       <h3 className="text-2xl font-bold mb-3 leading-snug">
  //         <Link href={`/posts/${slug}`} className="hover:underline">
  //           {title}
  //         </Link>
  //       </h3>
  //       <div className="mb-4 rounded-lg overflow-hidden">
  //         <CoverImage slug={slug} title={title} src={coverImage} />
  //       </div>
  //       <p className="text-gray-600 leading-relaxed mb-4">{excerpt}</p>
  //       <Avatar name={author.name} picture={author.picture} />
  //     </div>
  //   </div>
  // )
}
