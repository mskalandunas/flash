interface CardText {
  answerText: (answer: string) => string;
  questionText: (question: string) => string;
}

export interface Text {
  CARD: CardText;
}