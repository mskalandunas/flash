export const validateDeck =
    validators =>
        deck => validators.reduce(
            (isValid, validator) => isValid && validator(deck),
            true
        );