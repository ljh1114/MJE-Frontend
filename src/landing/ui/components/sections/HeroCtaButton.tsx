"use client";

import Link from "next/link";
import svgPaths from "@/landing/ui/components/assets/svgPaths";
import { useLandingTopTracking } from "@/landing/hooks/useLandingTopTracking";

export default function HeroCtaButton() {
  const { handleLandingTopClick } = useLandingTopTracking();

  return (
    <Link
      href="/home"
      onClick={handleLandingTopClick}
      aria-label="데이트 코스 만들기"
      className="absolute h-[44.184px] left-[130px] rounded-[22.092px] top-[599.21px] w-[271.569px] block overflow-hidden shadow-[0px_3px_17.1px_0px_rgba(255,255,255,0.7)] transition-transform active:scale-[0.98]"
      style={{ backgroundImage: "linear-gradient(109.889deg, rgba(138, 175, 230, 0.74) 3.3578%, rgba(213, 230, 246, 0.74) 104.08%)" }}
    >
      <span className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-[22.092px] pointer-events-none" />
      <span
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[22px] left-[53.84px] text-[#2a4874] text-[16px] top-[12.09px] whitespace-nowrap pointer-events-none"
        style={{ fontVariationSettings: "'wght' 500" }}
      >
        데이트 코스 만들기 !
      </span>
      <span className="absolute left-[197.78px] size-[19.943px] top-[13.12px] pointer-events-none">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9434 19.9434">
          <g>
            <mask height="20" id="mask_arrow_right_btn" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
              <rect fill="#D9D9D9" height="19.9434" width="19.9434" />
            </mask>
            <g mask="url(#mask_arrow_right_btn)">
              <path d={svgPaths.pde23d00} fill="#2A4874" />
            </g>
          </g>
        </svg>
      </span>
    </Link>
  );
}
