/**
 * React Next
 */
import Link from 'next/link';
import Image from 'next/image';
/**
 * Style
 */
import styles from '@/components/Modal/Modal.module.scss';
/**
 * Type
 */
interface Props {
  active: boolean;
  obj: { [key: string]: string } | null;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ active, obj, setActive }: Props) {
  if (!active || !obj) {
    return null;
  }
  const handleClose = () => {
    setActive(false);
  };
  return (
    <>
      <div className={styles.overlay} onClick={handleClose}></div>
      <div className={styles.modal}>
        <button type='button' className={styles.modal__close} onClick={handleClose}>
          <Image
            src='/img/icon-close.svg'
            alt='閉じる'
            width="40"
            height="40"
            className={styles.modal__closeIcon}
          />
        </button>
        <ul className={styles.modal__list}>
          {Object.entries(obj).map(([key, value], index) => (
            <li className={styles.modal__item} key={index}>
              <Link href={`/gallery/${key}`} className={styles.modal__link}>
                <Image
                  src={`/img/img-${key}.jpg`}
                  alt={value}
                  width="288"
                  height="188"
                  className={styles.modal__img}
                />
                <span className={styles.modal__text}>{value}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
