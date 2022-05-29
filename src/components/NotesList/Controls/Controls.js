import styles from './Controls.module.css';

const Controls = (props) => {
  return (
    <div className={styles.controls}>
      <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Create</title>
          <path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none"
                stroke="#5c5c5c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
          <path
            d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" fill="#5c5c5c"/>
        </svg>
      </div>
      <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Folder</title>
          <path
            d="M440 432H72a40 40 0 01-40-40V120a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H440a40 40 0 0140 40v240a40 40 0 01-40 40zM32 192h448"
            fill="none" stroke="#5c5c5c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
      <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Funnel</title>
          <path
            d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z"
            fill="none" stroke="#5c5c5c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  )
}

export default Controls;