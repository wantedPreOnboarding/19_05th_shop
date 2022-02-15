export default function dateFormatting(date: string): string {
  const formatDigits = (num: number) => (num < 10 ? '0' + num : '' + num);
  const formatDate = new Date(Date.parse(date));
  const newDate = `${formatDate.getFullYear()}.${formatDigits(
    formatDate.getMonth() + 1,
  )}.${formatDigits(formatDate.getDate())}`;
  return newDate;
}
