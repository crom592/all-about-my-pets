"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { User, ArrowLeft, Edit, PawPrint, Bell } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"

const initialUserProfile = {
  name: "김철수",
  email: "chulsoo@example.com",
  location: "서울시 강남구",
  pets: [
    { name: "멍멍이", type: "강아지", breed: "골든 리트리버", age: "3살", image: "/images/dog.jpg" },
    { name: "야옹이", type: "고양이", breed: "페르시안", age: "2살", image: "/images/cat.jpg" }
  ]
}

const initialSupportPrograms = [
  { name: "반려동물 내장형 동물등록", status: "신청 가능" },
  { name: "우리동네 동물병원", status: "이용 중" },
  { name: "반려동물 시민학교", status: "수료" }
]

export default function Profile() {
  const [userProfile] = useState(initialUserProfile)
  const [supportPrograms] = useState(initialSupportPrograms)
  const { toast } = useToast()

  const handleEditProfile = () => {
    toast({
      title: "프로필 수정",
      description: "프로필 수정 기능이 곧 추가될 예정입니다.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2" /> 홈으로
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-primary flex items-center">
        <User className="w-10 h-10 mr-2" />
        내 프로필
      </h1>
      <Card className="bg-card rounded-xl shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="w-16 h-16 mr-4">
                <AvatarImage src="/images/user-avatar.jpg" alt={userProfile.name} />
                <AvatarFallback>{userProfile.name[0]}</AvatarFallback>
              </Avatar>
              {userProfile.name}
            </div>
            <Button onClick={handleEditProfile}>
              <Edit className="w-4 h-4 mr-2" /> 프로필 수정
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-secondary-foreground"><strong>이메일:</strong> {userProfile.email}</p>
          <p className="mb-4 text-secondary-foreground"><strong>위치:</strong> {userProfile.location}</p>
        </CardContent>
      </Card>
      
      <h2 className="text-2xl font-bold mb-4 text-primary">나의 반려동물</h2>
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {userProfile.pets.map((pet, index) => (
          <Card key={index} className="bg-card hover:bg-accent transition-colors duration-300 rounded-xl shadow-md overflow-hidden">
            <div className="h-40 overflow-hidden">
              <Image 
                src={pet.image} 
                alt={pet.name} 
                width={400} 
                height={300} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">{pet.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-secondary-foreground"><strong>종류:</strong> {pet.type}</p>
              <p className="mb-2 text-secondary-foreground"><strong>품종:</strong> {pet.breed}</p>
              <p className="mb-2 text-secondary-foreground"><strong>나이:</strong> {pet.age}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-primary">지원 프로그램 현황</h2>
      <Card className="bg-card rounded-xl shadow-md">
        <CardContent className="divide-y divide-gray-200">
          {supportPrograms.map((program, index) => (
            <div key={index} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
              <span className="flex items-center">
                <PawPrint className="w-5 h-5 mr-2 text-primary" />
                {program.name}
              </span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                program.status === '신청 가능' ? 'bg-green-100 text-green-800' :
                program.status === '이용 중' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {program.status}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
          <Bell className="w-6 h-6 mr-2" />
          알림
        </h3>
        <Card className="bg-card rounded-xl shadow-md">
          <CardContent>
            <p className="text-secondary-foreground">새로운 지원 프로그램이 추가되었습니다. 확인해보세요!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

