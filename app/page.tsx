import Image from "next/image";
import { Redirect_btn } from "./components/redirect_btn";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#191919] text-[#ECDBBA] overflow-hidden">

      {/* <!-- Hero Section --> */}
      <section className="relative bg-[191919] text-[#ECDBBA] overflow-hidden">

      {/* <section className="relative bg-gradient-to-r from-[#191919] to-[#2D4263] text-[#ECDBBA] overflow-hidden"> */}
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#C84B31] rounded-full opacity-20 animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#2D4263] rounded-full opacity-20 animate-bounce transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-20 left-1/2 w-20 h-20 bg-[#C84B31] rounded-full opacity-10 blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-[#2D4263] rounded-full opacity-10 blur-lg"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Empower Your Business with Authentic Customer Testimonials
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md text-[#ECDBBA]">
            Seamlessly collect, manage, and showcase customer reviews to build trust.
          </p>

          {/* Call to Action Button */}
          <Redirect_btn
            classname="bg-[#C84B31] text-[#ECDBBA] py-3 px-6 rounded-full hover:bg-[#2D4263] transition duration-300 shadow-xl transform hover:scale-105"
            value="Get Started for Free"
            redirect={`user/dashboard`}
          />

          {/* Feature Highlight */}
          <div className="mt-12 relative">
            <div className="h-48 w-48 mx-auto bg-[#191919] rounded-full flex items-center justify-center shadow-lg transform hover:rotate-3 transition-transform duration-500">
              <span className="text-3xl font-semibold text-[#C84B31]">Free Widget</span>
            </div>
            {/* Additional Decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-t-2 border-r-2 border-[#2D4263] rounded-full animate-spin"></div>
            </div>
          </div>
        </div>

        {/* Decorative SVG Wave */}
        <div className="absolute bottom-0 w-full">
          <svg className="w-full h-24" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" fill="#191919">
            <path d="M0,96L1200,0L1200,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section className="py-16 bg-[#191919] relative">
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#2D4263] rounded-full opacity-30 transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#C84B31] rounded-full opacity-30 transform translate-x-1/2"></div>
        <div className="container mx-auto px-6">

          {/* <!-- Feature 1 --> */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-[#191919] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 hover:shadow-[#C84B31]/50">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="h-64 bg-gradient-to-br from-[#191919] via-[#2D4263] to-[#C84B31] rounded-xl shadow-md flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 w-full h-full border-4 border-dashed border-[#C84B31] rounded-lg opacity-30 transform scale-95 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-[#C84B31] rounded-full opacity-20 transform -translate-x-10 -translate-y-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
                <span className="text-[#ECDBBA] text-2xl font-semibold z-10">Easy Submission</span>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#ECDBBA] mb-4 hover:text-[#C84B31] transition-colors duration-300">Streamlined Testimonial Submission</h2>
              <p className="text-[#ECDBBA] mb-6 hover:text-[#ECDBBA] transition-colors duration-300">Make it easy for your customers to share their experiences. Integrate our customizable form directly on your website.</p>
            </div>
          </div>

          {/* <!-- Feature 2 --> */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-[#191919] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 hover:shadow-[#2D4263]/50">
            <div className="md:w-1/2 md:order-2 mb-6 md:mb-0">
              <div className="h-64 bg-gradient-to-br from-[#191919] via-[#2D4263] to-[#C84B31] rounded-xl shadow-md flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 w-full h-full border-4 border-dotted border-[#2D4263] rounded-lg opacity-30 transform scale-95 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#2D4263] rounded-full opacity-20 transform translate-x-6 translate-y-6 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
                <span className="text-[#ECDBBA] text-2xl font-semibold z-10">Dashboard Control</span>
              </div>
            </div>

            <div className="md:w-1/2 md:pr-12 md:order-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#ECDBBA] mb-4 hover:text-[#2D4263] transition-colors duration-300">Manage Reviews with Ease</h2>
              <p className="text-[#ECDBBA] mb-6 hover:text-[#ECDBBA] transition-colors duration-300">Gain full control over your testimonials with our intuitive dashboard. View, manage, and even like or dislike reviews in one place.</p>
            </div>
          </div>

          {/* <!-- Feature 3 --> */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-[#191919] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 hover:shadow-[#C84B31]/50">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="h-64 bg-gradient-to-br from-[#191919] via-[#2D4263] to-[#C84B31] rounded-xl shadow-md flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 w-full h-full border-4 border-dashed border-[#C84B31] rounded-lg opacity-40 transform scale-95 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-[#C84B31] rounded-full opacity-20 transform -translate-x-6 -translate-y-6 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#2D4263] rounded-full opacity-30 transform translate-x-6 translate-y-6 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
                <span className="text-[#ECDBBA] text-2xl font-semibold z-10">Flexible Integration</span>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#ECDBBA] mb-4 hover:text-[#C84B31] transition-colors duration-300">Flexible Testimonial Integration</h2>
              <p className="text-[#ECDBBA] mb-6 hover:text-[#ECDBBA] transition-colors duration-300">Access testimonial data in JSON format, allowing you to design and integrate testimonials into your website as you see fit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#191919] text-[#ECDBBA] py-16 px-6">
        {/* <!-- Background Accents --> */}
        <div className="absolute top-0 left-0 w-36 h-36 bg-[#2D4263] rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C84B31] rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#2D4263] rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Connect and Contribute to <span className="text-[#C84B31]">Kudos Vault</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#ECDBBA]">
            We value your input! Send us an email to connect or contribute to our GitHub repository.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {/* <!-- Email Button --> */}
            <a
              href="mailto:ankitkuchara420@gmail.com"
              className="bg-[#C84B31] opacity-90 text-[#ECDBBA] py-3 px-6 rounded-full hover:bg-[#2D4263] transition duration-300 shadow-lg transform hover:scale-105"
            >
              Send Email
            </a>

            {/* <!-- GitHub Button --> */}
            <a
              href="https://github.com/ankit-369/get-reviews"
              target="_blank"
              className="bg-[#2D4263] opacity-90 text-[#ECDBBA] py-3 px-6 rounded-full hover:bg-[#C84B31] transition duration-300 shadow-lg transform hover:scale-105"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}