import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import content from '@/data/content.json';

interface TeachersProps {
  language: 'en' | 'bn';
}

const Teachers = ({ language }: TeachersProps) => {
  const teachers = content.teachers;
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');

  const subjects = Array.from(new Set(teachers.map(teacher => teacher.subject)));

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = subjectFilter === 'all' || teacher.subject === subjectFilter;
    return matchesSearch && matchesSubject;
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
            {language === 'en' ? 'Our Faculty' : 'আমাদের শিক্ষকমণ্ডলী'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Meet our dedicated team of experienced educators' 
              : 'আমাদের নিবেদিতপ্রাণ অভিজ্ঞ শিক্ষাবিদগণের সাথে পরিচিত হন'
            }
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 mb-8"
          variants={itemVariants}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder={language === 'en' ? 'Search teachers...' : 'শিক্ষক খুঁজুন...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder={language === 'en' ? 'Filter by subject' : 'বিষয় অনুযায়ী ফিল্টার'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {language === 'en' ? 'All Subjects' : 'সকল বিষয়'}
                </SelectItem>
                {subjects.map(subject => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Teachers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {filteredTeachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-card group-hover:shadow-elegant transition-all duration-300">
                <div className="aspect-square bg-gradient-card flex items-center justify-center relative overflow-hidden">
                  <Users className="w-20 h-20 text-primary opacity-50 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                    {teacher.name}
                  </h3>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      {teacher.subject}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {teacher.designation}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredTeachers.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">
              {language === 'en' ? 'No teachers found' : 'কোন শিক্ষক পাওয়া যায়নি'}
            </h3>
            <p className="text-gray-400">
              {language === 'en' 
                ? 'Try adjusting your search criteria' 
                : 'আপনার অনুসন্ধানের মানদণ্ড পরিবর্তন করে দেখুন'
              }
            </p>
          </motion.div>
        )}

        {/* Faculty Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={itemVariants}
        >
          <Card className="text-center p-6 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              {teachers.length}
            </div>
            <div className="text-gray-600">
              {language === 'en' ? 'Total Faculty' : 'মোট শিক্ষক'}
            </div>
          </Card>
          
          <Card className="text-center p-6 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              {subjects.length}
            </div>
            <div className="text-gray-600">
              {language === 'en' ? 'Subjects Taught' : 'পঠিত বিষয়'}
            </div>
          </Card>
          
          <Card className="text-center p-6 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              15+
            </div>
            <div className="text-gray-600">
              {language === 'en' ? 'Years Experience' : 'বছরের অভিজ্ঞতা'}
            </div>
          </Card>
          
          <Card className="text-center p-6 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">
              95%
            </div>
            <div className="text-gray-600">
              {language === 'en' ? 'Success Rate' : 'সাফল্যের হার'}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Teachers;