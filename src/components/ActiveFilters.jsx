import FilterButton from './FilterButton.jsx';
import styles from './activeFilters.module.css';

export default function ActiveFilters({ filters, onClear, onClearAll }) {
  return (
    <div className={styles.activeFilters}>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <FilterButton key={filter} filter={filter} onClear={onClear} />
        ))}
      </div>
      <div className={styles.clear}>
        <p onClick={onClearAll}>Clear</p>
      </div>
    </div>
  )
}