import { RefreshCw, Truck } from 'lucide-react';
import statCard from '../ui/StatCard';

const MainPage = ({ stats, inventoryItems, currentOrders, onAutoRestock }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <statCard title="Today's Revenue" value={stats.todayRevenue} subtitle="+12% from yesterday" />
        <statCard title="Active Orders" value={stats.activeOrders} subtitle="1 arriving today" color="blue" />
        <statCard title="Low Stock Items" value={stats.lowStockItems} subtitle="Need restocking" color="red" />
        <statCard title="This Month" value={stats.monthlyRevenue} subtitle="Revenue" color="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <RefreshCw size={20} className="text-orange-500" />
            Auto Restock Alerts
          </h3>
          <div className="space-y-3">
            {inventoryItems
              .filter(item => item.status === 'critical' || item.status === 'low')
              .map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">Current: {item.current} | Threshold: {item.threshold}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'critical' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status}
                    </span>
                    {item.autoRestock && (
                      <button 
                        onClick={() => onAutoRestock(item.name)}
                        className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-orange-600 transition-colors"
                      >
                        Auto Order
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Truck size={20} className="text-orange-500" />
            Scheduled Deliveries
          </h3>
          <div className="space-y-3">
            {currentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{order.items}</p>
                  <p className="text-sm text-gray-500">Order #{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">{order.delivery}</p>
                  <p className="text-sm text-gray-500">
                    {order.delivery === 'Tomorrow' ? 'Morning 9-11 AM' : 'Self Pickup'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;