// import{
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
//   useNavigate,
// }from 'react-router-dom';
import { useDashboard } from './hooks/useDashboard';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainPage from './components/dashboard/MainPage';
import Profile from './components/dashboard/Profile';
import Orders from './components/dashboard/Orders';
import OrderHistory from './components/dashboard/OrderHistory';
import RecommendedItems from './components/dashboard/RecommendedItems';
import AutoGeneration from './components/dashboard/AutoGeneration';
<div className="text-4xl text-red-500 font-bold">Tailwind is working!</div>

function App() {
  const {
    activeTab,
    notifications,
    stats,
    vendorProfile,
    orderHistory,
    currentOrders,
    recommendedItems,
    inventoryItems,
    menuItems,
    handleTabChange,
    handleAutoRestock,
    handleAddToCart
  } = useDashboard();

  const renderContent = () => {
    switch(activeTab) {
      case 'main': 
        return (
          <MainPage 
            stats={stats}
            inventoryItems={inventoryItems}
            currentOrders={currentOrders}
            onAutoRestock={handleAutoRestock}
          />
        );
      case 'profile': 
        return <Profile vendorProfile={vendorProfile} />;
      case 'orders': 
        return <Orders currentOrders={currentOrders} />;
      case 'history': 
        return <OrderHistory orderHistory={orderHistory} />;
      case 'recommended': 
        return (
          <RecommendedItems 
            recommendedItems={recommendedItems}
            onAddToCart={handleAddToCart}
          />
        );
      case 'autogen': 
        return <AutoGeneration menuItems={menuItems} />;
      default: 
        return (
          <MainPage 
            stats={stats}
            inventoryItems={inventoryItems}
            currentOrders={currentOrders}
            onAutoRestock={handleAutoRestock}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header vendorProfile={vendorProfile} notifications={notifications} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
          
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;