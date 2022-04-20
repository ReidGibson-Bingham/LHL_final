import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData(initialMode) {
  const [state, setState] = useState({
    errorCount: 0,
    textId: 0,
    textDifficultyId: 0,
    typingTime: 0,
  });
  return { state };
}
