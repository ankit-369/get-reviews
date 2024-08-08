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
    <section className=" mx-auto bg-slate-900 px py-16 text-center">

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Collect and showcase testimonials</h1>
      <p className="text-xl mb-8">Boost your credibility with authentic customer reviews</p>
      <button onClick={()=>router.push('user/dashboard')} className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">Get Started for Free</button>
    </section>

    {/* Features Section */}
    <section className="text-gray-600 py-16">
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
    </section>

    {/* CTA Section */}
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers today</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md text-lg hover:bg-gray-100">Sign Up Now</button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
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
    </footer>
  </div>
  );
}
