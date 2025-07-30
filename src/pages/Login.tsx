import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import content from '@/data/content.json';

interface LoginProps {
  language: 'en' | 'bn';
}

const Login = ({ language }: LoginProps) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form:', loginForm);
    // Handle login submission
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup form:', signupForm);
    // Handle signup submission
  };

  return (
    <motion.div
      className="min-h-screen py-12 bg-gradient-to-br from-primary/5 to-secondary/5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-md mx-auto px-4">
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">SC</span>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            {content.siteInfo.name[language]}
          </h1>
          <p className="text-gray-600">
            {language === 'en' 
              ? 'Access your student or teacher portal' 
              : 'আপনার শিক্ষার্থী বা শিক্ষক পোর্টালে প্রবেশ করুন'
            }
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="shadow-elegant">
            <CardContent className="p-0">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-t-lg rounded-b-none h-12">
                  <TabsTrigger 
                    value="login" 
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {language === 'en' ? 'Login' : 'লগইন'}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signup" 
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {language === 'en' ? 'Sign Up' : 'নিবন্ধন'}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="p-6 mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="loginEmail">
                          {language === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="loginEmail"
                            type="email"
                            value={loginForm.email}
                            onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                            placeholder={language === 'en' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="loginPassword">
                          {language === 'en' ? 'Password' : 'পাসওয়ার্ড'}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="loginPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={loginForm.password}
                            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                            placeholder={language === 'en' ? 'Enter your password' : 'আপনার পাসওয়ার্ড লিখুন'}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-gray-600">
                            {language === 'en' ? 'Remember me' : 'মনে রাখুন'}
                          </span>
                        </label>
                        <a href="#" className="text-primary hover:underline">
                          {language === 'en' ? 'Forgot password?' : 'পাসওয়ার্ড ভুলে গেছেন?'}
                        </a>
                      </div>

                      <Button type="submit" className="w-full" variant="default" size="lg">
                        <User className="w-5 h-5 mr-2" />
                        {language === 'en' ? 'Sign In' : 'সাইন ইন'}
                      </Button>
                    </form>

                    <div className="mt-6 text-center">
                      <div className="text-sm text-gray-600 mb-4">
                        {language === 'en' ? 'Or sign in with' : 'অথবা সাইন ইন করুন'}
                      </div>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full">
                          {language === 'en' ? 'Student Portal' : 'শিক্ষার্থী পোর্টাল'}
                        </Button>
                        <Button variant="outline" className="w-full">
                          {language === 'en' ? 'Teacher Portal' : 'শিক্ষক পোর্টাল'}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="signup" className="p-6 mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleSignupSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="signupName">
                          {language === 'en' ? 'Full Name' : 'সম্পূর্ণ নাম'}
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="signupName"
                            value={signupForm.name}
                            onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                            placeholder={language === 'en' ? 'Enter your full name' : 'আপনার সম্পূর্ণ নাম লিখুন'}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="signupEmail">
                          {language === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="signupEmail"
                            type="email"
                            value={signupForm.email}
                            onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                            placeholder={language === 'en' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="signupPassword">
                          {language === 'en' ? 'Password' : 'পাসওয়ার্ড'}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="signupPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={signupForm.password}
                            onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                            placeholder={language === 'en' ? 'Create a password' : 'একটি পাসওয়ার্ড তৈরি করুন'}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="confirmPassword">
                          {language === 'en' ? 'Confirm Password' : 'পাসওয়ার্ড নিশ্চিত করুন'}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={signupForm.confirmPassword}
                            onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                            placeholder={language === 'en' ? 'Confirm your password' : 'আপনার পাসওয়ার্ড নিশ্চিত করুন'}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 text-sm">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" required />
                        <span className="text-gray-600">
                          {language === 'en' 
                            ? 'I agree to the Terms of Service and Privacy Policy'
                            : 'আমি সেবার শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত'
                          }
                        </span>
                      </div>

                      <Button type="submit" className="w-full" variant="default" size="lg">
                        <User className="w-5 h-5 mr-2" />
                        {language === 'en' ? 'Create Account' : 'অ্যাকাউন্ট তৈরি করুন'}
                      </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                      {language === 'en' 
                        ? 'Note: Account creation requires admin approval for security purposes.'
                        : 'নোট: নিরাপত্তার জন্য অ্যাকাউন্ট তৈরিতে প্রশাসনিক অনুমোদন প্রয়োজন।'
                      }
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="text-center mt-8 text-sm text-gray-600"
          variants={itemVariants}
        >
          {language === 'en' 
            ? 'Need help? Contact the school office at '
            : 'সাহায্য প্রয়োজন? স্কুল অফিসে যোগাযোগ করুন '
          }
          <a href={`tel:${content.siteInfo.phone}`} className="text-primary hover:underline">
            {content.siteInfo.phone}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;