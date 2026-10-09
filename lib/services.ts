// Single source of truth for the services list, shared by the Services section
// and the JSON-LD structured data.
export type Service = {
  title: string
  body: string
}

export const services: Service[] = [
  { title: 'طراحی داخلی', body: 'برنامه‌ریزی فضا، پالت متریال، طراحی نورپردازی و نجاری سفارشی.' },
  { title: 'طراحی نما و محوطه', body: 'نما، محوطه‌سازی و فضای زندگی بیرونی که زبان طراحی داخلی را ادامه می‌دهند.' },
  { title: 'اجرای داخلی', body: 'اجرای کلید در دست با استادکاران زبده، از سنگ‌کاری تا نازک‌کاری.' },
  { title: 'نظارت پروژه', body: 'کنترل کیفیت در محل، زمان‌بندی و هماهنگی پیمانکاران.' },
  { title: 'بازسازی', body: 'دگرگونی خانه‌ها و دفاتر موجود، با احترام به ساختار آن‌ها.' },
  { title: 'مشاوره طراحی', body: 'جلسات متمرکز برای انتخاب متریال، چیدمان و جهت‌گیری طراحی.' },
]
