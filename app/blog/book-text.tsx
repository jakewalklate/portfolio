export const dynamic = 'force-dynamic';

export default function BookText() {

  const getColor = () => {
    const number = Math.random();
    console.log(number);
    if (number > 0.75) {
      return 'text-emerald-400';
    } else if (number > 0.5) {
      return 'text-yellow-400';
    } else if (number > 0.25) {
      return 'text-blue-400';
    } else {
      return 'text-fuchsia-400';
    }
  }

  return (
    <span className={`text-xs font-mono ${getColor()} uppercase tracking-wider`}>Downloadable book</span>
  );
}