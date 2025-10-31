import StickySocial from "@/components/StickySocial";

const Shipping = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Shipping Policy</h1>

      <p className="mb-6 text-lg text-muted-foreground">
        Thank you for shopping with{" "}
        <span className="font-semibold text-primary">Print Your Gifts</span>! We are committed to delivering your
        customized products quickly and safely across India. Please read our Shipping Policy below.
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Delivery Coverage</h2>
          <p>
            We currently deliver orders across India through trusted courier partners. International shipping is not
            available at this time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Processing Time</h2>
          <p>
            All orders are processed within <span className="font-semibold">24 hours</span> after payment confirmation.
            Customization and printing may take <span className="font-semibold">1–2 business days</span> before dispatch.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Shipping Time</h2>
          <p>
            Delivery usually takes <span className="font-semibold">3–7 business days</span> depending on your location.
            Remote areas may experience additional transit time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Shipping Charges</h2>
          <p>
            Shipping charges are calculated based on product weight, size, and destination.{" "}
            <span className="font-semibold">Free shipping</span> may be available on orders above a certain value, as
            mentioned on the website during checkout.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Order Tracking</h2>
          <p>
            Once your order is shipped, you will receive a <span className="font-semibold">tracking ID</span> via email
            or SMS to monitor the delivery status.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Delayed or Missed Deliveries</h2>
          <p>
            While we strive for timely delivery, delays may occur due to unforeseen logistics or weather conditions.{" "}
            <span className="font-semibold">Print Your Gifts</span> is not liable for such delays once the order has been
            handed over to the courier.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Damaged Packages</h2>
          <p>
            If you receive a damaged package, please do not accept it and contact our support team immediately at{" "}
            <a href="mailto:vinofyx@gmail.com" className="text-primary underline">
              vinofyx@gmail.com
            </a>{" "}
            with photos of the package.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Incorrect Address</h2>
          <p>
            Please ensure your shipping details are accurate at checkout. Orders returned due to an incorrect address may
            incur <span className="font-semibold">re-shipping charges</span>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Delivery Confirmation</h2>
          <p>
            Our courier partners may require a signature or OTP confirmation upon delivery to ensure the safe receipt of
            your package.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            For any shipping-related questions, please contact:
            <br />
            <span className="block mt-2">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:vinofyx@gmail.com" className="text-primary underline">
                vinofyx@gmail.com
              </a>
            </span>
            <span className="block">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+917799580188" className="text-primary underline">
                +91 7799580188
              </a>
            </span>
          </p>
        </section>
      </div>

      {/* Floating Social Icons */}
      <StickySocial />
    </div>
  );
};

export default Shipping;
