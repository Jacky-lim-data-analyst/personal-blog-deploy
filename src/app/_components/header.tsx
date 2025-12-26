import Link from "next/link";

const Header = () => {
  // return (
  //   <header className="mb-16 mt-8">
  //     <Link href="/" className="flex items-center gap-4 group">
  //       <div className="w-1 h-12 bg-black group-hover:h-16 transition-all"/>
  //       <div>
  //         <h1 className="text-4xl md:text-5xl font-bold group-hover:translate-x-1 transition-transform">
  //           Blog
  //         </h1>
  //         <p className="text-gray-500 text-sm mt-1">Personal writings</p>
  //       </div>
  //     </Link>
  //   </header>
  // );

  return (
    <header className="mb-16 mt-8">
      <Link href="/" className="inline-block group">
        <h1 className="text-4xl md:text-5xl font-bold relative">
          Synthax
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
        </h1>
      </Link>
    </header>
  )

  // return (
  //   <header className="mb-16 mt-8">
  //     <Link href="/" className="group">
  //       <h1 className="text=5xl md:text-6xl font-black mb-2 group-hover:text-gray-700 transition-colors">
  //         Blog
  //       </h1>
  //       <p className="text-gray-600 text-lg italic">
  //         Thoughts, stories and ideas
  //       </p>
  //     </Link>
  //   </header>
  // );

  // return (
  //   <header className="mb-16 mt-8">
  //     <Link href="/" className="block">
  //       <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors border border-gray-200">
  //         <h1 className="text-3xl font-bold mb-2">Blog</h1>
  //         <p className="text-gray-600 text-sm">
  //           Welcome to my writing space
  //         </p>
  //       </div>
  //     </Link>
  //   </header>
  // )
};

export default Header;
