import "@styles/tailwind.css";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

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
