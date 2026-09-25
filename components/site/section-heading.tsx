import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'start' | 'center'
  className?: string
}

export function SectionHeading({ index, eyebrow, title, description, align = 'start', className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('flex flex-col gap-5', align === 'center' && 'items-center text-center', className)}>
      <div className="flex items-center gap-4 text-sm text-gold">
        <span className="text-base font-light">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-gold/60" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="max-w-3xl text-balance text-3xl font-extralight leading-[1.4] md:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-xl text-pretty leading-loose text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  )
}
