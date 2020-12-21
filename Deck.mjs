export class Deck {
    #deck;

    #FILTERS = {
        ANSWERED: 'answered',
        SKIPPED: 'skipped',
        UNANSWERED: 'unanswered'
    };

    constructor(deck) {
        // TODO: deep copy
        this.#deck = deck;
    };

    #filterBy = cb => this.#deck.filter(cb);

    #filterByAnswered = card => card.getState().status === this.#FILTERS.ANSWERED;

    #filterBySkipped = card => card.getState().status === this.#FILTERS.SKIPPED;

    #filterByUnanswered = card => card.getState().status === this.#FILTERS.UNANSWERED;

    filterByAnswered = () => this.#filterBy(this.#filterByAnswered);

    filterBySkipped = () => this.#filterBy(this.#filterBySkipped);

    filterByUnanswered = () => this.#filterBy(this.#filterByUnanswered);

    getDeck = () => this.#deck;
}