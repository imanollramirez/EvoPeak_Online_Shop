// FilterPill.jsx
import './filterPill.css';
import useDataCategories from '../components/Categories/Hooks/useDataCategories';

const FilterPill = ({ onCategorySelect, activeCategory }) => {
  const { categories } = useDataCategories();

  return (
    <div className="filter-container">
      <button
        className={`filter-btn ${activeCategory === 'Todo' ? 'active' : ''}`}
        onClick={() => onCategorySelect('Todo')}
      >
        Todo
      </button>

      {categories.map((cat) => (
        <button
          key={cat._id}
          className={`filter-btn ${activeCategory === cat.name ? 'active' : ''}`}
          onClick={() => onCategorySelect(cat.name)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default FilterPill;
