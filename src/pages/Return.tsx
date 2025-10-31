import StickySocial from "@/components/StickySocial";

const Return = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Return & Refund Policy</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        At <span className="font-semibold text-primary">Print Your Gifts</span>, we take pride in delivering high-quality, personalized products.
        Since all our items are custom-made, we only accept returns or replacements under specific conditions mentioned below.
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Eligibility for Replacement</h2>
          <p>You may request a replacement if:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>The product is damaged during transit</li>
            <li>The wrong item or design was delivered</li>
            <li>There is a clear manufacturing defect</li>
          </ul>
          <p className="mt-2">
            Requests must be raised within <span className="font-semibold">24 hours of delivery</span> by emailing{" "}
            <a href="mailto:vinofyx@gmail.com" className="text-primary underline">
              vinofyx@gmail.com
            </a>{" "}
            with your order details and clear photos of the issue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Non-Returnable Items</h2>
          <p>We do not accept returns or replacements for:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Customer-uploaded design errors</li>
            <li>Low-resolution or blurred images provided by the customer</li>
            <li>Minor color variations due to screen-to-print differences</li>
            <li>Delays caused by courier partners or external factors</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Replacement Process</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Email us at <a href="mailto:vinofyx@gmail.com" className="text-primary underline">vinofyx@gmail.com</a> within 24 hours of delivery.</li>
            <li>Provide photos and order details for verification.</li>
            <li>Once approved, we will reprint and ship your product at no extra cost.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Order Cancellations</h2>
          <p>
            Orders can only be canceled within <span className="font-semibold">1 hour</span> of placing them. Once printing begins,
            cancellations are not possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Refunds</h2>
          <p>
            Since all products are customized, we do not offer cash refunds. Replacement is the only remedy for eligible cases.
          </p>
        </section>
      </div>

      {/* Floating Social Icons */}
      <StickySocial />
    </div>
  );
};

export default Return;
