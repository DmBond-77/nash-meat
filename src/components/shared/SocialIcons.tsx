import { Facebook, Instagram, Mail, Phone, Send } from "lucide-react";
interface SocialIconsProps {
  className?: string;
}

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div
      className={`flex space-x-3 sm:space-x-3 md:space-x-6 items-center ${
        className ?? ""
      }`}
    >
      <a className="flex gap-2" href="tel:+7-503-777-4567">
        <Phone className="w-6 h-6 text-red-600 hover:text-red-600 transition-transform duration-300 hover:scale-120 animate-bounce" />
        <span className="text-red-800 font-semibold">+7-503-777-4567</span>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-500  transition-transform duration-300 hover:scale-120" />
      </a>
    </div>
  );
}
