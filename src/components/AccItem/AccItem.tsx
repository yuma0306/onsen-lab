/**
 * React Next
 */
import { useState, useRef, useEffect } from 'react';
/**
 * style
 */
import styles from './AccItem.module.scss';

interface Props {
  heading: string;
  body: string;
  index: number;
}

export default function AccItem({ heading, body, index }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const refBody = useRef<HTMLDListElement>(null);
  // 初回レンダリング。一番最初の要素だけ開く
  useEffect(() => {
    index === 0 && setIsActive(true);
  }, []);
  const hancleClick = () => {
    setIsActive(!isActive);
  }
  return (
    <>
      <dl
        key={index}
        className={isActive ? `${styles.accItem} ${styles['accItem--active']}` : `${styles.accItem}`}
      >
        <dt onClick={hancleClick} className={styles.accItem__heading}>{heading}</dt>
        <dd
          className={styles.accItem__body}
          ref={refBody}
          style={{
            height: isActive && refBody.current ? `${refBody.current.scrollHeight}px` : '0px',
          }}
        >
          {body}
        </dd>
      </dl>
    </>
  )
}
