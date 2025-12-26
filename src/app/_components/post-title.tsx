import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  // return (
  //   <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
  //     {children}
  //   </h1>
  // );

  // return (
  //   <div className="flex gap-6 mb-12">
  //     <div className="w-2 bg-black flex-shrink-0" />
  //     <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
  //       {children}
  //     </h1>
  //   </div>
  // )
  // return (
  //   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent uppercase drop-shadow-lg">
  //     {children}
  //   </h1>
  // );

  // return (
  //   <div className="mb-12 pb-8 border-b-2 border-gray-200">
  //     <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
  //       {children}
  //     </h1>
  //   </div>
  // );

  // return (
  //   <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-12 text-gray-900 relative">
  //     <span className="relative">
  //       {children}
  //       <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10 opacity-50" />
  //     </span>
  //   </h1>
  // )

  // return (
  //   <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none mb-10">
  //     {children}
  //   </h1>
  // )

  // return (
  //   <div className="mb-12 relative">
  //     <div className="text-8xl text-gray-200 font-serif absolute -top-6 -left-2"></div>
  //     <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight pl-12 relative z-10">
  //       {children}
  //     </h1>
  //   </div>
  // )

  // return (
  //   <div className="mb-16 text-center">
  //     <div className="inline-block">
  //       <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal leading-relaxed mb-4">
  //         {children}
  //       </h1>
  //       <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
  //     </div>
  //   </div>
  // )

  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-12">
      {children}
    </h1>
  )
}
