import { useState } from 'react';

interface BlogFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

export default function BlogFilter({ categories, onFilterChange }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  // Category color mapping for consistent theming
  const categoryColors: Record<string, string> = {
    All: 'from-purple-500 to-pink-500',
    Tips: 'from-blue-500 to-cyan-500',
    Reviews: 'from-purple-500 to-pink-500',
    Tutorials: 'from-green-500 to-emerald-500',
    News: 'from-orange-500 to-red-500'
  };

  return (
    <div className="blog-filter mb-8">
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const gradientColor = categoryColors[category] || categoryColors.All;

          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                filter-button
                px-6 py-2.5 rounded-full font-semibold text-sm
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? `bg-gradient-to-r ${gradientColor} text-white shadow-lg scale-105`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700/50'
                }
              `}
              style={
                isActive
                  ? {
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)'
                    }
                  : undefined
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Active category indicator */}
      <div className="mt-4 text-center md:text-left">
        <p className="text-sm text-gray-400">
          Showing:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
            {activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
          </span>
        </p>
      </div>
    </div>
  );
}
