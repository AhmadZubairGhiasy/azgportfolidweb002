import "@/styles/globals.css";
import SiteFooter from "@/components/footer";
import NavBar from "@/components/navbar";

export default function App({ Component, pageProps }) {
  return <>
    <NavBar/>
    <Component {...pageProps} />
    <SiteFooter/>
  </>;
}
