// import React from "react";

export default function TestForm() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Include your header component */}
      {/* Assuming you have a Header component */}
      {/* <Header /> */}

      {/* CONTENT */}
      <div className="flex justify-center md:pl-64 py-4">
        <div className="bg-slate-100 p-5 px-5 rounded-md border">
          <form className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="text-3xl font-medium mb-5">
              Login into your account
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-center justify-between"></div>
            <button
              type="submit"
              name="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500"></p>
            {/* Output the error message if it exists */}
            {/* Replace this part with your state management (e.g., Redux, React context) */}
          </form>
        </div>
      </div>
    </div>
  );
}
