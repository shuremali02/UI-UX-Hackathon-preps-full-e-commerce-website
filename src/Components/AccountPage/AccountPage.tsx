"use client";

export default function EditProfile() {
  return (
    <div className="min-h-screen w-full md:w-3/4 md:pt-12">
      <div className="bg-white p-6 rounded-lg shadow-md ">
        {/* Form Header */}
        <h2 className="text-xl font-bold text-red-500 mb-4">Edit Your Profile</h2>

        {/* Form Fields */}
        <form>
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Md"
                className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Rimel"
                className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          {/* Email and Address Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="rimel111@gmail.com"
                className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Kingston, 5326, United State"
                className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          {/* Password Change Fields */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Password Changes</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  placeholder="Current Password"
                  className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="New Password"
                  className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm New Password"
                  className="w-full bg-gray-100 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-5 justify-end items-center">
            <button
              type="button"
              className="text-red-500 font-medium hover:underline focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white font-medium py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
