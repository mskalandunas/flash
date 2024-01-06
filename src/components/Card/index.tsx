import React from 'react';
import { Card as TCard } from './Card';
import { useLocalizationContext } from '../../context';

export const Card: TCard = ({ answer, question, tags }) => {
  const { answerText, questionText } = useLocalizationContext().CARD;

  return (
    <div>
      <h1>{questionText(question)}</h1>
      <p>{answerText(answer)}</p>
    </div>
  );
};