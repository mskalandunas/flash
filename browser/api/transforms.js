export const transformDeck = ({  data, meta }) => {
  return {
    canonicalName: meta.canonical_name,
    cards: data,
    description: meta.description,
    name: meta.name
  };
};