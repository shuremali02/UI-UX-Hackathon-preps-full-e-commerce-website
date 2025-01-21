import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";


export default function ContactPage() {
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className=" w-full max-w-5xl p-6 md:flex gap-8">
        {/* Contact Info Section */}
        <div className=" p-6 rounded shadow-lg flex-1">
          <h3 className="text-lg font-bold text-red-500 mb-4">Contact Info</h3>
          <div className="space-y-6">
            {/* Call Us */}
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-red-500 text-white p-3 rounded-full">
                  <FiPhone size={24}/>
                </div>
                <h4 className="text-md font-bold">Call Us</h4>
              </div>
              <p className="text-sm text-gray-600">
                We are available from 9:00 a.m. to 6:00 p.m.
              </p>
              <p className="text-sm text-gray-800 font-semibold">+92 310 0448877</p>
            </div>

            {/* Write Email */}
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-red-500 p-3 text-white rounded-full">
                  <MdOutlineMailOutline size={24}/>
                </div>
                <h4 className="text-md font-bold">Write Email</h4>
              </div>
              <p className="text-sm text-gray-600">
                If you have any queries or would like to contact our team:
              </p>
              <p className="text-sm text-gray-800 font-semibold">
                support@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 rounded shadow-md p-6">
          <h3 className="text-lg font-bold text-red-500 mb-4">Send Us a Message</h3>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
              
                  className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
               
                  className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  
                  className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Address
                </label>
                <input
                  type="text"
                  id="address"
               
                  className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
            
                className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 text-white font-medium py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
