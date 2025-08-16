import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I upload my photos for customization?",
      answer: "After selecting a product, you'll see an 'Upload Photo' button. You can upload high-resolution images in JPG, PNG, or PDF format. We recommend images with at least 300 DPI for best print quality."
    },
    {
      question: "What is the delivery time for orders?",
      answer: "Standard delivery takes 3-5 business days within India. Express delivery (1-2 business days) is available in major cities. We'll provide tracking information once your order is dispatched."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free shipping on all orders above ₹999. For orders below ₹999, shipping charges of ₹99 apply within India."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, net banking, and cash on delivery (COD). All payments are processed securely through our payment partners."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "You can cancel or modify your order within 1 hour of placing it, provided it hasn't entered production. After production starts, cancellations may not be possible."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with your order, contact us within 7 days of delivery for a replacement or refund."
    },
    {
      question: "What image resolution is recommended?",
      answer: "For best results, upload images with minimum 300 DPI resolution. Higher resolution images (600+ DPI) will give even better print quality. Avoid blurry or pixelated images."
    },
    {
      question: "Do you offer bulk orders or corporate discounts?",
      answer: "Yes! We offer special pricing for bulk orders (50+ items) and corporate customers. Contact our team at +91-9391934534 for custom quotes."
    },
    {
      question: "Which cities do you deliver to?",
      answer: "We deliver pan-India to all pin codes serviceable by our logistics partners. This includes all major cities and most rural areas."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is dispatched, you'll receive a tracking number via SMS and email. You can track your order status on our website or the courier partner's website."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-foreground/90">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our customer support team is here to help you
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-background p-6 rounded-lg border border-border">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Speak directly with our support team
              </p>
              <a href="tel:+919391934534" className="text-primary font-semibold hover:underline">
                +91-9391934534
              </a>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us your questions anytime
              </p>
              <a href="mailto:vinofyx@gmail.com" className="text-primary font-semibold hover:underline">
                vinofyx@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="btn-hero">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;