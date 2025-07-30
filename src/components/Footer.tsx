import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Youtube, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '@/data/content.json';

interface FooterProps {
  language: 'en' | 'bn';
}

const Footer = ({ language }: FooterProps) => {
  const siteInfo = content.siteInfo;
  const navigation = content.navigation[language];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{siteInfo.name[language]}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{siteInfo.address[language]}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="text-sm">{siteInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-sm">{siteInfo.email}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'দ্রুত লিংক'}
            </h4>
            <ul className="space-y-2">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Office Hours' : 'অফিস সময়'}
            </h4>
            <div className="text-sm space-y-2">
              <p>
                {language === 'en' ? 'Sunday - Thursday' : 'রবিবার - বৃহস্পতিবার'}: 
                <br />8:00 AM - 4:00 PM
              </p>
              <p>
                {language === 'en' ? 'Friday' : 'শুক্রবার'}: 
                <br />8:00 AM - 12:00 PM
              </p>
              <p className="pt-2 border-t border-white/20">
                {language === 'en' ? 'Emergency Contact' : 'জরুরি যোগাযোগ'}: 
                <br />{siteInfo.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="bg-white/5 rounded-lg p-4 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9076394667253!2d90.39153161544496!3d23.750831494623138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1642087893829!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm">
          <p>
            © 2025 {siteInfo.name[language]}. {language === 'en' ? 'All rights reserved.' : 'সকল অধিকার সংরক্ষিত।'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;