/**
 * style
 */
import styles from './AccList.module.scss';
/**
 * component
 */
import AccItem from '@/components/AccItem/AccItem';
/**
 * interface
 */
interface Props {
  list: {
    heading: string;
    body: string;
  }[];
}

export default function AccList({ list }: Props) {
  return (
    <div className={styles.AccList}>
      {list && list.map((item, index) => {
        return (
          <AccItem
            key={index}
            heading={item.heading}
            body={item.body}
            index={index}
          />
        );
      })}
    </div>
  );
}
