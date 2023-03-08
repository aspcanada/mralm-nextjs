export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export function currencyFormat(num: number) {
  if (num) 
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  
  return '$0'
}
