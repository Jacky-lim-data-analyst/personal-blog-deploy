import Avatar from "./avatar";
// import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col mb-12">
        <div className="flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-widest text-xs mb-4">
          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
          <DateFormatter dateString={date} />
        </div>
        <PostTitle>{title}</PostTitle>
        <div className="flex items-center justify-center">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
        <img src={coverImage} alt={title} className="w-full h-auto object-cover aspect-[16/9]" />
      </div>
    </div>
  );
}
