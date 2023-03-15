import styles from './job.module.css';

export default function Job({ job, onClick }) {
    return (
      <div className={styles.jobCard} style={{ borderLeft: job.featured && '5px solid #5CA5A5' }}>
        <div className={styles.jobHeader}>
          <img src={job.logo} alt="company logo" />
          <div className={styles.companyDetails}>
            <p className={styles.company}>{job.company}</p>
              {job.new && <p className={styles.new}>New!</p>}
              {job.featured && <p className={styles.featured}>Featured</p>}
          </div>
          <h1>{job.position}</h1>
          <div className={styles.jobDetails}>
            <p>{job.postedAt}</p>
            <span></span>
            <p>{job.contract}</p>
            <span></span>
            <p>{job.location}</p>
          </div>
        </div>
        <div className={styles.jobInfo}>
          <p onClick={() => onClick(job.role)}>{job.role}</p>
          <p onClick={() => onClick(job.level)}>{job.level}</p>
          {job.languages.map((languages) => (
            <p onClick={() => onClick(languages)} key={languages}>{languages}</p>
          ))}
          {job.tools.map((tools) => (
            <p onClick={() => onClick(tools)}key={tools}>{tools}</p>
          ))}
        </div>
      </div>
    );
  }