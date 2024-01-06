import { FC } from 'react';

interface CardProps {
  answer: string;
  question: string;
  tags: string[]
}

export type Card = React.FC<CardProps>;