const statCard = ({ title, value, subtitle, color = "orange" }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className={`text-2xl font-bold mt-2 text-${color}-600`}>{value}</p>
    {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
  </div>
);

export default statCard;