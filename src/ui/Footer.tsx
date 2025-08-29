function Footer() {
  return (
    <footer className="m-4 rounded-lg bg-white shadow-sm dark:bg-gray-50">
      <div className="mx-auto w-full max-w-(--breakpoint-xl) p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="dark:text-dark self-center text-2xl font-semibold whitespace-nowrap">
            Oday
          </span>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Licensing
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Oday™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
