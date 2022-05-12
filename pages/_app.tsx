import "../css/input.css";
import "../css/output.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="my-14 grid grid-cols-12 gap-6 px-5 sm:px-20 md:mb-16 md:px-32 lg:mb-0 lg:px-36 xl:px-48 ">
        {/* // do this div style later (after putting the content) */}
        <div className="col-span-12 h-full rounded-2xl bg-white p-4 text-center text-base shadow-custom-light dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-3 ">
          {/* //!sidebar */}
          <Sidebar />
        </div>
        <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl bg-white shadow-custom-light dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-9">
          {/* //!navbar */}
          <Navbar />
          {/* //!about */}
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
