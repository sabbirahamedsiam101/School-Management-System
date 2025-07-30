import Home from './Home';

const Index = ({ language = 'en' }: { language?: 'en' | 'bn' }) => {
  return <Home language={language} />;
};

export default Index;
