import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  // const image = (
  //   <Image
  //     src={src}
  //     alt={`Cover Image for ${title}`}
  //     className={cn("shadow-sm w-full", {
  //       "hover:shadow-lg transition-shadow duration-200": slug,
  //     })}
  //     width={1300}
  //     height={630}
  //   />
  // );
  // return (
  //   <div className="sm:mx-0">
  //     {slug ? (
  //       <Link href={`/posts/${slug}`} aria-label={title}>
  //         {image}
  //       </Link>
  //     ) : (
  //       image
  //     )}
  //   </div>
  // );

  // Design 2: zoom + border highlight
  const image = (
    <Image 
      src={src}
      alt={title}
      width={1300}
      height={600}
      className="w-full transition-transform duration-200 hover:scale-[1.02]"
    />
  );

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden hover:border-gray-400 transition-colors">
      {slug ? <Link href={`/posts/${slug}`}>{image}</Link> : image}
    </div>
  )

  // const Wrapper = slug ? Link : 'div';
  // const wrapperProps = slug ? { href: `posts/${slug}` } : {};

  // return (
  //   <Wrapper {...wrapperProps} className="relative block rounded-xl overflow-hidden">
  //     <Image src={src} alt={title} width={1300} height={630} />
  //     <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/60 rounded-lg p-3">
  //       <h2 className="text-gray-900 font-medium">{title}</h2>
  //     </div>
  //   </Wrapper>
  // )
};

export default CoverImage;
