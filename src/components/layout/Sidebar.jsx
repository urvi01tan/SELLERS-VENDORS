import { User, Package, History, Home, ShoppingCart, List } from 'lucide-react';
import TabButton from '../ui/TabButton';

const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 sticky top-8">
        <nav className="space-y-2">
          <TabButton 
            id="main" 
            icon={Home} 
            label="Dashboard" 
            active={activeTab === 'main'} 
            onClick={onTabChange} 
          />
          <TabButton 
            id="profile" 
            icon={User} 
            label="Profile" 
            active={activeTab === 'profile'} 
            onClick={onTabChange} 
          />
          <TabButton 
            id="orders" 
            icon={ShoppingCart} 
            label="Current Orders" 
            active={activeTab === 'orders'} 
            onClick={onTabChange} 
          />
          <TabButton 
            id="history" 
            icon={History} 
            label="Order History" 
            active={activeTab === 'history'} 
            onClick={onTabChange} 
          />
          <TabButton 
            id="recommended" 
            icon={Package} 
            label="Recommended" 
            active={activeTab === 'recommended'} 
            onClick={onTabChange} 
          />
          <TabButton 
            id="autogen" 
            icon={List} 
            label="Auto Lists" 
            active={activeTab === 'autogen'} 
            onClick={onTabChange} 
          />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;