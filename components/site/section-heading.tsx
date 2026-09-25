import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ index, eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('flex flex-col gap-5', align === 'center' && 'items-center text-center', className)}>
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold">
        <span className="font-serif text-base italic tracking-normal">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-gold/60" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="max-w-3xl text-balance font-serif text-4xl font-light leading-[1.05] md:text-6xl">{title}</h2>
      {description ? (
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  )
}
