import './filterPill.css';

const categories = ['Equipamiento', 'Nutrición', 'Accesorios', 'Pesas', 'Todo'];

const filterPill = () => {
  const [activeCategory, setActiveCategory] = useState('Todo');

  return (
    <div className="filter-container">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default filterPill;