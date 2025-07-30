import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, User, Bell, BookOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import content from '@/data/content.json';

interface AcademicProps {
  language: 'en' | 'bn';
}

const Academic = ({ language }: AcademicProps) => {
  const notices = content.notices;
  const schedule = content.schedule;

  const [appointmentForm, setAppointmentForm] = useState({
    studentName: '',
    parentContact: '',
    class: '',
    preferredDate: '',
    preferredTime: '',
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

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request:', appointmentForm);
    // Handle form submission
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
            {language === 'en' ? 'Academic Information' : 'একাডেমিক তথ্য'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Stay updated with academic schedules and announcements' 
              : 'একাডেমিক সময়সূচী এবং ঘোষণা সম্পর্কে আপডেট থাকুন'
            }
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="appointment" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="appointment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? 'Appointment' : 'সাক্ষাৎকার'}
              </TabsTrigger>
              <TabsTrigger value="notices" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? 'Notice Board' : 'নোটিশ বোর্ড'}
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? 'Class Schedule' : 'ক্লাস রুটিন'}
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? 'Curriculum' : 'পাঠ্যক্রম'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appointment">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="w-6 h-6 text-primary" />
                      <span>
                        {language === 'en' ? 'Book an Appointment' : 'সাক্ষাৎকারের জন্য আবেদন'}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                          <h3 className="font-semibold text-primary mb-2">
                            {language === 'en' ? 'Important Information' : 'গুরুত্বপূর্ণ তথ্য'}
                          </h3>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>
                              {language === 'en' 
                                ? '• Appointments are available Sunday to Thursday, 9 AM to 4 PM'
                                : '• রবিবার থেকে বৃহস্পতিবার সকাল ৯টা থেকে বিকাল ৪টা পর্যন্ত সাক্ষাৎকার পাওয়া যায়'
                              }
                            </li>
                            <li>
                              {language === 'en' 
                                ? '• Please provide at least 24 hours notice'
                                : '• অন্তত ২৪ ঘন্টা আগে জানানোর অনুরোধ'
                              }
                            </li>
                            <li>
                              {language === 'en' 
                                ? '• Both parents are encouraged to attend'
                                : '• উভয় অভিভাবকের উপস্থিতি কাম্য'
                              }
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="studentName">
                            {language === 'en' ? 'Student Name' : 'শিক্ষার্থীর নাম'}
                          </Label>
                          <Input
                            id="studentName"
                            value={appointmentForm.studentName}
                            onChange={(e) => setAppointmentForm({...appointmentForm, studentName: e.target.value})}
                            placeholder={language === 'en' ? 'Enter student name' : 'শিক্ষার্থীর নাম লিখুন'}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="parentContact">
                            {language === 'en' ? 'Parent Contact Number' : 'অভিভাবকের ফোন নম্বর'}
                          </Label>
                          <Input
                            id="parentContact"
                            value={appointmentForm.parentContact}
                            onChange={(e) => setAppointmentForm({...appointmentForm, parentContact: e.target.value})}
                            placeholder={language === 'en' ? 'Enter contact number' : 'ফোন নম্বর লিখুন'}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="class">
                            {language === 'en' ? 'Class' : 'শ্রেণি'}
                          </Label>
                          <Select onValueChange={(value) => setAppointmentForm({...appointmentForm, class: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder={language === 'en' ? 'Select class' : 'শ্রেণি নির্বাচন করুন'} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="xi">Class XI</SelectItem>
                              <SelectItem value="xii">Class XII</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="preferredDate">
                              {language === 'en' ? 'Preferred Date' : 'পছন্দের তারিখ'}
                            </Label>
                            <Input
                              id="preferredDate"
                              type="date"
                              value={appointmentForm.preferredDate}
                              onChange={(e) => setAppointmentForm({...appointmentForm, preferredDate: e.target.value})}
                              required
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="preferredTime">
                              {language === 'en' ? 'Preferred Time' : 'পছন্দের সময়'}
                            </Label>
                            <Select onValueChange={(value) => setAppointmentForm({...appointmentForm, preferredTime: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder={language === 'en' ? 'Select time' : 'সময় নির্বাচন করুন'} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="9am">9:00 AM</SelectItem>
                                <SelectItem value="10am">10:00 AM</SelectItem>
                                <SelectItem value="11am">11:00 AM</SelectItem>
                                <SelectItem value="2pm">2:00 PM</SelectItem>
                                <SelectItem value="3pm">3:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">
                            {language === 'en' ? 'Purpose/Message' : 'উদ্দেশ্য/বার্তা'}
                          </Label>
                          <Textarea
                            id="message"
                            value={appointmentForm.message}
                            onChange={(e) => setAppointmentForm({...appointmentForm, message: e.target.value})}
                            placeholder={language === 'en' ? 'Brief description of the purpose' : 'উদ্দেশ্যের সংক্ষিপ্ত বিবরণ'}
                            className="min-h-[100px]"
                          />
                        </div>
                        
                        <Button type="submit" className="w-full" variant="default">
                          {language === 'en' ? 'Submit Request' : 'আবেদন জমা দিন'}
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="notices">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {notices.map((notice) => (
                  <Card key={notice.id} className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Bell className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">
                              {notice.title[language]}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{new Date(notice.date).toLocaleDateString()}</span>
                              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                                {notice.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          {language === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="schedule">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-6 h-6 text-primary" />
                      <span>
                        {language === 'en' ? 'Class Schedule' : 'ক্লাস রুটিন'}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold text-primary">
                              {language === 'en' ? 'Day' : 'দিন'}
                            </th>
                            <th className="text-left p-3 font-semibold text-primary">
                              {language === 'en' ? 'Time' : 'সময়'}
                            </th>
                            <th className="text-left p-3 font-semibold text-primary">
                              {language === 'en' ? 'Subject' : 'বিষয়'}
                            </th>
                            <th className="text-left p-3 font-semibold text-primary">
                              {language === 'en' ? 'Teacher' : 'শিক্ষক'}
                            </th>
                            <th className="text-left p-3 font-semibold text-primary">
                              {language === 'en' ? 'Class' : 'শ্রেণি'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {schedule.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="p-3">{item.day}</td>
                              <td className="p-3">{item.time}</td>
                              <td className="p-3 font-medium">{item.subject}</td>
                              <td className="p-3">{item.teacher}</td>
                              <td className="p-3">{item.class}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="curriculum">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <span>
                          {language === 'en' ? 'Class XI Curriculum' : 'একাদশ শ্রেণির পাঠ্যক্রম'}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Mathematics</span>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Physics</span>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Chemistry</span>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Biology</span>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <span>
                          {language === 'en' ? 'Class XII Curriculum' : 'দ্বাদশ শ্রেণির পাঠ্যক্রম'}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Mathematics</span>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Physics</span>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Chemistry</span>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Biology</span>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Academic;