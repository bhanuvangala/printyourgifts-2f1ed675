import StickySocial from "@/components/StickySocial";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-6 text-lg text-muted-foreground">
        Welcome to <span className="font-semibold text-primary">Print Your Gifts</span> (“we”, “our”, “us”). By accessing
        or purchasing from{" "}
        <a href="https://printyourgifts.in" target="_blank" rel="noopener noreferrer" className="text-primary underline">
          https://printyourgifts.in
        </a>
        , you agree to the following Terms and Conditions. Please read them carefully before placing an order.
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. General</h2>
          <p>
            This website is owned and operated by{" "}
            <span className="font-semibold text-primary">Print Your Gifts</span>, a sole proprietorship based in
            Hyderabad, Telangana, India. Throughout the site, the terms “we”, “us”, and “our” refer to Print Your Gifts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in accordance with all applicable laws and
            regulations in India. Unauthorized use, data scraping, or reproduction of content is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Product Customization</h2>
          <p>
            All customized products are made based on customer-provided designs, photos, or text. Customers are
            responsible for ensuring that the uploaded content does not infringe on any copyrights, trademarks, or
            third-party rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Pricing and Payment</h2>
          <p>
            All prices are listed in Indian Rupees (INR) and inclusive of applicable taxes. Payment must be completed
            online through secure payment gateways before order processing begins.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Order Confirmation</h2>
          <p>
            After placing your order, you’ll receive a confirmation email or SMS. Once customization and printing begin,
            orders cannot be canceled or modified.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Shipping and Delivery</h2>
          <p>
            We deliver across India. Orders are usually processed within{" "}
            <span className="font-semibold">24 hours</span> and shipped within{" "}
            <span className="font-semibold">3–7 business days</span>, depending on location. Delays caused by logistics
            or unforeseen circumstances are not our responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Returns and Replacements</h2>
          <p>
            Since customized products are made to order, returns are not accepted except in cases of damage,
            manufacturing defect, or incorrect item received. Please refer to our{" "}
            <a href="/return" className="text-primary underline">
              Return & Replacement Policy
            </a>{" "}
            for detailed information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            For questions regarding these Terms & Conditions, please contact us at:
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

export default Terms;
