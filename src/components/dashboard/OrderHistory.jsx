const orderHistory = ({ orderHistory }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Order History</h3>
      <div className="space-y-3">
        {orderHistory.map((order, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Order #{order.id}</p>
              <p className="text-sm text-gray-600">{order.items}</p>
              <p className="text-xs text-gray-500">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800">{order.amount}</p>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default orderHistory;