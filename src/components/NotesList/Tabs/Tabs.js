import styles from "./Tabs.module.css";
import classNames from "classnames";

const Tabs = ({tab, setTab}) => {
  return (
    <div className={styles.tabs}>
      <div className={classNames(styles.tabIcon, {[styles.active]: tab === 'home'})} onClick={() => setTab('home')}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Home</title>
          <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                fill="none" stroke="#5c5c5c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
          <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="#5c5c5c"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
      <div className={classNames(styles.tabIcon, {[styles.active]: tab === 'search'})} onClick={() => setTab('search')}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Search</title>
          <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="#5c5c5c"
                strokeMiterlimit="10" strokeWidth="32"/>
          <path fill="none" stroke="#5c5c5c" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                d="M338.29 338.29L448 448"/>
        </svg>
      </div>
      <div className={classNames(styles.tabIcon, {[styles.active]: tab === 'star'})} onClick={() => setTab('star')}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Star</title>
          <path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="#5c5c5c"
                strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  )
}

export default Tabs;