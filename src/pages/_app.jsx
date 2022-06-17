import "@styles/tailwind.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

function Application({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container mx-auto h-full">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default Application;
