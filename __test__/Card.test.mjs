import { Card } from '../Card';

describe('Card', () => {
  test('a Card is created', () => {
    expect(new Card({})).toBeTruthy();
  });

  test('attempting to create Card without object throws', () => {
    expect(() => new Card()).toThrow('Card must be instantiated with an object');
  });

  test('getState returns state', () => {
    expect(new Card({}).getState()).toEqual({ status: 'unanswered' });
  });

  test('`answer` returns state with a status of "answered"', () => {
    expect(new Card({}).answer()).toEqual({ status: 'answered' });
  });

  test('`skip` returns state with a status of "skipped"', () => {
    expect(new Card({}).skip()).toEqual({ status: 'skipped' });
  });

  test('`display` returns config and status properties', () => {
    expect(new Card({
      answer: 'Answer',
      question: 'Question?',
      title: 'Title:'
    }).display()).toEqual({
      answer: 'Answer',
      question: 'Question?',
      status: 'unanswered',
      title: 'Title:'
    })
  });
});