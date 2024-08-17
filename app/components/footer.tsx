export function Footer(){
    return (
        // {/* <!-- Footer Section --> */}
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
    )

}