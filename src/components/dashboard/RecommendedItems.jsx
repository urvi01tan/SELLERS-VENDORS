import { Package } from 'lucide-react';

const RecommendedItems = ({ recommendedItems, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Package size={20} className="text-orange-500" />
        Recommended Items (Based on Previous Orders)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendedItems.map((item, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-800">{item.name}</h4>
              <span className="text-lg font-bold text-orange-600">{item.price}</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Quantity: {item.quantity}</p>
            <p className="text-sm text-gray-500 mb-1">Supplier: {item.supplier}</p>
            <p className="text-xs text-gray-400 mb-3">Last ordered: {item.lastOrdered}</p>
            <button 
              onClick={() => onAddToCart(item)}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;