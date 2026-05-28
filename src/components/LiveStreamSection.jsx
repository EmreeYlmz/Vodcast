import { ChevronDown } from "lucide-react"; // Kategori ve alt kategori butonlarında kullanılan ok simgesi
import LiveStreamList from "./LiveStreamList";  // Filtrelenmiş canlı yayınları listeleyen bileşen
import LiveNavigation from "../components/LiveNavigation";  // Üst navigasyon bileşeni

export default function LiveStreamSection({
  activeCategory,
  setActiveCategory,
  categories,
  subcategories,
  filteredStreams
}) {
  return (
    <div>
      {/* Üst Navigasyon */}
      <LiveNavigation
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
        categories={categories}
        subcategories={subcategories}
      />

      {/* Canlı Yayın Listesi: Filtrelenen yayınları listeler */}
      <LiveStreamList filteredStreams={filteredStreams} />
    </div>
  );
}