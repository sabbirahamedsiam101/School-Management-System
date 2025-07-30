import { motion } from 'framer-motion';
import content from '@/data/content.json';

interface NewsBarProps {
  language: 'en' | 'bn';
}

const NewsBar = ({ language }: NewsBarProps) => {
  const news = content.news;

  return (
    <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold mr-4 flex-shrink-0">
          {language === 'en' ? 'Latest News' : 'সর্বশেষ খবর'}
        </div>
        <motion.div
          className="flex space-x-8 text-sm"
          animate={{
            x: [0, -100 * news.length + 'px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...news, ...news].map((item, index) => (
            <div key={index} className="whitespace-nowrap">
              • {item[language]}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsBar;