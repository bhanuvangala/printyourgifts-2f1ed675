import StickySocial from "@/components/StickySocial";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Print Your Gifts (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data.
        This Privacy Policy explains how we collect, use, and safeguard your information.
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email, phone number, address, and payment details when
            you place an order or contact us. We also collect images or designs uploaded for product customization.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Process and deliver your orders</li>
            <li>Communicate updates and support</li>
            <li>Improve our services and website experience</li>
            <li>Prevent fraud or misuse</li>
          </ul>
          <p className="mt-2">
            We do not sell or rent your personal data to any third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access or
            disclosure. Payment transactions are processed securely through encrypted gateways.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through
            your browser settings, though some features may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
          <p>
            We may use third-party logistics, analytics, or payment services. These providers have their own privacy
            policies and are responsible for how they handle your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
          <p>
            We retain your personal information as long as necessary to fulfill the purposes outlined in this policy or
            as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
          <p>
            You may request to update, correct, or delete your personal information by contacting us at{" "}
            <a href="mailto:vinofyx@gmail.com" className="text-primary underline">
              vinofyx@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be posted on this page with a new “Last
            Updated” date.
          </p>
        </section>
      </div>

      {/* Floating Social Icons */}
      <StickySocial />
    </div>
  );
};

export default Privacy;
