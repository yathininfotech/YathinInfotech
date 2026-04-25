import Head from "next/head";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/Home/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="Homepage" content="Homepage" />
      </Head>
      <Navbar />
      <HomePage/>
      <Footer />
    </div>
  );
}
