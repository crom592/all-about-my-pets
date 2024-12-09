import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { PawPrint, MapPin, Heart, User, Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/logo.png" 
            alt="로고" 
            width={60} 
            height={60} 
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-primary">
            나의 팻의 모든것
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
        
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="/images/user-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
      
      <div className="grid grid-cols-2 gap-6">
        <Link href="/support-programs" className="col-span-2">
          <Card className="bg-gradient-to-r from-rose-400 to-red-500 hover:from-rose-500 hover:to-red-600 transition-all duration-300 rounded-3xl shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-6 h-40">
              <PawPrint className="w-16 h-16 text-white mb-4" />
              <h2 className="text-2xl font-semibold text-white">지원 사업 정보</h2>
            </CardContent>
          </Card>
        </Link>

        <Link href="/recommendations">
          <Card className="bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 rounded-3xl shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-6 h-40">
              <MapPin className="w-16 h-16 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white">맞춤 추천</h2>
            </CardContent>
          </Card>
        </Link>

        <Link href="/adoption">
          <Card className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 transition-all duration-300 rounded-3xl shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-6 h-40">
              <Heart className="w-16 h-16 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white">입양 정보</h2>
            </CardContent>
          </Card>
        </Link>

        <Link href="/profile">
          <Card className="bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600 transition-all duration-300 rounded-3xl shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-6 h-40">
              <User className="w-16 h-16 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white">내 프로필</h2>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-primary">최근 소식</h3>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">서울시 반려동물 등록 지원 사업이 시작되었습니다. 자세한 내용은 지원 사업 정보에서 확인하세요!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

