function NavigationTabs({ currentTab, setCurrentTab }) {
  const tabs = ['Tümü', 'Son Yüklenenler', 'Yeni Önerilenler', 'Beğenmeler'];
  
  return (
    <div className="flex flex-wrap mb-6">
      {tabs.map(tab => (
        <button 
          key={tab}
          className={`px-4 py-2 mr-2 mb-2 rounded-full text-sm ${
            currentTab === tab 
              ? 'bg-white text-black font-medium' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default NavigationTabs;