import { ValidationError } from './ValidationError';

export class Card {
  #CARD_STATE = {
    ANSWERED: 'answered',
    SKIPPED: 'skipped',
    UNANSWERED: 'unanswered'
  };

  #MISSING_CONFIG_ERROR_MESSAGE = 'Card must be instantiated with an object';

  #config;

  constructor(config) {
    if (!config) {
      throw new ValidationError(this.#MISSING_CONFIG_ERROR_MESSAGE);
    }

    this.#config = {
      answer: config.answer,
      question: config.question,
      title: config.title
    };
  };

  #state = { status: this.#CARD_STATE.UNANSWERED };

  #updateState = status => (this.#state = { status }) && this.#state;

  answer = () => this.#updateState(this.#CARD_STATE.ANSWERED);

  display = () => ({ ...this.#config, ...this.#state });

  getState = () => this.#state;

  skip = () => this.#updateState(this.#CARD_STATE.SKIPPED);
}