import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import content from '@/data/content.json';
import principalImage from '@/assets/principal.jpeg';

interface AboutProps {
  language: 'en' | 'bn';
}

const About = ({ language }: AboutProps) => {
  const about = content.about;
  const teachers = content.teachers;

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
            {language === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Discover our legacy of educational excellence' 
              : 'আমাদের শিক্ষাগত উৎকর্ষতার ঐতিহ্য আবিষ্কার করুন'
            }
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="college" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="college" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? 'College Overview' : 'কলেজ পরিচিতি'}
              </TabsTrigger>
              <TabsTrigger value="principal" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? "Principal's Message" : 'অধ্যক্ষের বার্তা'}
              </TabsTrigger>
              <TabsTrigger value="teachers" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {language === 'en' ? 'All Teachers' : 'সকল শিক্ষক'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="college">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">
                          {about.college.title[language]}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          {about.college.description[language]}
                        </p>
                        
                        {/* Key Facts */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-8 h-8 text-primary" />
                            <div>
                              <div className="font-semibold text-primary">
                                {language === 'en' ? 'Established' : 'প্রতিষ্ঠিত'}
                              </div>
                              <div className="text-gray-600">1995</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="w-8 h-8 text-primary" />
                            <div>
                              <div className="font-semibold text-primary">
                                {language === 'en' ? 'Total Students' : 'মোট শিক্ষার্থী'}
                              </div>
                              <div className="text-gray-600">3000+</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Award className="w-8 h-8 text-primary" />
                            <div>
                              <div className="font-semibold text-primary">
                                {language === 'en' ? 'Success Rate' : 'সাফল্যের হার'}
                              </div>
                              <div className="text-gray-600">98%</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="w-8 h-8 text-primary" />
                            <div>
                              <div className="font-semibold text-primary">
                                {language === 'en' ? 'Faculty Members' : 'শিক্ষকমণ্ডলী'}
                              </div>
                              <div className="text-gray-600">50+</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-square bg-gradient-card rounded-lg overflow-hidden shadow-elegant">
                          <img 
                            src={principalImage} 
                            alt="School Building"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-card">
                          <div className="text-2xl font-bold">25+</div>
                          <div className="text-sm">
                            {language === 'en' ? 'Years of Excellence' : 'বছরের উৎকর্ষতা'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="principal">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div className="lg:col-span-1">
                        <div className="relative">
                          <img 
                            src={principalImage} 
                            alt="Principal"
                            className="w-full aspect-square object-cover rounded-lg shadow-elegant"
                          />
                          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg">
                            <Award className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <h3 className="text-xl font-bold text-primary">
                            {about.principal.name}
                          </h3>
                          <p className="text-gray-600">
                            {language === 'en' ? 'Principal' : 'অধ্যক্ষ'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                          {language === 'en' ? "Principal's Message" : 'অধ্যক্ষের বার্তা'}
                        </h2>
                        <blockquote className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6">
                          "{about.principal.message[language]}"
                        </blockquote>
                        <div className="mt-6">
                          <div className="font-semibold text-primary">
                            {about.principal.name}
                          </div>
                          <div className="text-gray-600">
                            {language === 'en' ? 'Principal, SC Model School & College' : 'অধ্যক্ষ, এস সি মডেল স্কুল ও কলেজ'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="teachers">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teachers.map((teacher, index) => (
                    <motion.div
                      key={teacher.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <div className="aspect-square bg-gradient-card flex items-center justify-center">
                          <Users className="w-20 h-20 text-primary opacity-50" />
                        </div>
                        <CardContent className="p-6 text-center">
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {teacher.name}
                          </h3>
                          <p className="text-secondary font-medium mb-1">
                            {teacher.subject}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {teacher.designation}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;