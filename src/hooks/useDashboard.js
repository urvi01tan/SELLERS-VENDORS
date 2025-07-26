import { useState } from 'react';
import { 
  vendorProfile, 
  orderHistory, 
  currentOrders, 
  recommendedItems, 
  inventoryItems, 
  menuItems 
} from '../data/mockData';

export const useDashboard = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [notifications, setNotifications] = useState(3);

  const stats = {
    todayRevenue: "₹3,250",
    activeOrders: currentOrders.length,
    lowStockItems: inventoryItems.filter(item => item.status === 'critical' || item.status === 'low').length,
    monthlyRevenue: "₹45,600"
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleAutoRestock = (itemName) => {
    console.log(`Auto restocking ${itemName}`);
    // Implementation for auto restock
  };

  const handleAddToCart = (item) => {
    console.log(`Adding ${item.name} to cart`);
    // Implementation for add to cart
  };

  return {
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
    handleAddToCart,
    setNotifications
  };
};