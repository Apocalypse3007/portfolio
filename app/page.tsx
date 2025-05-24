import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import SocialBar from "../components/SocialBar";



/**
 * Main portfolio page
 * Uses shadcn/ui and Tailwind for layout and responsiveness
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 md:px-0">
      {/* About section */}
      <div className="w-full max-w-2xl mt-8">
        <About />
      </div>

      {/* Experience section */}
      <div className="w-full max-w-2xl mt-12">
        <Experience />
      </div>

      {/* Education section */}
      <div className="w-full max-w-2xl mt-12">
        <Education />
      </div>

      {/* Skills section */}
      <div className="w-full max-w-2xl mt-12">
        <Skills />
      </div>

      {/* Social/contact bar at the bottom */}
      <div className="w-full max-w-2xl mt-16 mb-8">
        <SocialBar />
      </div>
    </main>
  );
}
