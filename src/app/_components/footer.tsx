import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
// import { siGithub, siMedium } from 'simple-icons';
import { Mail, Terminal } from "lucide-react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa6";

export function Footer() {
  return (
    // default
    // <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
    //   <Container>
    //     <div className="py-28 flex flex-col lg:flex-row items-center">
    //       <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
    //         Statically Generated with Next.js.
    //       </h3>
    //       <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
    //         <a
    //           href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
    //           className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
    //         >
    //           Read Documentation
    //         </a>
    //         <a
    //           href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
    //           className="mx-3 font-bold hover:underline"
    //         >
    //           View on GitHub
    //         </a>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>

    // design 1: minimal modern
    <footer className="bg-slate-900 text-slate-300 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-blue-400" />
            <span className="font-semibold text-white">Synthax</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://github.com/Jacky-lim-data-analyst" className="hover:text-blue-400 transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jia-qi-lim-78b004105" className="hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://medium.com/@jq0112358" className="hover:text-blue-400 transition-colors">
              <FaMedium className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm">© 2025 All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
