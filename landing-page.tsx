'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, Star, Facebook, Instagram, Linkedin, Twitter, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LandingPage() {
  const [activeServiceSlide, setActiveServiceSlide] = useState(0)
  const [activeReview, setActiveReview] = useState(0)
  const [activeDoctorSlide, setActiveDoctorSlide] = useState(0)
  const [showAppointmentDialog, setShowAppointmentDialog] = useState(false)

  const services = [
    {
      title: "Дерматология 24/7",
      description: "От диагностики до лечения кожных заболеваний, мы заботимся о здоровье вашей кожи.",
      doctor: {
        name: "Д-р Анна Иванова",
        photo: "/placeholder.svg",
        description: "Опытный дерматолог с 10-летним стажем работы. Специализируется на лечении акне, экземы и псориаза."
      },
      prices: [
        { service: "Консультация дерматолога", price: "100 000 сум" },
        { service: "Диагностика кожных заболеваний", price: "150 000 сум" },
        { service: "Лечение акне", price: "от 200 000 сум" },
        { service: "Лечение экземы", price: "от 250 000 сум" },
        { service: "Лечение псориаза", price: "от 300 000 сум" },
        { service: "Удаление бородавок", price: "80 000 сум" },
        { service: "Криотерапия", price: "120 000 сум" },
        { service: "Фототерапия", price: "180 000 сум" },
        { service: "Биопсия кожи", price: "200 000 сум" },
        { service: "Лазерная терапия", price: "от 350 000 сум" },
      ],
    },
    {
      title: "ЛОР 24/7",
      description: "Профессиональная диагностика и лечение заболеваний уха, горла и носа.",
      doctor: {
        name: "Д-р Сергей Петров",
        photo: "/placeholder.svg",
        description: "Высококвалифицированный отоларинголог с опытом работы более 15 лет. Эксперт в лечении синуситов и тонзиллитов."
      },
      prices: [
        { service: "Консультация ЛОР-врача", price: "90 000 сум" },
        { service: "Эндоскопия носа", price: "180 000 сум" },
        { service: "Лечение синусита", price: "от 250 000 сум" },
        { service: "Лечение тонзиллита", price: "от 200 000 сум" },
        { service: "Промывание миндалин", price: "150 000 сум" },
        { service: "Аудиометрия", price: "100 000 сум" },
        { service: "Удаление серных пробок", price: "80 000 сум" },
        { service: "Лечение отита", price: "от 180 000 сум" },
        { service: "Риноскопия", price: "120 000 сум" },
        { service: "Лечение храпа", price: "от 300 000 сум" },
      ],
    },
    {
      title: "Стоматология 24/7",
      description: "Современная стоматологическая помощь для здоровья ваших зубов.",
      doctor: {
        name: "Д-р Елена Смирнова",
        photo: "/placeholder.svg",
        description: "Стоматолог-терапевт с 12-летним опытом. Специализируется на эстетической стоматологии и лечении сложных случаев кариеса."
      },
      prices: [
        { service: "Осмотр и консультация", price: "80 000 сум" },
        { service: "Профессиональная чистка зубов", price: "200 000 сум" },
        { service: "Лечение кариеса", price: "от 300 000 сум" },
        { service: "Отбеливание зубов", price: "500 000 сум" },
        { service: "Установка пломбы", price: "от 250 000 сум" },
        { service: "Лечение пульпита", price: "от 400 000 сум" },
        { service: "Удаление зуба", price: "от 200 000 сум" },
        { service: "Установка коронки", price: "от 800 000 сум" },
        { service: "Имплантация зуба", price: "от 2 000 000 сум" },
        { service: "Исправление прикуса", price: "от 5 000 000 сум" },
      ],
    },
    {
      title: "Педиатрия 24/7",
      description: "Забота о здоровье ваших детей в любое время дня и ночи.",
      doctor: {
        name: "Д-р Ольга Николаева",
        photo: "/placeholder.svg",
        description: "Опытный педиатр с 20-летним стажем. Специализируется на детской аллергологии и иммунологии."
      },
      prices: [
        { service: "Консультация педиатра", price: "110 000 сум" },
        { service: "Вакцинация", price: "от 150 000 сум" },
        { service: "Диспансеризация", price: "300 000 сум" },
        { service: "Аллергологическое обследован��е", price: "250 000 сум" },
        { service: "Лечение ОРВИ", price: "от 200 000 сум" },
        { service: "Консультация по грудному вскармливанию", price: "100 000 сум" },
        { service: "УЗИ для детей", price: "180 000 сум" },
        { service: "Лечение атопического дерматита", price: "от 300 000 сум" },
        { service: "Консультация по питанию", price: "120 000 сум" },
        { service: "Лечение бронхиальной астмы", price: "от 400 000 сум" },
      ],
    },
    {
      title: "Лаборатория",
      description: "Современные методы диагностики и точные результаты анализов.",
      doctor: {
        name: "Д-р Наталья Кузнецова",
        photo: "/placeholder.svg",
        description: "Врач-лаборант высшей категории с 18-летним опытом работы. Эксперт в области клинической биохимии и гематологии."
      },
      prices: [
        { service: "Общий анализ крови", price: "50 000 сум" },
        { service: "Биохимический анализ крови", price: "120 000 сум" },
        { service: "ПЦР-тест", price: "180 000 сум" },
        { service: "Анализ на гормоны", price: "200 000 сум" },
        { service: "Анализ на аллергены", price: "300 000 сум" },
        { service: "Анализ мочи", price: "40 000 сум" },
        { service: "Анализ кала", price: "60 000 сум" },
        { service: "Анализ на ЗППП", price: "250 000 сум" },
        { service: "Генетический анализ", price: "от 500 000 сум" },
        { service: "Цитологическое исследование", price: "150 000 сум" },
      ],
    },
    {
      title: "Диагностика",
      description: "Комплексное обследование с использованием современного оборудования.",
      doctor: {
        name: "Д-р Виктор Лебедев",
        photo: "/placeholder.svg",
        description: "Врач-диагност с 25-летним стажем. Специализируется на УЗИ-диагностике и интерпретации сложных случаев."
      },
      prices: [
        { service: "УЗИ органов брюшной полости", price: "150 000 сум" },
        { service: "МРТ головного мозга", price: "500 000 сум" },
        { service: "КТ грудной клетки", price: "400 000 сум" },
        { service: "Рентген", price: "100 000 сум" },
        { service: "ЭКГ", price: "80 000 сум" },
        { service: "УЗИ сердца", price: "200 000 сум" },
        { service: "Маммография", price: "250 000 сум" },
        { service: "Денситометрия", price: "180 000 сум" },
        { service: "Колоноскопия", price: "350 000 сум" },
        { service: "Гастроскопия", price: "300 000 сум" },
      ],
    },
  ]

  const doctors = [
    {
      name: "Шарлотта Браун",
      specialty: "ПСИХОЛОГ",
      description: "Помощь при тревожности, расстройствах пищевого поведения, панических атаках, медикаментозном лечении.",
      image: "/placeholder.svg",
    },
    {
      name: "Скотт Петерсон",
      specialty: "ДЕРМАТОЛОГ",
      description: "Опыт в диагностике и лечении широкого спектра дерматологических заболеваний.",
      image: "/placeholder.svg",
    },
    {
      name: "Джудит Перри",
      specialty: "ГИНЕКОЛОГ",
      description: "Сострадательный и опытный гинеколог, посвятивший себя здоровью и благополучию женщин.",
      image: "/placeholder.svg",
    },
    {
      name: "Майкл Чен",
      specialty: "КАРДИОЛОГ",
      description: "Специализируется на сердечно-сосудистом здоровье и профилактической помощи.",
      image: "/placeholder.svg",
    },
    {
      name: "Сара Джонсон",
      specialty: "НЕВРОЛОГ",
      description: "Эксперт в лечении сложных неврологических состояний.",
      image: "/placeholder.svg",
    },
    {
      name: "Дэвид Уилсон",
      specialty: "ПЕДИАТР",
      description: "Посвятил себя предоставлению комплексной помощи детям.",
      image: "/placeholder.svg",
    },
  ]

  const reviews = [
    {
      text: "Онлайн-консультация с моим врачом была отличным опытом. Как будто я был там лично, но из комфорта своего дома.",
      author: "Венди Б.",
      rating: 5,
    },
    {
      text: "Отличный сервис и очень профессиональные врачи. Настоятельно рекомендую!",
      author: "Иван М.",
      rating: 5,
    },
    {
      text: "Быстрый и эффективный процесс консультации. Очень доволен услугой.",
      author: "Светлана К.",
      rating: 5,
    },
    {
      text: "Отличный опыт онлайн-консультации. Врач был очень тщательным.",
      author: "Михаил Р.",
      rating: 5,
    },
    {
      text: "Очень удобный и профессиональный сервис. Обязательно воспользуюсь снова.",
      author: "Елена Л.",
      rating: 5,
    },
    {
      text: "Выдающаяся медицинская помощь и внимание к деталям. Спасибо!",
      author: "Роберт П.",
      rating: 5,
    },
    {
      text: "Врачи клиники проявили высокий профессионализм и внимание к моей проблеме. Рекомендую!",
      author: "Анна С.",
      rating: 5,
    },
    {
      text: "Удобно, что можно получить консультацию, не выходя из дома. Сэкономил много времени.",
      author: "Дмитрий К.",
      rating: 5,
    },
    {
      text: "Приятно удивлена качеством онлайн-консультации. Врач был очень внимателен и дал подробные рекомендации.",
      author: "Ольга В.",
      rating: 5,
    },
  ]

  const totalSlides = Math.ceil(doctors.length / 3)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">+</span>
          </div>
          <span  className="sr-only">Янги Хаёт Диагностика</span>
        </Link>
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link className="text-base font-medium hover:underline underline-offset-4" href="#services">
              Услуги
            </Link>
            <Link className="text-base font-medium hover:underline underline-offset-4" href="#doctors">
              Врачи
            </Link>
            <Link className="text-base font-medium hover:underline underline-offset-4" href="#about-clinic">
              О клинике
            </Link>
            <Link className="text-base font-medium hover:underline underline-offset-4" href="#reviews">
              Отзывы
            </Link>
          </nav>
        </div>
        <Button size="sm" style={{ backgroundColor: "#0066FF", color: "white" }}>
          Записаться на прием
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="sm" variant="ghost">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link className="text-base font-medium hover:underline underline-offset-4" href="#services">
                Услуги
              </Link>
              <Link className="text-base font-medium hover:underline underline-offset-4" href="#doctors">
                Врачи
              </Link>
              <Link className="text-base font-medium hover:underline underline-offset-4" href="#about-clinic">
                О клинике
              </Link>
              <Link className="text-base font-medium hover:underline underline-offset-4" href="#reviews">
                Отзывы
              </Link>
            </nav>
            <Button className="mt-4 w-full" style={{ backgroundColor: "#0066FF", color: "white" }}>
              Записаться на прием
            </Button>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-screen flex items-center pt-8 md:pt-0">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 lg:pr-8">
                <div className="space-y-4">
                  <div className="inline-flex px-3 py-1 text-sm bg-[#F0F8FF] text-blue-500 rounded-[10px]">
                    МЫ ЗАБОТИМСЯ О ВАШЕМ ЗДОРОВЬЕ
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Круглосуточная клиника в Ташкенте
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-lg lg:text-xl">
                    Клиника "Yangi Hayot" в Ташкенте предоставляет круглосуточные медицинские услуги. Опытные врачи готовы помочь в любое время, обеспечивая качественный уход и комфорт для вашего здоровья.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button style={{ backgroundColor: "#0066FF", color: "white" }}>Записаться на прием</Button>
                  <Button variant="outline" style={{ borderColor: "#0066FF", color: "#0066FF" }}>
                    Как это работает
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-3xl font-bold">12</span>
                  <span className="text-[#0066FF] font-bold">+</span>
                  <span>Лет помогаем пациентам онлайн</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <Image
                  alt="Профессиональный медицинский специалист"
                  className="w-full h-auto object-cover rounded-[10%]"
                  width={800}
                  height={600}
                  src="/placeholder.svg?height=600&width=800"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-8 md:py-12 lg:py-20 bg-[#F7F8FA]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">Наши услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="p-6 bg-[#ddeeff] bg-opacity-10 group hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-[14px] text-[#363636] leading-[1.6]">{service.description}</p>
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ml-4 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-500">
                          <ArrowRight className="h-8 w-8 md:h-10 md:w-10 text-[#007AFF] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{service.title}</DialogTitle>
                      <DialogDescription>{service.description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4 md:border-r md:border-gray-200 md:pr-6">
                          <h4 className="font-semibold text-lg">{service.doctor.name}</h4>
                          <p className="text-sm text-gray-500">{service.doctor.description}</p>
                          <Image
                            src={service.doctor.photo}
                            alt={service.doctor.name}
                            width={300}
                            height={300}
                            className="rounded-lg object-cover w-full"
                          />
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-lg">Цены на услуги:</h4>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Услуга</TableHead>
                                <TableHead className="text-right">Цена</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {service.prices.map((price, index) => (
                                <TableRow key={index}>
                                  <TableCell>{price.service}</TableCell>
                                  <TableCell className="text-right">{price.price}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
        <section id="about-clinic" className="w-full py-8 md:py-12 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:pr-8">
                <Image
                  alt="Профессиональный медицинский специалист консультирует пациента"
                  className="rounded-xl object-cover w-full h-full"
                  height="600"
                  width="800"
                  src="/placeholder.svg?height=600&width=800"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 mt-8 lg:mt-0">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    О клинике "Yangi Hayot"
                  </h2>
                  <p className="text-gray-500">
                    "Yangi Hayot" — это круглосуточная клиника в Ташкенте, где опытные специалисты готовы оказать квалифицированную помощь в любое время. Мы предоставляем широкий спектр медицинских услуг: диагностику, лечение и реабилитацию в комфортных условиях.
                  </p>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Преимущества нашей клиники:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-500">
                      <li><strong>Работа 24/7:</strong> Круглосуточный доступ к медицинским услугам.</li>
                      <li><strong>Профессиональная команда:</strong> Квалифицированные врачи с большим опытом.</li>
                      <li><strong>Комплексный подход:</strong> Все необходимые услуги в одном месте.</li>
                      <li><strong>Современное оборудование:</strong> Качество и безопасность в каждом приёме.</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-gray-500">
                    Клиника "Yangi Hayot" — надёжная медицинская помощь рядом, когда она вам нужна.
                  </p>
                </div>
                <Button className="w-fit" style={{ backgroundColor: "#0066FF", color: "white" }}>
                  Записаться на прием
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" className="w-full py-8 md:py-12 lg:py-20 bg-[#F7F8FA]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
                  ОТЗЫВЫ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Что говорят наши пациенты о нас
                </h2>
                <p className="mt-2 text-gray-500 md:text-xl">
                  Наша преданная команда стремится предоставлять персонализированную помощь.
                </p>
              </div>
              <div className="relative">
                <div className="p-6">
                  <p className="text-xl md:text-2xl font-medium mb-6">
                    {reviews[activeReview].text}
                  </p>
                  <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center gap-4">
                      <Image
                        alt={reviews[activeReview].author}
                        className="rounded-full"
                        height="48"
                        src="/placeholder.svg?height=48&width=48"
                        width="48"
                      />
                      <div>
                        <div className="font-semibold">{reviews[activeReview].author}</div>
                        <div className="flex text-yellow-400">
                          {[...Array(reviews[activeReview].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      {reviews.map((_, i) => (
                        <button
                          key={i}
                          className={`w-2 h-2 rounded-full ${i === activeReview ? "bg-[#007AFF]" : "bg-[#D0D3D6]"}`}
                          onClick={() => setActiveReview(i)}
                          aria-label={`Go to review ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="doctors" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наши врачи</h2>
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${activeDoctorSlide * 100}%)` }}
              >
                {doctors.map((doctor, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4 md:w-1/3">
                    <Card className="p-6 bg-white rounded-[10px] shadow-none">
                      <div className="w-full aspect-[114/100] mb-4 relative rounded-[10px] overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=114"
                          alt={doctor.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="text-sm text-[#4A90E2] font-medium mb-2">{doctor.specialty}</div>
                      <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{doctor.description}</p>
                      <Button
                        variant="outline"
                        className="w-full rounded-full"
                        style={{
                          borderColor: "#4A90E2",
                          color: "#4A90E2",
                        }}
                      >
                        Посмотреть профиль
                      </Button>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  className={`w-4 h-4 rounded-full ${i === activeDoctorSlide ? "bg-[#007AFF]" : "bg-[#D0D3D6]"}`}
                  onClick={() => setActiveDoctorSlide(i)}
                  aria-label={`Перейти к слайду ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-10 md:py-20 lg:py-28 bg-[#0066FF]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-white">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Свяжитесь с нами
                </h2>
                <p className="text-xl mb-6">
                  Наши специалисты готовы помочь вам. Не откладывайте заботу о своем здоровье на потом.
                </p>
                <div className="space-y-4">
                  <p><strong>Адрес:</strong> ул. Примерная, 123, Ташкент, Узбекистан</p>
                  <p><strong>Телефон:</strong> +998 71 123-45-67</p>
                  <p><strong>График работы:</strong> Круглосуточно, 7 дней в неделю</p>
                </div>
                <Button className="bg-white text-[#0066FF]" onClick={() => setShowAppointmentDialog(true)}>
                  Записаться на прием
                </Button>
              </div>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Карта</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Dialog open={showAppointmentDialog} onOpenChange={setShowAppointmentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Запись на прием</DialogTitle>
            <DialogDescription>
              Пожалуйста, заполните форму ниже для записи на прием.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Ваш телефон" type="tel" />
            <Input placeholder="Выберите дату" type="date" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service, index) => (
                  <SelectItem key={index} value={service.title}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full">Отправить заявку</Button>
          </form>
        </DialogContent>
      </Dialog>
      <footer className="bg-[#F7F8FA] py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Link href="#" className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white text-xl">+</span>
                </div>
                <span className="text-xl font-bold">Янги Хаёт Диагностика</span>
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Ваше здоровье - наш приоритет. Мы предоставляем качественные медицинские услуги онлайн.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6 text-gray-500 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6 text-gray-500 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-6 w-6 text-gray-500 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-gray-500 hover:text-gray-900" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase">Услуги</h3>
                <nav className="mt-4">
                  <ul className="space-y-2">
                    {services.slice(0, 4).map((service, index) => (
                      <li key={index}>
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase">Компания</h3>
                <nav className="mt-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="#about-clinic" className="text-sm text-gray-500 hover:text-gray-900">
                        О клинике
                      </Link>
                    </li>
                    <li>
                      <Link href="#doctors" className="text-sm text-gray-500 hover:text-gray-900">
                        Наши врачи
                      </Link>
                    </li>
                    <li>
                      <Link href="#reviews" className="text-sm text-gray-500 hover:text-gray-900">
                        Отзывы
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Подпишитесь на нас</h3>
              <p className="mt-4 text-sm text-gray-500">
                Получайте последние новости и обновления о наших услугах.
              </p>
              <form className="mt-4">
                <Input
                  className="w-full max-w-md"
                  placeholder="Введите ваш email"
                  type="email"
                />
                <Button className="mt-2 w-full max-w-md bg-[#0066FF] text-white">
                  Подписаться
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Янги Хаёт Диагностика. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}