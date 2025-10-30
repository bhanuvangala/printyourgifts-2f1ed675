import { useState } from "react";
import { ChevronDown, ChevronUp, Image, FileText, Truck, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      icon: <Image className="h-6 w-6 text-primary" />,
      question: "How do I upload my photos for customization?",
      answer:
        "After selecting a product, you'll find an option to upload your image directly on the product page before adding it to cart.",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      question: "What file formats do you accept?",
      answer:
        "We support JPG, PNG, and PDF formats. For best results, upload high-resolution images.",
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      question: "How long will delivery take?",
      answer:
        "Most orders are processed within 24 hours and delivered in 3-7 business days depending on your location.",
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      question: "Can I track my order?",
      answer:
        "Yes! Once shipped, you’ll receive a tracking link via email or SMS to follow your package.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20 relative overflow-hidden">
      {/* Animated gradient header */}
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

      {/* FAQ Cards */}
      <div className="container mx-auto px-4 max-w-3xl space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="backdrop-blur-lg bg-background/60 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] overflow-hidden"
          >
            <button
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left"
            >
              <div className="flex items-center gap-3">
                {faq.icon}
                <span className="font-semibold text-lg">{faq.question}</span>
              </div>
              {openFAQ === index ? (
                <ChevronUp className="h-5 w-5 text-primary" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openFAQ === index && (
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
        ))}
      </div>
    </div>
  );
};

export default FAQs;
