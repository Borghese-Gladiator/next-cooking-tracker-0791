import { cookingHistory } from "@/utils/constants";

export default function handler(req, res) {
  res.status(200).json({ cookingHistory })
}
