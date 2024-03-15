import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { SettingsPayload } from '@/types'
import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])

  return (
    <footer>
      <div className={styles.mainLayout}>
        <div className={styles.innerLayout}>
          <div className={styles.footerLogo}>
            <div className={styles.logo}>
              {/* <Image className={styles.video} src={Logo} alt="" /> */}
            </div>
            <div className={styles.social}>
              {/* <Image src={FaceBook} alt="" />
              <Image src={Twitter} alt="" />
              <Image src={LinkedIn} alt="" />
              <Image src={Youtube} alt="" /> */}
            </div>
          </div>
          <div className={styles.footerMenu}>
            <h3>Quick Links</h3>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
          </div>
          <div className={styles.footerMenu}>
            <h3>Learn</h3>
            <li>
              <Link href="/">Help Center</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </div>
          <div className={styles.footerMenu}>
            <h3>Company</h3>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of Services</Link>
            </li>
          </div>
        </div>
      </div>
    </footer>
  )
}
