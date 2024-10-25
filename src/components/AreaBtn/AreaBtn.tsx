/**
 * style
 */
import styles from '@/components/AreaBtn/AreaBtn.module.scss';

interface Props {
  data: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export default function AreaBtn({ data, onClick, text }: Props) {
  return (
    <button className={ `${styles.areaBtn} ${styles[`areaBtn--${data}`]} `} type="button" data-area={data} onClick={onClick}>
      {text}
    </button>
  )
}
