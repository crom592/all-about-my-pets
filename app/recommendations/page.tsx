"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MapPin, ArrowLeft, Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from 'react'
import { useToast } from "@/components/ui/use-toast"

const recommendations = [
  {
    id: 1,
    title: "서울시 반려동물 내장형 동물등록",
    description: "내장형 마이크로칩을 통한 동물등록 지원 (보호자 부담금 1만원)",
    eligibility: "서울시 거주자",
    distance: "2km 이내"
  },
  {
    id: 2,
    title: "우리동네 동물병원",
    description: "취약계층 반려동물 의료비 지원 (필수진료 30만원 상당, 선택진료 20만원 이내)",
    eligibility: "서울시 거주 취약계층",
    distance: "500m 이내"
  },
  {
    id: 3,
    title: "반려동물 시민학교",
    description: "반려동물 행동교정, 사회화, 예절 교육 등 무료 교육 제공",
    eligibility: "서울시민 누구나",
    distance: "1km 이내"
  }
]

export default function Recommendations() {
  const [loading, setLoading] = useState(true)
  const [userRecommendations, setUserRecommendations] = useState<Array<{
    id: number;
    title: string;
    description: string;
    eligibility: string;
    distance: string;
  }>>([])
  const { toast } = useToast()

  useEffect(() => {
    // 실제 앱에서는 여기서 API 호출을 통해 사용자 맞춤 추천을 가져올 수 있습니다.
    const timer = setTimeout(() => {
      setUserRecommendations(recommendations)
      setLoading(false)
      toast({
        title: "추천 정보가 업데이트되었습니다",
        description: "최신 정보를 확인해보세요!",
      })
    }, 1500) // 로딩 효과를 위해 1.5초 지연

    return () => clearTimeout(timer)
  }, [toast])

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2" /> 홈으로
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-primary flex items-center">
        <MapPin className="w-10 h-10 mr-2" />
        맞춤 추천
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid gap-6">
          {userRecommendations.map((recommendation) => (
            <Card key={recommendation.id} className="bg-card hover:bg-accent transition-colors duration-300 rounded-xl shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{recommendation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-secondary-foreground">{recommendation.description}</p>
                <p className="mb-2 text-muted-foreground"><strong>지원 대상:</strong> {recommendation.eligibility}</p>
                <p className="mb-4 text-muted-foreground"><strong>거리:</strong> {recommendation.distance}</p>
                <Button className="w-full">자세히 보기</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

