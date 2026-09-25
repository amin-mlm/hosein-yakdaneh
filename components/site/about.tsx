import Image from 'next/image'
import { toFa } from '@/lib/fa'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const pillars = [
  {
    title: 'فلسفه',
    body: 'خویشتن‌داری به جای آرایه. اجازه می‌دهیم سنگ طبیعی، چوب و نور، احساس فضا را روایت کنند.',
  },
  {
    title: 'تجربه',
    body: 'بیش از پانزده سال طراحی و اجرای خانه‌ها، دفاتر اداری و فضاهای تجاری در سراسر ایران.',
  },
  {
    title: 'فرایند',
    body: 'یک تیم پاسخگو، از ایده و تصویرسازی سه‌بعدی تا اجرا و نظارت کارگاهی.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal className="relative">
            <div aria-hidden="true" className="absolute -bottom-5 -start-5 h-full w-full rounded-2xl border border-gold/30" />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-foreground/10">
              <Image
                src="/portrait.png"
                alt="تصویر حسین یکدانه در استودیو."
                width={1122}
                height={1402}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -end-3 top-10 rounded-xl border border-foreground/10 bg-background/60 px-5 py-4 backdrop-blur-xl md:-end-8">
              <p className="text-lg font-medium">حسین یکدانه</p>
              <p className="mt-1 text-xs text-muted-foreground">بنیان‌گذار و مدیر طراحی</p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center gap-12 lg:col-span-7">
          <SectionHeading
            index="۰۱"
            eyebrow="استودیو"
            title={
              <span id="about-title">
                معماری‌ای چنان سنجیده که <em className="font-normal text-gold">ناگزیر</em> می‌نماید؛ ساخته برای
                زیستن.
              </span>
            }
            description="کارمان را به‌عنوان آتلیه‌ای کوچک آغاز کردیم؛ شیفته‌ی این‌که یک اتاق از صبح تا شب چگونه دگرگون می‌شود. امروز محیط‌هایی کامل را طراحی، اجرا و نظارت می‌کنیم، اما هر پروژه هنوز با همان پرسش آغاز می‌شود: این فضا باید چه حسی به شما بدهد؟"
          />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 120} className="bg-background p-7">
                <p className="text-sm text-gold">{toFa(`0${i + 1}`)}</p>
                <h3 className="mt-3 text-2xl font-light">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
