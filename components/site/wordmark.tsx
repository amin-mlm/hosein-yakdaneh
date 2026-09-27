import Image from 'next/image'
import { asset } from '@/lib/asset'

export function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-3 leading-none" aria-label="حسین یکدانه، بازگشت به بالای صفحه">
      <Image src={asset('/brand/logo.png')} alt="" width={392} height={368} className="h-10 w-auto md:h-11" priority />
      <span aria-hidden="true" className="h-9 w-px bg-gold/40" />
      <span className="flex flex-col">
        <span className="text-lg font-semibold">حسین یکدانه</span>
        <span className="mt-1.5 text-[0.7rem] text-muted-foreground">معمار و طراح داخلی</span>
      </span>
    </a>
  )
}
