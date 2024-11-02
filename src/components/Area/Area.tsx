/**
 * React Next
 */
import Image from "next/image";
import { useState, useEffect } from "react";
/**
 * component
 */
import AreaBtn from '@/components/AreaBtn/AreaBtn';
import Modal from '@/components/Modal/Modal';
/**
 * style
 */
import styles from '@/components/Area/Area.module.scss';
/**
 * Data
 */
import areaJson from '@/data/area.json';

const areaData: {[key: string]: {[key: string]: string }} = areaJson;

export default function Area() {
  const [active, setActive] = useState<boolean>(false);
  const [areaObj, setAreaObj] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [active]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (active && areaObj) {
      setAreaObj(null);
      setActive(false);
    }
    const areaKey = e.currentTarget.getAttribute('data-area');
    if (areaKey && areaData[areaKey]) {
      setAreaObj(areaData[areaKey]);
      setActive(true);
    }
  }

  return (
    <div className={styles.area}>
      <Image
        src="/img/ill-japan.png"
        alt="地図"
        width="680"
        height="569"
        className={styles.area__img}
      />
      <AreaBtn data="kantou" onClick={handleClick} text="関東" />
      <AreaBtn data="touhoku" onClick={handleClick} text="北海道・東北" />
      {active && areaObj && (
        <Modal active={active} obj={areaObj} setActive={setActive} />
      )}
    </div>
  )
}
