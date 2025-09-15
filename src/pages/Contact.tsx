import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100">
      {/* Hero Section */}
      <section className="py-16 text-center border-b border-pink-200/50">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 drop-shadow-sm"
        >
          💌 Let’s Create Something Special Together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg text-gray-800 max-w-2xl mx-auto"
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
            className="bg-gradient-to-r from-pink-400 to-blue-400 rounded-2xl p-[1px] shadow-xl hover:shadow-2xl transition"
          >
            <div className="bg-white rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                🎁 Reach Out Instantly
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                Skip the boring forms. Just click below and drop your details in our quick Google Form.
              </p>
              <a
                href="https://forms.gle/E4cRae5EXfCvvakB7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button className="w-full py-4 text-base bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition rounded-lg border border-pink-200">
                  <Send className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              {
                icon: <Phone className="h-6 w-6 text-pink-500 flex-shrink-0" />,
                title: "Phone",
                desc: "Call us for immediate help",
                detail: <a href="tel:+919391934534" className="text-pink-600 font-medium hover:underline">+91-9391934534</a>
              },
              {
                icon: <Mail className="h-6 w-6 text-pink-500 flex-shrink-0" />,
                title: "Email Us",
                desc: "Drop your queries anytime",
                detail: <a href="mailto:vinofyx@gmail.com" className="text-pink-600 font-medium hover:underline">vinofyx@gmail.com</a>
              },
              {
                icon: <MapPin className="h-6 w-6 text-pink-500 flex-shrink-0" />,
                title: "Visit Us",
                desc: "Hyderabad, Telangana, India",
              },
              {
                icon: <Clock className="h-6 w-6 text-pink-500 flex-shrink-0" />,
                title: "Business Hours",
                desc: (
                  <>
                    Mon - Fri: 9:00 AM - 7:00 PM <br />
                    Sat: 10:00 AM - 5:00 PM <br />
                    Sun: Closed
                  </>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-pink-400/40 to-blue-400/40 rounded-xl p-[1px] shadow-md hover:shadow-lg transition"
              >
                <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                    {item.detail && <div>{item.detail}</div>}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
