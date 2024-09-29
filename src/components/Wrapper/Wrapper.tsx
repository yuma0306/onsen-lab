/**
 * Style
 */
import styles from '@/components/Wrapper/Wrapper.module.scss';
/**
 * Font
 */
import { Noto_Serif_JP } from 'next/font/google';
const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  preload: true,
  weight: ['400', '500', '700'],
  display: 'swap',
});

interface Props {
  children: React.ReactNode;
  addClass?: string;
}

export default function Wrapper({ children, addClass = '' }: Props) {
  return (
    <>
      <div className={`${notoSerifJP.className} ${styles.wrapper} ${addClass}`}>
        { children }
      </div>
    </>
  )
}
