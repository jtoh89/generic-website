import { CustomPortableText } from '@/components/shared/CustomPortableText'

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
    <div
      className={`page-header ${
        centered
          ? 'text-center'
          : // 'w-5/6 lg:w-3/5'
            ''
      }`}
    >
      {/* Title */}
      {title && <h1 className="page-title">{title}</h1>}
      {/* Description */}
      {description && <div className="page-subtitle">{description}</div>}
    </div>
  )
}
