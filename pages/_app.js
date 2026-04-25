import "@/styles/globals.css";
import Layout from "./components/_App/Layout";
import "@/styles/companies.css"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
