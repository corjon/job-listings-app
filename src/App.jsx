import useSWR from 'swr';
import { useState } from 'react';
import Job from './components/Job.jsx';

import ActiveFilters from './components/ActiveFilters.jsx';

export default function App() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  
  const { data, error, isLoading } = useSWR('/data.json', fetcher);

  const [filters, setFilters] = useState([]);

  // Add a filter to the filters array when a filter button is clicked
  function handleClick(value) {
    // if value is not already in filters array
    if (!filters.includes(value)) {
      // create new array 
      setFilters([...filters, value]);
    }
  }

  // Clear all filters from filters array
  function handleClearAll() {
    setFilters([]);
  }

  // Clear a single filter from filters array
  function handleClear(value) {
    // if item in filters array is not equal to value then add it to updatedFilters
    const updatedFilters = filters.filter(filter => filter !== value);
    setFilters(updatedFilters);
  }

  // called on first render and when filters state changes (handleClick, handleClear, handleClearAll)
  // if filters array is not empty filter data based on filters array 
  const filteredData = filters.length !== 0 ? data.filter((job) =>
    filters.every(filter =>
      job.role === filter ||
      job.level === filter ||
      job.languages.includes(filter) ||
      job.tools.includes(filter)
    )
  ) : data;

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <>
      <div className="bgHeader"></div>
      <main style={filters.length !== 0 ? {top: '120px'} : undefined}>
        {/* Passing event listeners to child components. When child triggers an event it is propagated to the parent where it is handled */}
        {filters.length !== 0 && <ActiveFilters filters={filters} onClear={handleClear} onClearAll={handleClearAll} />}
        {filteredData.map((job) => (
          <Job key={job.id} job={job} onClick={handleClick} />
        ))}
      </main>
    </>
  );
}
