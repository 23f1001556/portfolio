
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Background Image (only for projects pages) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/quizmaster/bg-image-15.jpg"
          alt="Background"
          fill
          className="object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-80"
        />
      </div>
      {/* Page Content */}
      <main className="flex-grow pt-0 px-4 md:px-0 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
