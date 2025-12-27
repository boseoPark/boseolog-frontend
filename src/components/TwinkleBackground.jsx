import { useEffect } from "react";
import { initTwinkle } from "../scripts/twinkle";
import "../assets/styles/twinkle.css";

export default function TwinkleBackground() {
  useEffect(() => {
    initTwinkle({
      starCount: 150,
      heartCount: 18,
    });
  }, []);

  return null; // DOM은 JS가 직접 붙임
}
