
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
   return (
      <div className={styles.container}>
         <div className={styles.textContainer}>
            <h1 className={styles.h1}>Сладкая жизнь!</h1>
            <p>Выбери себе сладость - в радость <Link href={'./components/pages/Catalog'} >стрелка</Link></p>
         </div>
      </div>
   );
}
