import React from 'react';
import { createRoot } from 'react-dom/client';
import { Card } from './components/Card';
import { LocalizationProvider } from './context';
import i18next from 'i18next';

i18next.init({
  fallbackLng: 'en'
}).then(() => {
  const App: React.FC = () => {
    return (
      <LocalizationProvider>
        <Card question="Hello?" answer="World" tags={[]} />
      </LocalizationProvider>
    );
  };
  
  const root = document.getElementById('root');
  
  if (root) {
    createRoot(root).render(<App />);
  }
  
});