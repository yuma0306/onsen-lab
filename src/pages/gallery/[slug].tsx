/**
 * Next React
 */
import Head from 'next/head';
/**
 * Constants
 */
import { metaTitle, metaDesc } from '@/constants/meta';
/**
 * Components
 */
import Wrapper from '@/components/Wrapper/Wrapper';
import Sc from '@/components/Sc/Sc';
import Inner from '@/components/Inner/Inner';
import Header from '@/components/Header/Header';
import Slider from '@/components/Slider/Slider';
/**
 * Export
 */
export default function GalleryDetail() {
  return (
    <>
      <Head>
        <title>{`詳細ページタイトル${metaTitle}`}</title>
        <meta name="description" content={`詳細ページディスクリプション${metaDesc}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="none" />
      </Head>
      <Wrapper>
        <Header />
        <Sc>
          <Inner>
            <Slider />
          </Inner>
        </Sc>
      </Wrapper>
    </>
  );
}
