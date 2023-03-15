import styles from './filterButton.module.css';
import clearIcon from '../assets/icon-remove.svg';

export default function FilterButton({ filter, onClear }) {
  return (
    <div className={styles.filterButton}>
      <p>{filter}</p>
      <img src={clearIcon} alt="clear" onClick={() => onClear(filter)} />
    </div>
  );
}