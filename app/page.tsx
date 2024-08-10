"use client"
import Image from "next/image";
// import { Appbar } from "./components/appbar";
import { useRouter } from 'next/navigation'
import Navbar from "./components/navbar";


export default function Home() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-100">
    {/* Header */}
    {/* <Appbar></Appbar> */}
<Navbar></Navbar>
    {/* Hero Section */}
    {/* <section className=" mx-auto bg-slate-900 px py-16 text-center">

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Collect and showcase testimonials</h1>
      <p className="text-xl mb-8">Boost your credibility with authentic customer reviews</p>
      <button onClick={()=>router.push('user/dashboard')} className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">Get Started for Free</button>
    </section> */}

    {/* Features Section */}
    {/* <section className="text-gray-600 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Easy Collection</h3>
            <p>Gather testimonials effortlessly with our user-friendly tools</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Customizable Display</h3>
            <p>Create beautiful, branded testimonial walls for your site</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Insightful Analytics</h3>
            <p>Track the impact of your testimonials with detailed metrics</p>
          </div>
        </div>
      </div>
    </section> */}

    {/* CTA Section */}
    {/* <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers today</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md text-lg hover:bg-gray-100">Sign Up Now</button>
      </div>
    </section> */}

    {/* Footer */}
    {/* <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">© 2024 YourCompany. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </footer> */}

{/* <!-- Hero Section --> */}
  <section className="bg-white">
    <div className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Empower Your Business with Authentic Customer Testimonials</h1>
      <p className="text-gray-600 mb-8">Seamlessly collect, manage, and showcase customer reviews to build trust.</p>
      <button  onClick={()=>router.push('user/dashboard')} className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500">Get Started for Free</button>
      <div className="mt-8">
        <img src="https://via.placeholder.com/800x400" alt="Customer Reviews" className="mx-auto rounded-lg shadow-md" />
      </div>
    </div>
  </section>

  {/* <!-- Features Section --> */}
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      
      {/* <!-- Feature 1 --> */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="https://via.placeholder.com/500x300" alt="Testimonial Submission" className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Streamlined Testimonial Submission</h2>
          <p className="text-gray-600 mb-6">Make it easy for your customers to share their experiences. Integrate our customizable form directly on your website.</p>
        </div>
      </div>

      {/* <!-- Feature 2 --> */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:order-2 mb-6 md:mb-0">
          <img src="https://via.placeholder.com/500x300" alt="Dashboard Management" className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pr-12 md:order-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Reviews with Ease</h2>
          <p className="text-gray-600 mb-6">Gain full control over your testimonials with our intuitive dashboard. View, manage, and even like or dislike reviews in one place.</p>
        </div>
      </div>

      {/* <!-- Feature 3 --> */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="https://via.placeholder.com/500x300" alt="Testimonial Integration" className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Flexible Testimonial Integration</h2>
          <p className="text-gray-600 mb-6">Access testimonial data in JSON format, allowing you to design and integrate testimonials into your website as you see fit.</p>
        </div>
      </div>

    </div>
  </section>

  {/* <!-- Footer Section --> */}
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* <!-- Logo Section --> */}
        <div className="flex items-center justify-center mb-6 md:mb-0">
            <a href="http://localhost:3000" className="relative p-4">
                <span className="text-2xl font-bold tracking-wide text-white">
                Kudos Vault                </span>
                <div className="absolute top-3 left-3 w-16 h-16 border-t-4 border-l-4 border-red-500 transform -translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-3 right-3 w-16 h-16 border-b-4 border-r-4 border-red-500 transform translate-x-4 translate-y-4"></div>
            </a>
        </div>
        {/* <!-- Navigation Links --> */}
        <div className="flex space-x-6">
            <a href="https://github.com/ankit-369/get-reviews" target="_blank" className="text-gray-400 hover:text-white">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577v-2.24c-3.338.726-4.043-1.393-4.043-1.393-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.085 1.837 1.237 1.837 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.42-1.302.762-1.602-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.467-2.38 1.235-3.22-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.303 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.005.404 2.293-1.553 3.297-1.23 3.297-1.23.655 1.653.244 2.876.12 3.18.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.623-5.476 5.92.431.371.824 1.1.824 2.218v3.29c0 .32.192.694.8.577C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            </a>
            <a href="https://twitter.com/_x_ankit" target="_blank" className="text-gray-400 hover:text-white">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.575 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.923 2.205-4.923 4.923 0 .385.045.76.127 1.122-4.092-.205-7.719-2.164-10.148-5.144-.424.729-.666 1.577-.666 2.483 0 1.71.87 3.217 2.188 4.099-.807-.025-1.568-.247-2.228-.616v.062c0 2.388 1.698 4.381 3.946 4.831-.413.111-.849.171-1.296.171-.314 0-.622-.03-.923-.086.623 1.944 2.428 3.355 4.568 3.395-1.674 1.309-3.778 2.087-6.065 2.087-.393 0-.779-.023-1.158-.067 2.161 1.39 4.723 2.201 7.482 2.201 8.98 0 13.893-7.443 13.893-13.893 0-.21-.004-.42-.014-.63.952-.688 1.781-1.55 2.438-2.533z"/>
                </svg>
            </a>
        </div>
    </div>
    {/* <!-- Footer Bottom --> */}
    <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Kudos Vault. All rights reserved.</p>
    </div>
</footer>

  </div>
  );
}
