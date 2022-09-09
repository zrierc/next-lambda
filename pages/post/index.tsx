import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';

const Posts: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.title}>Hello from main Post page👋</h2>

        <p className={styles.description}>
          Add prefix to this page to see if dynamic routing is work 👀✨. <br />
          example:
          <code className={styles.code}>post/{`{your-prefix}`}</code>
        </p>
      </div>
    </div>
  );
};

export default Posts;
