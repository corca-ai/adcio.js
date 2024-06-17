export const getKoreanWordSegment = (word: string) => {
  const lastLetterUni = word.slice(-1).charCodeAt(0);
  const [firstKorUni, lastKorUni] = [44032, 55203];
  const lastConsonantUni = 28;

  if (lastLetterUni >= firstKorUni && lastLetterUni <= lastKorUni) {
    const postposition =
      (lastLetterUni - firstKorUni) % lastConsonantUni !== 0 ? '과' : '와';
    return word + postposition;
  }
  return word + '와'; // not korean
};
