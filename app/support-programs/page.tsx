"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { PawPrint, ArrowLeft, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useState } from 'react'

const nationalPrograms = [
  {
    id: 1,
    title: "유실·유기동물 입양비 지원",
    description: "유실·유기동물 입양 시 소요되는 부담비용 지원 (최대 25만원)",
    eligibility: "지자체에서 지정한 동물보호센터에서 유실·유기동물을 입양하려는 사람",
    agency: "농림축산식품부 동물복지정책과",
    contact: "044-201-2619"
  },
  {
    id: 2,
    title: "동물등록 신청·변경신고",
    description: "등록대상동물의 보호와 유기방지를 위한 등록 서비스",
    eligibility: "등록대상동물(반려견) 소유자",
    agency: "농림축산식품부 동물복지정책과",
    contact: "044-201-2373"
  }
]

const seoulPrograms = [
  {
    id: 1,
    title: "반려동물 내장형 동물등록",
    description: "내장형 마이크로칩을 통한 동물등록 활성화 사업 (보호자 부담금 1만원)",
    eligibility: "서울시민의 반려견과 반려묘 9,000마리",
    agency: "서울동물복지지원센터",
    contact: "070-8633-2882"
  },
  {
    id: 2,
    title: "우리동네 동물병원",
    description: "취약계층 반려동물 의료비 지원 (필수진료 30만원 상당, 선택진료 20만원 이내)",
    eligibility: "서울시 거주 취약계층의 반려동물",
    agency: "자치구 담당부서",
    contact: "해당 자치구 문의"
  },
  {
    id: 3,
    title: "우리동네 펫위탁소",
    description: "반려동물 위탁돌봄 최대 10일 지원",
    eligibility: "참여 자치구 거주 취약계층의 반려동물",
    agency: "자치구 담당부서",
    contact: "해당 자치구 문의"
  },
  {
    id: 4,
    title: "반려견 장례지원",
    description: "반려견 기본장례 지원 (서울시 15만원/마리, 주관업체 13만원/마리 지원)",
    eligibility: "서울시 거주 취약계층의 동물등록된 반려견",
    agency: "서울시, ㈜21그램그룹",
    contact: "1688-1240"
  }
]

export default function SupportPrograms() {
  const [searchTerm, setSearchTerm] = useState('')

  const filterPrograms = (programs) => {
    return programs.filter(program => 
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2" /> 홈으로
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-primary flex items-center">
        <PawPrint className="w-10 h-10 mr-2" />
        반려동물 지원 사업 정보
      </h1>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="지원 사업 검색..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="seoul" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="seoul">서울시 지원 프로그램</TabsTrigger>
          <TabsTrigger value="national">전국 지원 프로그램</TabsTrigger>
        </TabsList>
        <TabsContent value="seoul">
          <div className="grid gap-6">
            {filterPrograms(seoulPrograms).map((program) => (
              <Card key={program.id} className="bg-card hover:bg-accent transition-colors duration-300 rounded-xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-secondary-foreground">{program.description}</p>
                  <p className="mb-2 text-muted-foreground"><strong>지원 대상:</strong> {program.eligibility}</p>
                  <p className="mb-2 text-muted-foreground"><strong>담당 기관:</strong> {program.agency}</p>
                  <p className="mb-4 text-muted-foreground"><strong>문의:</strong> {program.contact}</p>
                  <Button className="w-full">자세히 보기</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="national">
          <div className="grid gap-6">
            {filterPrograms(nationalPrograms).map((program) => (
              <Card key={program.id} className="bg-card hover:bg-accent transition-colors duration-300 rounded-xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-secondary-foreground">{program.description}</p>
                  <p className="mb-2 text-muted-foreground"><strong>지원 대상:</strong> {program.eligibility}</p>
                  <p className="mb-2 text-muted-foreground"><strong>담당 기관:</strong> {program.agency}</p>
                  <p className="mb-4 text-muted-foreground"><strong>문의:</strong> {program.contact}</p>
                  <Button className="w-full">자세히 보기</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

