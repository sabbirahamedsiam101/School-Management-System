import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import content from '@/data/content.json';

interface ContactProps {
  language: 'en' | 'bn';
}

const Contact = ({ language }: ContactProps) => {
  const siteInfo = content.siteInfo;

  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message form:', messageForm);
    // Handle form submission
    setMessageForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="min-h-screen py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Get in touch with us for any inquiries or assistance' 
              : 'যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>
                    {language === 'en' ? 'Contact the Office' : 'অফিসে যোগাযোগ'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {language === 'en' ? 'Address' : 'ঠিকানা'}
                    </h3>
                    <p className="text-gray-600">
                      {siteInfo.address[language]}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {language === 'en' ? 'Phone' : 'ফোন'}
                    </h3>
                    <p className="text-gray-600">{siteInfo.phone}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {language === 'en' ? 'Email' : 'ইমেইল'}
                    </h3>
                    <p className="text-gray-600">{siteInfo.email}</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {language === 'en' ? 'Office Hours' : 'অফিস সময়'}
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>
                        {language === 'en' ? 'Sunday - Thursday: 8:00 AM - 4:00 PM' : 'রবিবার - বৃহস্পতিবার: সকাল ৮টা - বিকাল ৪টা'}
                      </p>
                      <p>
                        {language === 'en' ? 'Friday: 8:00 AM - 12:00 PM' : 'শুক্রবার: সকাল ৮টা - দুপুর ১২টা'}
                      </p>
                      <p>
                        {language === 'en' ? 'Saturday: Closed' : 'শনিবার: বন্ধ'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mt-8">
                  <h3 className="font-semibold text-primary mb-4">
                    {language === 'en' ? 'Find Us on Map' : 'মানচিত্রে আমাদের খুঁজুন'}
                  </h3>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9076394667253!2d90.39153161544496!3d23.750831494623138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1642087893829!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Message Form */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-6 h-6 text-primary" />
                  <span>
                    {language === 'en' ? 'Message to Principal' : 'অধ্যক্ষের কাছে বার্তা'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMessageSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">
                      {language === 'en' ? 'Your Name' : 'আপনার নাম'} *
                    </Label>
                    <Input
                      id="name"
                      value={messageForm.name}
                      onChange={(e) => setMessageForm({...messageForm, name: e.target.value})}
                      placeholder={language === 'en' ? 'Enter your full name' : 'আপনার সম্পূর্ণ নাম লিখুন'}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">
                      {language === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={messageForm.email}
                      onChange={(e) => setMessageForm({...messageForm, email: e.target.value})}
                      placeholder={language === 'en' ? 'Enter your email address' : 'আপনার ইমেইল ঠিকানা লিখুন'}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      {language === 'en' ? 'Your Message' : 'আপনার বার্তা'} *
                    </Label>
                    <Textarea
                      id="message"
                      value={messageForm.message}
                      onChange={(e) => setMessageForm({...messageForm, message: e.target.value})}
                      placeholder={language === 'en' ? 'Write your message here...' : 'এখানে আপনার বার্তা লিখুন...'}
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-700">
                      {language === 'en' 
                        ? 'Your message will be sent directly to the Principal. You can expect a response within 24-48 hours during working days.'
                        : 'আপনার বার্তা সরাসরি অধ্যক্ষের কাছে পাঠানো হবে। কাজের দিনে ২৪-৪৮ ঘন্টার মধ্যে উত্তর পাওয়ার প্রত্যাশা করতে পারেন।'
                      }
                    </p>
                  </div>

                  <Button type="submit" className="w-full" variant="default" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    {language === 'en' ? 'Send Message' : 'বার্তা পাঠান'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Contact Cards */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-primary mb-2">
              {language === 'en' ? 'Call Us' : 'ফোন করুন'}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {language === 'en' ? 'For immediate assistance' : 'তাৎক্ষণিক সহায়তার জন্য'}
            </p>
            <p className="font-semibold text-primary">{siteInfo.phone}</p>
          </Card>

          <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-primary mb-2">
              {language === 'en' ? 'Email Us' : 'ইমেইল করুন'}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {language === 'en' ? 'For detailed inquiries' : 'বিস্তারিত জিজ্ঞাসার জন্য'}
            </p>
            <p className="font-semibold text-primary text-sm">{siteInfo.email}</p>
          </Card>

          <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-primary mb-2">
              {language === 'en' ? 'Visit Us' : 'আমাদের দেখুন'}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {language === 'en' ? 'Come to our campus' : 'আমাদের ক্যাম্পাসে আসুন'}
            </p>
            <p className="font-semibold text-primary text-sm">{siteInfo.address[language]}</p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;