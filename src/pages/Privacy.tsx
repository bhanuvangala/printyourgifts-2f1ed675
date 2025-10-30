const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        We respect your privacy and are committed to protecting your personal data.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>We collect information like name, email, phone, and address only for order processing.</li>
        <li>We do not sell or share your information, except for shipping/payment needs.</li>
        <li>Our site may use cookies to improve user experience.</li>
        <li>For privacy concerns, contact us at <a href="mailto:vinofyx@gmail.com" className="text-primary underline">vinofyx@gmail.com</a>.</li>
      </ul>
    </div>
  );
};

export default Privacy;
