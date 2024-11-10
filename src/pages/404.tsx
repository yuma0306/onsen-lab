/**
 * Next React
 */
import Head from "next/head";
/**
 * Components
 */
import Wrapper from "@/components/Wrapper/Wrapper";
import Header from '@/components/Header/Header'
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="404 | 温泉ラボ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="none" />
      </Head>
      <Wrapper>
        <Header />
        <p>404です。</p>
        <Footer />
      </Wrapper>
    </>
  );
}
