import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import content from '@/data/content.json';
import heroImage from '@/assets/school-hero.jpeg';
import principalImage from '@/assets/principal.jpeg';

interface HomeProps {
  language: 'en' | 'bn';
}

const Home = ({ language }: HomeProps) => {
  const hero = content.hero;
  const about = content.about.college;
  const achievements = content.achievements;
  const facilities = content.facilities;
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
      className="min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
        variants={itemVariants}
      >
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="School Campus"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            {hero.title[language]}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 opacity-90"
            variants={itemVariants}
          >
            {hero.subtitle[language]}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/admission">
              <Button variant="hero" size="lg" className="mr-4">
                {language === 'en' ? 'Apply Now' : 'এখনই আবেদন করুন'}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className=" border-white hover:bg-gray-100 hover:text-primary">
                {language === 'en' ? 'Learn More' : 'আরও জানুন'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {about.title[language]}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {about.description[language]}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3000+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'en' ? 'Students' : 'শিক্ষার্থী'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'en' ? 'Years' : 'বছর'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-gray-600">
                    {language === 'en' ? 'Pass Rate' : 'পাস রেট'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'en' ? 'Teachers' : 'শিক্ষক'}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={principalImage} 
                alt="Principal"
                className="rounded-lg shadow-card w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-elegant">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Student Achievements */}
      <motion.section 
        className="py-20 bg-muted"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'en' ? 'Student Achievements' : 'শিক্ষার্থীদের অর্জন'}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === 'en' ? 'Celebrating excellence in academics and beyond' : 'একাডেমিক এবং অন্যান্য ক্ষেত্রে উৎকর্ষতা উদযাপন'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-gradient-card shadow-card group-hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {achievement.title[language]}
                    </h3>
                    <p className="text-gray-600 mb-1">{achievement.student}</p>
                    <p className="text-sm text-gray-500">{achievement.class}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Campus Facilities */}
      <motion.section 
        className="py-20 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'en' ? 'Campus Facilities' : 'ক্যাম্পাস সুবিধাসমূহ'}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === 'en' ? 'Modern infrastructure for comprehensive learning' : 'ব্যাপক শিক্ষার জন্য আধুনিক অবকাঠামো'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {facility.title[language]}
                </h3>
                <p className="text-gray-600">
                  {facility.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Teachers Section */}
      <motion.section 
        className="py-20 bg-muted"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'en' ? 'Our Distinguished Faculty' : 'আমাদের প্রতিষ্ঠিত শিক্ষকমণ্ডলী'}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === 'en' ? 'Experienced educators committed to excellence' : 'উৎকর্ষতার প্রতি প্রতিশ্রুতিবদ্ধ অভিজ্ঞ শিক্ষাবিদগণ'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.slice(0, 6).map((teacher, index) => (
              <motion.div
                key={teacher.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden shadow-card group-hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square bg-gradient-card flex items-center justify-center">
                    <Users className="w-20 h-20 text-primary opacity-50" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-secondary mb-1">{teacher.subject}</p>
                    <p className="text-sm text-gray-500">{teacher.designation}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/teachers">
              <Button variant="institutional" size="lg">
                {language === 'en' ? 'View All Teachers' : 'সকল শিক্ষক দেখুন'}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;