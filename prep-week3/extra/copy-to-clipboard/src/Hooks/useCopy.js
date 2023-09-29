const useCopy = () => {
  const handleCopy = async (string) => {
    try {
      return await navigator.clipboard.writeText(string);
    } catch (e) {
      console.error(e);
    }
  };

  return [handleCopy];
};

export { useCopy };
