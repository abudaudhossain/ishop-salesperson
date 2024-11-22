import { useTranslations } from "next-intl";

const orders = [
  { id: 1, date: "2024-11-01", total: 120.5 },
  { id: 2, date: "2024-10-21", total: 75.0 },
  { id: 3, date: "2024-10-10", total: 45.3 },
];

export default function OrderHistory() {
  const t = useTranslations("OrderHistory");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto p-4">
        <h1 className="text-lg font-bold mb-4">Orders History</h1>
        {orders.length === 0 ? (
          <p>No past orders found.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                    <p className="text-gray-600">Date: {order.date}</p>
                    <p className="text-gray-600">Items: 15</p>
                  </div>
                  <h3 className="font-semibold">Total: ${order.total.toFixed(2)}</h3>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
