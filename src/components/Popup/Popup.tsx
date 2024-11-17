/**
 * Next React
 */
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  closePopup: () => void;
}

export default function Popup( { closePopup }: Props ) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    }}>
      <div onClick={closePopup}>閉じる</div>
      <Link href="/shindan/">
        <Image
          src="/img/bnr-shindan.png"
          alt="あなたにピッタリの温泉は？Yes・No温泉診断"
          width={300}
          height={250}
        />
      </Link>
    </div>
  )
}

