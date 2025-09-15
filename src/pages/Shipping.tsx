const Shipping = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Shipping Policy</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>Orders are processed within 2–4 business days.</li>
        <li>Delivery takes 5–10 business days within India.</li>
        <li>Tracking details are shared once shipped.</li>
        <li>We are not responsible for courier delays or incorrect addresses.</li>
        <li>Currently, we only ship within India.</li>
      </ul>
    </div>
  );
};

export default Shipping;
