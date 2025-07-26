import { Clock } from 'lucide-react';

const Orders = ({ currentOrders }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Current Orders</h3>
        <div className="space-y-3">
          {currentOrders.map((order, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Order #{order.id}</p>
                <p className="text-sm text-gray-600">{order.items}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800">{order.amount}</p>
                <p className={`text-sm px-2 py-1 rounded-full ${
                  order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {order.status}
                </p>
                <p className="text-xs text-gray-500 mt-1">Delivery: {order.delivery}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Clock size={20} className="text-orange-500" />
          Checkout Options
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border-2 border-orange-200 rounded-lg bg-orange-50">
            <h4 className="font-medium text-gray-800 mb-2">Self Pickup</h4>
            <p className="text-sm text-gray-600 mb-3">Save on delivery charges</p>
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Schedule Pickup
            </button>
          </div>
          <div className="p-4 border-2 border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Third Party Delivery</h4>
            <p className="text-sm text-gray-600 mb-3">Door-to-door delivery</p>
            <button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
              Book Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;