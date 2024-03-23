import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

import Logo from '@/app/logo.png'
import type { SettingsPayload } from '@/types'

import styles from './Footer.module.css'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  return (
    <footer>
      <div className={styles.mainLayout}>
        <div className={styles.innerLayout}>
          <div className={styles.footerMenu}>
            <div>
              <Image className={styles.logo} src={Logo} alt="Company Logo" />
            </div>
            <div className={styles.social}>
              <FaFacebook className={styles.socialItem} size={30} />
              <FaTwitter className={styles.socialItem} size={30} />
              <FaLinkedin className={styles.socialItem} size={30} />
            </div>
          </div>
          <div className={styles.footerMenu}>
            <h3>Quick Links</h3>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
          </div>
          <div className={styles.footerMenu}>
            <h3>Learn</h3>
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
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms of Services</Link>
            </li>
          </div>
        </div>
      </div>
    </footer>
  )
}
