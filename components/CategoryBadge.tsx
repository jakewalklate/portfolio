interface CategoryBadgeProps {
  category: string;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  personal: { bg: 'bg-violet-900/40', text: 'text-violet-300' },
  tech: { bg: 'bg-blue-900/40', text: 'text-blue-300' },
  history: { bg: 'bg-red-900/40', text: 'text-red-300' },
  psychology: { bg: 'bg-amber-900/40', text: 'text-amber-300' },
  career: { bg: 'bg-green-900/40', text: 'text-green-300' },
  culture: { bg: 'bg-pink-900/40', text: 'text-pink-300' },
  economics: { bg: 'bg-cyan-900/40', text: 'text-cyan-300' },
};

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const colors = categoryColors[category.toLowerCase()] || categoryColors.personal;
  
  return (
    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${colors.bg} ${colors.text} border border-current border-opacity-30 opacity-60`}>
      {category}
    </span>
  );
}
