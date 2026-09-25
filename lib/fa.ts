const persianDigits = '۰۱۲۳۴۵۶۷۸۹'

export function toFa(value: number | string) {
  return String(value).replace(/\d/g, (d) => persianDigits[Number(d)])
}
