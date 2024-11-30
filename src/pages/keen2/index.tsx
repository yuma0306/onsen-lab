/**
 * Next React
 */
import Head from "next/head";
// import { useState, useEffect, useRef } from 'react';
/**
 * Components
 */
import Wrapper from "@/components/Wrapper/Wrapper";
import Inner from "@/components/Inner/Inner";
import Header from '@/components/Header/Header'
import Footer from "@/components/Footer/Footer";
import Keen from "@/components/Keen/Keen";
import Link from 'next/link'

export default function Register() {
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
          <Inner>
            <Keen type={1} space={40} count={6} />
            <Link href="/keen">リンク</Link>
          </Inner>
        <Footer />
      </Wrapper>
    </>
  )
}
