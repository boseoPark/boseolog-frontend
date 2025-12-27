import { useEffect } from "react";
import "../assets/styles/trail-cursor.css";

export default function TrailCursor({
  enabled = true,
  rateMs = 18,     // 생성 간격 (낮을수록 더 촘촘)
  lifeMs = 520,    // 파티클 수명 (CSS animation과 맞추기)
}) {
  useEffect(() => {
    if (!enabled) return;

    const layer = document.createElement("div");
    layer.className = "cursor-trail-layer";
    document.body.appendChild(layer);

    // 모바일/터치 환경에서는 기본적으로 끔(원하면 빼셔도 됨)
    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      layer.remove();
      return;
    }

    const colors = [
      "rgba(255, 220, 245, 0.95)", // 연핑크
      "rgba(225, 200, 255, 0.95)", // 연보라
      "rgba(255, 245, 210, 0.95)", // 크림
    ];

    let last = 0;

    const spawn = (x, y) => {
      const el = document.createElement("div");
      el.className = "cursor-star";

      // 살짝 랜덤 오프셋/크기
      const dx = (Math.random() - 0.5) * 10;
      const dy = (Math.random() - 0.5) * 10;
      const size = 6 + Math.random() * 6;

      el.style.left = `${x + dx}px`;
      el.style.top = `${y + dy}px`;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.background = colors[(Math.random() * colors.length) | 0];

      layer.appendChild(el);

      window.setTimeout(() => el.remove(), lifeMs + 60);
    };

    const onMove = (e) => {
      const now = performance.now();
      if (now - last < rateMs) return;
      last = now;
      spawn(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      layer.remove();
    };
  }, [enabled, rateMs, lifeMs]);

  return null;
}
