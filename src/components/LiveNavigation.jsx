import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function LiveNavigation({
  activeCategory,
  onCategoryClick,
  categories = [],
  subcategories = {},
  streams = [],
}) {
  const navigate = useNavigate(); // Sayfa yönlendirme


  const filteredStreams =
    activeCategory === "all"
      ? streams || []
      : (streams || []).filter((stream) => stream.category === activeCategory);

  const handleCategoryClick = (categoryId) => {
    onCategoryClick(categoryId);
  };

  const handleSubcategoryClick = (subcategoryId) => {
    if (subcategoryId === "Yazılım Geliştirme") {
      navigate("/alt-kategori/Yazilim-Gelistirme");
    } else {
      navigate(`/subcategory/${subcategoryId}`);
    }
  };

  return (
    <div className="w-full p-4 md:p-6 space-y-4">

      {/* Ana Kategoriler */}
      <div className="flex flex-wrap gap-2 items-center justify-start">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`text-sm px-3 py-1 rounded-md ${activeCategory === category.id
              ? "bg-gray-700"
              : "bg-gray-800 hover:bg-gray-700"
              }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
            {category.id !== "all" && <ChevronDown size={16} className="inline ml-1" />}
          </button>
        ))}
      </div>

      {/* Alt Kategoriler */}
      {activeCategory !== "all" && subcategories[activeCategory] && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {subcategories[activeCategory].map((subcat, index) => (
            <button
              key={index}
              onClick={() => handleSubcategoryClick(subcat)}
              className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-left flex items-center justify-between"
            >
              <span>{subcat}</span>
              <ChevronDown size={16} />
            </button>
          ))}
        </div>
      )}

      {/* Canlı Yayın Oluştur */}
      <div className="flex justify-end pt-2">
        <Link to="/createlive">

          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 text-sm rounded" to>
            Canlı Yayını Oluştur
          </button>
        </Link>
      </div>
    </div>
  );
}