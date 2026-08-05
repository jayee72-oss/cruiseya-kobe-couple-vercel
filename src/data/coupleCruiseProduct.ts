export type CabinType = "inside" | "ocean" | "balcony";
export type Cabin = { type: CabinType; name: string; price: string; note: string; recommended?: boolean };
export const cabins: Cabin[] = [
  { type: "ocean", name: "오션뷰", price: "1인 1,080,000원부터", note: "창 너머 바다를 보며 여유를 즐기는, 두 분께 가장 균형 잡힌 선택", recommended: true },
  { type: "balcony", name: "발코니", price: "1인 1,180,000원부터", note: "객실에서도 바다와 석양을 가까이 만나는 기념여행형 선택" },
  { type: "inside", name: "인사이드", price: "1인 980,000원부터", note: "선내 프로그램을 알차게 즐기는 실속형 선택" },
];
export const product = { departure: "2026년 9월 12일 토요일", duration: "2박 3일", ship: "코스타 세레나호", port: "부산항 국제여객터미널", destination: "일본 고베", price: "1인 980,000원부터" };
