"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft, Info, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import Image from 'next/image'

const adoptionPets = [
  {
    id: 1,
    name: "초코",
    type: "강아지",
    breed: "믹스",
    age: "2살",
    image: "/images/choco.jpg"
  },
  {
    id: 2,
    name: "나비",
    type: "고양이",
    breed: "러시안 블루",
    age: "1살",
    image: "/images/nabi.jpg"
  },
  {
    id: 3,
    name: "뽀삐",
    type: "강아지",
    breed: "말티즈",
    age: "3살",
    image: "/images/poppy.jpg"
  },
  {
    id: 4,
    name: "루시",
    type: "고양이",
    breed: "페르시안",
    age: "4살",
    image: "/images/lucy.jpg"
  }
]

const adoptionInfo = {
  title: "유실·유기동물 입양비 지원",
  description: "유실·유기동물 입양 시 소요되는 부담비용을 지원합니다 (최대 25만원)",
  eligibility: "지자체에서 지정한 동물보호센터에서 유실·유기동물을 입양하려는 사람",
  contact: "농림축산식품부 동물복지정책과 (044-201-2619)"
}

export default function Adoption() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPets = adoptionPets.filter(pet => 
    pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="mr-2" /> 홈으로
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-primary flex items-center">
        <Heart className="w-10 h-10 mr-2" />
        입양 정보
      </h1>
      
      <Card className="bg-card mb-8 rounded-xl shadow-md">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center">
            <Info className="w-6 h-6 mr-2" />
            {adoptionInfo.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-secondary-foreground">{adoptionInfo.description}</p>
          <p className="mb-2 text-muted-foreground"><strong>지원 대상:</strong> {adoptionInfo.eligibility}</p>
          <p className="mb-4 text-muted-foreground"><strong>문의:</strong> {adoptionInfo.contact}</p>
        </CardContent>
      </Card>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="입양 가능한 동물 검색..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-primary">입양 가능한 동물</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPets.map((pet) => (
          <Card key={pet.id} className="bg-card hover:bg-accent transition-colors duration-300 rounded-xl shadow-md overflow-hidden">
            <Image src={pet.image} alt={pet.name} width={400} height={300} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="text-xl text-primary">{pet.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-secondary-foreground"><strong>종류:</strong> {pet.type}</p>
              <p className="mb-2 text-secondary-foreground"><strong>품종:</strong> {pet.breed}</p>
              <p className="mb-4 text-secondary-foreground"><strong>나이:</strong> {pet.age}</p>
              <Button className="w-full">입양 신청</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

