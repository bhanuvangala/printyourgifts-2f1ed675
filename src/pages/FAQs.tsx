import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Image,
  FileText,
  Truck,
  Search,
  Info,
  Settings,
  RefreshCcw,
  Printer,
  Headphones,
  AlertTriangle,
  Clock,
  Leaf,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    {
      title: "🔹 General FAQs",
      icon: <Info className="h-6 w-6 text-primary" />,
      faqs: [
        {
          icon: <Info className="h-5 w-5 text-primary" />,
          question: "What is sublimation printing?",
          answer:
            "Sublimation printing is a process where special inks are heat-transferred onto products like mugs, t-shirts, or cushions, giving vibrant and long-lasting prints that won’t fade or peel.",
        },
        {
          icon: <Image className="h-5 w-5 text-primary" />,
          question: "What kind of products can I customize?",
          answer:
            "You can personalize mugs, t-shirts, photo frames, cushions, keychains, bottles, mobile covers, and many more items — all printed with your chosen photo, name, or design.",
        },
        {
          icon: <FileText className="h-5 w-5 text-primary" />,
          question: "Do you offer bulk orders or corporate gifts?",
          answer:
            "Yes! We specialize in bulk and corporate gifting. Contact our support team for custom pricing and branding options.",
        },
        {
          icon: <Printer className="h-5 w-5 text-primary" />,
          question: "Are the prints washable and durable?",
          answer:
            "Absolutely. Our sublimation prints are fade-resistant and long-lasting. For best results, follow the care instructions provided with your product.",
        },
      ],
    },
    {
      title: "🔹 Ordering & Customization",
      icon: <Settings className="h-6 w-6 text-primary" />,
      faqs: [
        {
          icon: <Image className="h-5 w-5 text-primary" />,
          question: "How do I upload my photos for customization?",
          answer:
            "After selecting a product, you’ll find an option to upload your image directly on the product page before adding it to your cart.",
        },
        {
          icon: <FileText className="h-5 w-5 text-primary" />,
          question: "What file formats do you accept?",
          answer:
            "We support JPG, JPEG, PNG, and PDF formats. For best results, upload high-resolution images.",
        },
        {
          icon: <Search className="h-5 w-5 text-primary" />,
          question: "Can I add text or names to my design?",
          answer:
            "Yes, most of our products allow you to add names, quotes, or short text during customization.",
        },
        {
          icon: <AlertTriangle className="h-5 w-5 text-primary" />,
          question: "What if my image quality is low?",
          answer:
            "If your image resolution is too low, our team will notify you before printing to avoid poor-quality results.",
        },
        {
          icon: <Printer className="h-5 w-5 text-primary" />,
          question: "Can I request a design preview before printing?",
          answer:
            "Yes, you can request a digital mockup for approval before we begin production.",
        },
      ],
    },
    {
      title: "🔹 Shipping & Delivery",
      icon: <Truck className="h-6 w-6 text-primary" />,
      faqs: [
        {
          icon: <Truck className="h-5 w-5 text-primary" />,
          question: "How long will delivery take?",
          answer:
            "Most orders are processed within 24 hours and delivered in 3–7 business days depending on your location.",
        },
        {
          icon: <Search className="h-5 w-5 text-primary" />,
          question: "Can I track my order?",
          answer:
            "Yes, once shipped, you’ll receive a tracking link via email or SMS to follow your package.",
        },
        {
          icon: <Clock className="h-5 w-5 text-primary" />,
          question: "Do you offer express or same-day delivery?",
          answer:
            "We offer express shipping in select cities. Contact our team to check availability.",
        },
        {
          icon: <FileText className="h-5 w-5 text-primary" />,
          question: "What are your shipping charges?",
          answer:
            "Shipping charges vary based on order value and delivery location. Free shipping may be available on orders above a certain amount.",
        },
      ],
    },
    {
      title: "🔹 Returns & Support",
      icon: <RefreshCcw className="h-6 w-6 text-primary" />,
      faqs: [
        {
          icon: <FileText className="h-5 w-5 text-primary" />,
          question: "Can I cancel or modify my order after placing it?",
          answer:
            "Orders can be modified or canceled within 1 hour of placing them. Once printing starts, we cannot cancel customized products.",
        },
        {
          icon: <AlertTriangle className="h-5 w-5 text-primary" />,
          question: "What if I receive a damaged or wrong product?",
          answer:
            "We’ll replace any defective or incorrect item at no additional cost. Contact support within 24 hours of delivery with photos.",
        },
        {
          icon: <FileText className="h-5 w-5 text-primary" />,
          question: "Do you accept returns on customized products?",
          answer:
            "Customized products are non-returnable unless there is a manufacturing defect or printing error.",
        },
        {
          icon: <Headphones className="h-5 w-5 text-primary" />,
          question: "How do I contact customer support?",
          answer:
            "You can reach us via email, WhatsApp, or the contact form on our website. We respond within 24 hours.",
        },
      ],
    },
    {
      title: "🔹 Printing & Material FAQs",
      icon: <Printer className="h-6 w-6 text-primary" />,
      faqs: [
        {
          icon: <Printer className="h-5 w-5 text-primary" />,
          question: "What type of ink and material do you use?",
          answer:
            "We use high-quality sublimation inks and coated materials designed for vibrant, long-lasting prints.",
        },
        {
          icon: <RefreshCcw className="h-5 w-5 text-primary" />,
          question: "Will the print fade after washing?",
          answer:
            "No, sublimation prints are permanently infused into the material — they won’t fade, crack, or peel when handled properly.",
        },
        {
          icon: <Leaf className="h-5 w-5 text-primary" />,
          question: "Are the products safe and eco-friendly?",
          answer:
            "Yes, we use non-toxic inks and eco-safe materials suitable for daily use.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20 relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-4xl text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent drop-shadow-lg">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Get instant answers to common questions about our products & services.
        </p>
      </motion.div>

      {/* FAQ Sections */}
      <div className="container mx-auto px-4 max-w-3xl space-y-16">
        {categories.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Title */}
            <div className="flex items-center gap-3 mb-6">
              {section.icon}
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {section.title}
              </h2>
            </div>

            <div className="space-y-6">
              {section.faqs.map((faq, index) => {
                const globalIndex = index + sectionIndex * 100;
                return (
                  <motion.div
                    key={globalIndex}
                    className="backdrop-blur-lg bg-background/60 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenFAQ(openFAQ === globalIndex ? null : globalIndex)
                      }
                      className="w-full flex justify-between items-center px-6 py-5 text-left"
                    >
                      <div className="flex items-center gap-3">
                        {faq.icon}
                        <span className="font-semibold text-lg">
                          {faq.question}
                        </span>
                      </div>
                      {openFAQ === globalIndex ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {openFAQ === globalIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="px-6 pb-5 text-muted-foreground leading-relaxed"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
