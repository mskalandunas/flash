import { Deck } from '../Deck';

const MOCK_DECK = [
  { getState: () => ({ status: 'answered' }) },
  { getState: () => ({ status: 'answered' }) },
  { getState: () => ({ status: 'skipped' }) },
  { getState: () => ({ status: 'unanswered' }) }
];

describe('Deck', () => {
  test('`filterByAnswered` returns a list of cards with an "answered" status', () => {
    expect(new Deck(MOCK_DECK).filterByAnswered()).toMatchObject([
      { getState: () => ({ status: 'answered'}) },
      { getState: () => ({ status: 'answered'}) }
    ]);
  });

  test('`filterBySkipped` returns a list of cards with a "skipped" status', () => {
    expect(new Deck(MOCK_DECK).filterBySkipped()).toEqual([{ getState: () => ({ status: 'skipped'}) }]);
  });

  test('`filterByUnanswered` returns a list of cards with an "unanswered" status', () => {
    expect(new Deck(MOCK_DECK).filterByUnanswered()).toEqual([{ getState: () => ({ status: 'unanswered'}) }]);
  });

  test('`getDeck` returns the deck list', () => {
    expect(new Deck(MOCK_DECK).getDeck()).toEqual(MOCK_DECK);
    expect(new Deck(MOCK_DECK).getDeck() !== MOCK_DECK).toBe(true);
  });

  test('deck only allows cards with statuses of "answered", "skipped", and "unanswered"', () => {

  });
});