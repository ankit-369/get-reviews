import Image from "next/image";
// import { Appbar } from "./components/appbar";
import { Redirect_btn } from "./components/redirect_btn";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* <!-- Hero Section --> */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Empower Your Business with Authentic Customer Testimonials</h1>
          <p className="text-gray-600 mb-8">Seamlessly collect, manage, and showcase customer reviews to build trust.</p>

          {/* <button onClick={() => router.push('user/dashboard')} className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500">Get Started for Free</button> */}
          {/* <span className=""> */}
            <Redirect_btn classname="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500" value="Get Started for Free" redirect={`user/dashboard`} />
          {/* </span> */}
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



    </div>
  );
}
