import styles from '@/components/BtnReturn/BtnReturn.module.scss';

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function BtnReturn({ onClick, children }:Props ) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.btnReturn}
    >
      { children }
    </button>
  )
}
