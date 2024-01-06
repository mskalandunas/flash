import { createContext, PropsWithChildren, useContext } from 'react';
import i18next from 'i18next';
import { Text } from './Localization';

class LocalizedText {
  private _localizedText: Text;

  constructor() {
    this._localizedText = {
      CARD: {
        answerText: (answer: string) => {
          return i18next.t('CARD-ANSWER', {
            answer,
            defaultValue: 'A: {{answer}}'
          });
        },
        questionText: (question: string) => {
          return i18next.t('CARD-QUESTION', {
            question,
            defaultValue: 'Q: {{question}}'
          });
        }
      }
    }
  }
  
  public getText() { return this._localizedText; } 
}

const LocalizationContext = createContext<Text | null>(null);

export const useLocalizationContext = () => useContext(LocalizationContext) as Text;

export const LocalizationProvider = ({ children }: PropsWithChildren) => {
  return (
    <LocalizationContext.Provider value={new LocalizedText().getText()}>
      {children}
    </LocalizationContext.Provider>
  );
};