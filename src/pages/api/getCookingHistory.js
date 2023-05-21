import { cookingHistoryList } from "@/utils/constants";

export default function handler(req, res) {
  cookingHistoryList.forEach((item, idx) => {
    cookingHistoryList[idx] = { ...item, thumbnail: `/images/${item.thumbnail}` }
  });
  res.status(200).json({ cookingHistoryList })
}
