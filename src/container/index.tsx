import axios from "axios";

export const getQuestion = async (questionAmount: number, difficulty: string) => {
  const { data: { results } } = await axios.get(`https://opentdb.com/api.php?amount=${questionAmount}&category=21&difficulty=${difficulty}&type=multiple`);
  return results;
}