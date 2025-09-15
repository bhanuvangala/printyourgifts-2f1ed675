import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const StickySocial = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/printyourgifts9"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white shadow-lg 
                   hover:bg-pink-700 transition-transform hover:scale-110 animate-bounce-slow"
      >
        <Instagram className="h-6 w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919391934534"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg 
                   hover:bg-green-700 transition-transform hover:scale-110 animate-bounce-slow"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </div>
  );
};

export default StickySocial;
