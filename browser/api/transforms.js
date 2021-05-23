export const transformDeck = ({  data, meta }) => {
  return {
    canonicalName: meta.canonical_name,
    data,
    description: meta.description,
    name: meta.name
  };
};