// Create 1M copies of a sample record
export function generateCustomers() {
  const sample = {
    id: 1,
    name: "Customer Name",
    phone: "+97100000001",
    email: "john.doe@gmail.com",
    score: 23,
    lastMessageAt: "July 12, 2024, 12:45 PM",
    addedBy: "Kartikey Mishra",
    avatar: "https://i.pravatar.cc/40?img=1"
  };

  // Create 1 million rows with unique ids
  const data = [];
  for (let i = 0; i < 1_000_000; i++) {
    data.push({
      ...sample,
      id: i + 1 // unique ID
    });
  }
  return data;
}
