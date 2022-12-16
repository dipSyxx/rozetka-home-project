/* eslint-disable react/forbid-component-props */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './Logo.module.sass'

export const Logo = () => {
  return (
    <Link className={styles.logo} href="/">
      <Image alt="Rozetka" height={40} placeholder="empty" priority={true} src="/Logo/logo.svg" width={240} />
    </Link>
  )
}

// eslint-disable-next-line import/no-default-export
export default Logo
