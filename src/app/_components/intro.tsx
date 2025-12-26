import { CMS_NAME } from "@/lib/constants";
import { Code, Coffee, Zap } from 'lucide-react';

export function Intro() {
  return (
    // <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    //   <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
    //     Blog.
    //   </h1>
    //   <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
    //     A statically generated blog example using{" "}
    //     <a
    //       href="https://nextjs.org/"
    //       className="underline hover:text-blue-600 duration-200 transition-colors"
    //     >
    //       Next.js
    //     </a>{" "}
    //     and {CMS_NAME}.
    //   </h4>
    // </section>

    // design 1: minimal hero
    // <section className="mt-20 mb-20">
    //   <div className="max-w-4xl mx-auto text-center">
    //     <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
    //       Tech & Code
    //     </h1>
    //     <p className="text-xl md:text-2xl text-slate-600 mb-4">
    //       Exploring modern tech and programming
    //     </p>
    //     <p className="text-sm text-slate-500">
    //       Personal insights and technical deep-dives by a developer who likes to break things (and fix them)
    //     </p>
    //   </div>
    // </section>

    // design 2: personal touch
    // <section className="flex flex-col mt-16 mb-16 md:mb-12">
    //   <div className="flex items-center space-x-2 mb-6">
    //     <Code className="w-6 h-6 text-emerald-500" />
    //     <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
    //       Hey, I'am Jacky
    //     </h1>
    //     <Coffee className="w-6 h-6 text-amber-600" />
    //   </div>

    //   <div className="flex flex-col md:flex-row md:items-start md:justify-between">
    //     <div className="flex-1 mb-8 md:mb-0 md:pr-12">
    //       <p className="text-lg text-slate-700 leading-relaxed mb-4">
    //         I'm a software engineer who loves building things. This is where I share what
    //         I'm learning, working on and thinking about.
    //       </p>
    //       <p className="text-slate-600">
    //         Topics include machine learning, Python, backend architecture, and whatever catches my interest.
    //       </p>
    //     </div>

    //   <div className="flex flex-col space-y-2 text-sm text-slate-600 bg-slate-50 rounded-lg p-6 md:min-w-[280px]">
    //     <div className="flex items-center space-x-2">
    //       <Zap className="w-4 h-4 text-yellow-400" />
    //       <span>10 years in machine learning</span>
    //     </div>
    //     <div className="flex items-center space-x-2">
    //       <Coffee className="w-6 h-6 text-amber-600" />
    //       <span>Powered by coffee & curiosity</span>
    //     </div>
    //   </div>
    //   </div>
    // </section>

    // design 3: command line style
    <section className="mt-16 mb-16 md:mb-12">
      <h1 className="mb-16 md:mb-12 font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl font-serif">
        Synthax
      </h1>
      <div className="bg-slate-900 rounded-lg p-8 font-mono text-sm shadow-2xl">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <div className="text-green-400">
          <p className="mb-2">
            <span className="text-blue-400">visitor@blog</span>
            <span className="text-white">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-white">$</span> cat welcome.txt
          </p>
          <div className="ml-4 text-slate-300 space-y-2">
            <p>Welcome to my technical blog!</p>
            <p>Topics: Machine learning | AI | System Design | Backend architecture | Best Practices</p>
            <p>Stack: Python, React, Node.js, Next.js, TypeScript</p>
            <p className="mt-4 text-green-400">Ready to explore? Start reading below ↓</p>
          </div>
          <p className="mt-4">
            <span className="text-blue-400">visitor@blog</span>
            <span className="text-white">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-white">$</span>
            <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}
