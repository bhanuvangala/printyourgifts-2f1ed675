import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
        >
          💌 Let’s Create Something Special Together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg text-gray-600"
        >
          Your perfect gift starts with a hello ✨
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          {/* Left - Google Form Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white shadow-xl rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              🎁 Reach Out Instantly
            </h2>
            <p className="text-gray-600 mb-6">
              Skip the boring forms. Just click below and drop your details in our quick Google Form.
            </p>
            <a
              href="https://forms.gle/E4cRae5EXfCvvakB7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full py-6 text-lg bg-pink-500 hover:bg-pink-600 text-white">
                <Send className="mr-2 h-5 w-5" />
                Contact Us Now
              </Button>
            </a>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition">
              <Phone className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">Call us for immediate help</p>
                <a href="tel:+919391934534" className="text-pink-600 font-medium hover:underline">
                  +91-9391934534
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition">
              <Mail className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-600">Drop your queries anytime</p>
                <a href="mailto:vinofyx@gmail.com" className="text-pink-600 font-medium hover:underline">
                  vinofyx@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition">
              <MapPin className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-gray-600">Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition">
              <Clock className="h-6 w-6 text-pink-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-gray-600">
                  Mon - Fri: 9:00 AM - 7:00 PM <br />
                  Sat: 10:00 AM - 5:00 PM <br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
