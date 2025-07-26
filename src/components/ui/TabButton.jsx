const TabButton = ({ id, icon: Icon, label, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full ${
      active 
        ? 'bg-orange-500 text-white shadow-lg' 
        : 'text-gray-600 hover:bg-gray-100 hover:text-orange-500'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

export default TabButton;