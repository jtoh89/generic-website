import styles from './Header.module.css'

interface HeaderProps {
  centered?: boolean
  description?: any[] | string

  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${styles.pageHeader} ${centered ? 'text-center' : ''}`}>
      {/* Title */}
      {title && <h1 className={styles.pageTitle}>{title}</h1>}
      {/* Description */}
      {description && <div className={styles.pageSubtitle}>{description}</div>}
    </div>
  )
}
