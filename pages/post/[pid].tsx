import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={styles.main}>
      <h3 className={styles.description}>Hello from Post Page number {pid}</h3>
    </div>
  );
};

export default Post;
