/**
 * Next React
 */
import Head from "next/head";
/**
 * Components
 */
import Wrapper from "@/components/Wrapper/Wrapper";
import Main from '@/components/Main/Main';
import Sc from "@/components/Sc/Sc";
import Inner from "@/components/Inner/Inner";
import Header from '@/components/Header/Header';
import Box from '@/components/Box/Box';
import Tool from '@/components/Tool/Tool';
import HeadingLv1 from "@/components/HeadingLv1/HeadingLv1";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";

export default function Shindan() {
  return (
    <>
      <Head>
        <title>温泉ラボ</title>
        <meta name="description" content="あなたにピッタリの温泉が見つかる。温泉ラボ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <HeadingLv1>Yes・No 温泉診断</HeadingLv1>
        <Breadcrumb item={['トップ', 'Yes・No 温泉診断']} />
        <Main>
          <Sc addClass="u-pt0 u-mt0">
            <Inner>
              <Box>
                <Tool />
              </Box>
            </Inner>
          </Sc>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}
