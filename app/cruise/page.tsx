import type { Metadata } from "next";
import { CruiseLanding } from "../../components/CruiseLanding";

export const metadata: Metadata = {
  title: "2026 부산 출발 부부 크루즈 2박 3일 | 고베·코스타 세레나 | 크루즈야",
  description: "2026년 9월 12일 부산항 출발. 크루즈가 처음인 중장년 부부도 전문 인솔자의 안내를 받으며 선상 숙박과 식사, 공연, 일본 고베 관광을 즐기는 2박 3일 한일 크루즈입니다. 1인 98만 원부터.",
  alternates: { canonical: "/cruise" },
  openGraph: { title: "2026 부산 출발 부부 크루즈", description: "부산에서 출발하는 고베 2박 3일 부부 크루즈", locale: "ko_KR", type: "website" },
};

export default function CruisePage() {
  return <CruiseLanding />;
}
