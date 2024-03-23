'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'

import Logo from '@/app/logo.png'
import type { MenuItem, SettingsPayload } from '@/types'

import styles from './Navbar.module.css'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  const [showSlider, toggleSlider] = useState(false)

  return (
    <div className={styles.mainLayout}>
      <div className={styles.mobileNav}>
        <Link href="/" onClick={() => toggleSlider(false)}>
          <Image className={styles.logo} src={Logo} alt="" />
        </Link>
        <FaBars
          className={styles.hamburger}
          onClick={() => {
            toggleSlider(true)
          }}
          size={20}
        />
      </div>

      <div
        className={
          showSlider
            ? `${styles.innerLayout} ${styles.active}`
            : `${styles.innerLayout} `
        }
      >
        <div className={styles.navCloseContainer}>
          {showSlider && (
            <AiOutlineClose
              className={styles.navClose}
              onClick={() => toggleSlider(false)}
            />
          )}
        </div>
        <Link href="/" onClick={() => toggleSlider(false)}>
          <Image className={styles.logo} src={Logo} alt="" />
        </Link>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/how-it-works" onClick={() => toggleSlider(false)}>
                How it works
              </Link>
            </li>
            <li>
              <Link href="/pricing" onClick={() => toggleSlider(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => toggleSlider(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => toggleSlider(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className={styles.contact}>Work with us</button>
        </div>
      </div>
    </div>
  )

  // return (
  //   // <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
  //   <div>
  //     <div className={styles.test}>
  //       {menuItems &&
  //         menuItems.map((menuItem, key) => {
  //           const href = resolveHref(menuItem?._type, menuItem?.slug)
  //           if (!href) {
  //             return null
  //           }
  //           return (
  //             <Link
  //               key={key}
  //               className={`text-lg hover:text-black md:text-xl ${
  //                 menuItem?._type === 'home'
  //                   ? 'font-extrabold text-black'
  //                   : 'text-gray-600'
  //               }`}
  //               href={href}
  //             >
  //               {menuItem.title}
  //             </Link>
  //           )
  //         })}
  //     </div>
  //   </div>
  // )
}
