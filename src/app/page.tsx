import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
    <div className={styles.singlePage}>
    <div className={styles.transitional}></div>
<Image src="/skies/first.jpg" alt="Picture of the author" width={1920/2} height={1080} />
<div className={styles.poetry}>
<div>
E'rywhere God's skies are a jewel for all to see</div>
</div></div>
    </main>
  )
}
