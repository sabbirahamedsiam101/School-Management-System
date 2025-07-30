import { motion } from 'framer-motion';
import { useState } from 'react';
import { FileText, Upload, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import content from '@/data/content.json';

interface AdmissionProps {
  language: 'en' | 'bn';
}

const Admission = ({ language }: AdmissionProps) => {
  const admission = content.admission;
  const siteInfo = content.siteInfo;

  const [admissionForm, setAdmissionForm] = useState({
    grade: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    photo: null,
    birthCertificate: null,
    fatherNid: null,
    motherNid: null,
    bkashTransactionId: ''
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admission form:', admissionForm);
    // Handle form submission
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setAdmissionForm({...admissionForm, [field]: file});
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
            {language === 'en' ? 'Admission Information' : 'ভর্তি তথ্য'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Begin your journey of excellence with us' 
              : 'আমাদের সাথে উৎকর্ষতার যাত্রা শুরু করুন'
            }
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="instructions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="instructions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? 'Admission Instructions' : 'ভর্তির নির্দেশাবলী'}
              </TabsTrigger>
              <TabsTrigger value="form" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? 'Online Application' : 'অনলাইন আবেদন'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="instructions">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-6 h-6 text-primary" />
                      <span>{admission.instructions.title[language]}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            {language === 'en' ? 'Eligibility Criteria' : 'যোগ্যতার মানদণ্ড'}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {admission.instructions.eligibility[language]}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            {language === 'en' ? 'Required Documents' : 'প্রয়োজনীয় কাগজপত্র'}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {admission.instructions.documents[language]}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                            <CreditCard className="w-5 h-5 mr-2" />
                            {language === 'en' ? 'Application Fee' : 'আবেদন ফি'}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {admission.instructions.fee[language]}
                          </p>
                          
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h4 className="font-semibold text-green-800 mb-2">
                              {language === 'en' ? 'bKash Payment Details' : 'বিকাশ পেমেন্ট বিবরণ'}
                            </h4>
                            <div className="space-y-1 text-sm text-green-700">
                              <p><strong>bKash Number:</strong> {siteInfo.bkashNumber}</p>
                              <p><strong>{language === 'en' ? 'Amount' : 'পরিমাণ'}:</strong> 500 BDT</p>
                              <p><strong>{language === 'en' ? 'Reference' : 'রেফারেন্স'}:</strong> Admission Fee</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {language === 'en' ? 'Important Dates' : 'গুরুত্বপূর্ণ তারিখ'}
                          </h4>
                          <div className="space-y-1 text-sm text-blue-700">
                            <p>
                              {language === 'en' ? 'Application Deadline: March 15, 2025' : 'আবেদনের শেষ তারিখ: ১৫ মার্চ, ২০২৫'}
                            </p>
                            <p>
                              {language === 'en' ? 'Admission Test: March 25, 2025' : 'ভর্তি পরীক্ষা: ২৫ মার্চ, ২০২৫'}
                            </p>
                            <p>
                              {language === 'en' ? 'Result Publication: April 5, 2025' : 'ফলাফল প্রকাশ: ৫ এপ্রিল, ২০২৫'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="form">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Upload className="w-6 h-6 text-primary" />
                      <span>
                        {language === 'en' ? 'Online Admission Form' : 'অনলাইন ভর্তি ফর্ম'}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="grade">
                            {language === 'en' ? 'Grade/Class' : 'শ্রেণি'} *
                          </Label>
                          <Select onValueChange={(value) => setAdmissionForm({...admissionForm, grade: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder={language === 'en' ? 'Select Grade' : 'শ্রেণি নির্বাচন করুন'} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="xi">Class XI</SelectItem>
                              <SelectItem value="xii">Class XII</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="name">
                            {language === 'en' ? 'Full Name' : 'সম্পূর্ণ নাম'} *
                          </Label>
                          <Input
                            id="name"
                            value={admissionForm.name}
                            onChange={(e) => setAdmissionForm({...admissionForm, name: e.target.value})}
                            placeholder={language === 'en' ? 'Enter full name' : 'সম্পূর্ণ নাম লিখুন'}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">
                            {language === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'} *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={admissionForm.email}
                            onChange={(e) => setAdmissionForm({...admissionForm, email: e.target.value})}
                            placeholder={language === 'en' ? 'Enter email address' : 'ইমেইল ঠিকানা লিখুন'}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">
                            {language === 'en' ? 'Phone Number' : 'ফোন নম্বর'} *
                          </Label>
                          <Input
                            id="phone"
                            value={admissionForm.phone}
                            onChange={(e) => setAdmissionForm({...admissionForm, phone: e.target.value})}
                            placeholder={language === 'en' ? 'Enter phone number' : 'ফোন নম্বর লিখুন'}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="address">
                          {language === 'en' ? 'Present Address' : 'বর্তমান ঠিকানা'} *
                        </Label>
                        <Input
                          id="address"
                          value={admissionForm.address}
                          onChange={(e) => setAdmissionForm({...admissionForm, address: e.target.value})}
                          placeholder={language === 'en' ? 'Enter present address' : 'বর্তমান ঠিকানা লিখুন'}
                          required
                        />
                      </div>
                      
                      {/* File Upload Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">
                          {language === 'en' ? 'Document Upload' : 'কাগজপত্র আপলোড'}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="photo">
                              {language === 'en' ? 'Student Photo' : 'শিক্ষার্থীর ছবি'} *
                            </Label>
                            <Input
                              id="photo"
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileUpload('photo', e.target.files?.[0] || null)}
                              className="cursor-pointer"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="birthCertificate">
                              {language === 'en' ? 'Birth Certificate' : 'জন্ম নিবন্ধন'} *
                            </Label>
                            <Input
                              id="birthCertificate"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileUpload('birthCertificate', e.target.files?.[0] || null)}
                              className="cursor-pointer"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="fatherNid">
                              {language === 'en' ? "Father's NID" : 'পিতার এনআইডি'} *
                            </Label>
                            <Input
                              id="fatherNid"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileUpload('fatherNid', e.target.files?.[0] || null)}
                              className="cursor-pointer"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="motherNid">
                              {language === 'en' ? "Mother's NID" : 'মাতার এনআইডি'} *
                            </Label>
                            <Input
                              id="motherNid"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileUpload('motherNid', e.target.files?.[0] || null)}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Payment Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">
                          {language === 'en' ? 'Payment Information' : 'পেমেন্ট তথ্য'}
                        </h3>
                        
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <CreditCard className="w-5 h-5 text-primary" />
                            <span className="font-semibold">
                              {language === 'en' ? 'bKash Payment Number' : 'বিকাশ পেমেন্ট নম্বর'}
                            </span>
                          </div>
                          <p className="text-lg font-bold text-primary">{siteInfo.bkashNumber}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            {language === 'en' 
                              ? 'Send 500 BDT to this number and enter the transaction ID below'
                              : 'এই নম্বরে ৫০০ টাকা পাঠান এবং নিচে ট্রানজেকশন আইডি দিন'
                            }
                          </p>
                        </div>
                        
                        <div>
                          <Label htmlFor="bkashTransactionId">
                            {language === 'en' ? 'bKash Transaction ID' : 'বিকাশ ট্রানজেকশন আইডি'} *
                          </Label>
                          <Input
                            id="bkashTransactionId"
                            value={admissionForm.bkashTransactionId}
                            onChange={(e) => setAdmissionForm({...admissionForm, bkashTransactionId: e.target.value})}
                            placeholder={language === 'en' ? 'Enter transaction ID' : 'ট্রানজেকশন আইডি লিখুন'}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="pt-6">
                        <Button type="submit" className="w-full" variant="default" size="lg">
                          {language === 'en' ? 'Submit Application' : 'আবেদন জমা দিন'}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Admission;