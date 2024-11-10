/**
 * Next React
 */
import Head from "next/head";

/**
 * Components
 */
import Area from "@/components/Area/Area";
import Wrapper from "@/components/Wrapper/Wrapper";
import Kv from "@/components/Kv/Kv";
import Sc from "@/components/Sc/Sc";
import ScBlock from "@/components/ScBlock/ScBlock";
import Inner from "@/components/Inner/Inner";
import Header from '@/components/Header/Header'
import HeadingLv2 from '@/components/HeadingLv2/HeadingLv2'
import Bnr from "@/components/Bnr/Bnr";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>温泉ラボ</title>
        <meta name="description" content="あなたにピッタリの温泉が見つかる | 温泉ラボ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="none" />
      </Head>
      <Wrapper>
        <Header />
        <Kv />
        <Sc bgColor="primary02" bottomLarge>
          <Inner>
            <HeadingLv2>Yes・No 温泉診断</HeadingLv2>
            <Bnr />
          </Inner>
        </Sc>
        <Sc bgColor="primary" addClass="u-pt0" bottomSmall>
          <Inner>
            <ScBlock>
              <HeadingLv2>温泉ギャラリー</HeadingLv2>
              <Gallery />
            </ScBlock>
          </Inner>
        </Sc>
        <Sc bgColor="primary02">
          <Inner>
            <HeadingLv2>都道府県から温泉を探す</HeadingLv2>
            <Area />
          </Inner>
        </Sc>
        <Footer />
      </Wrapper>
    </>
  );
}
