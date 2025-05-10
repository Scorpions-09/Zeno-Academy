"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { translations } from "@/lib/i18n" // Import Language type

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'zh'>('en') // 使用字面量类型联合替代 Language 类型

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-default.svg"
              alt="Zeno Academy Logo"
              width={32} // Adjust size as needed
              height={32} // Adjust size as needed
              className="h-8 w-8" // Tailwind classes for size
            />
            <span className="text-xl font-bold">
              Zeno Academy <span className="text-primary">| Зено академиясы</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {translations[language].nav.home}
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
            {translations[language].nav.news}
          </Link>
          <Link href="/admissions" className="text-sm font-medium transition-colors hover:text-primary">
            {translations[language].nav.admissions}
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            {translations[language].nav.about}
          </Link>
          <Link href="/admissions/apply">
            <Button variant="default" size="sm">
              {translations[language].nav.applyNow}
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={toggleLanguage} // Use toggleLanguage function
          >
            <Globe className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations[language].nav.home} {/* Use translation */}
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations[language].nav.news} {/* Use translation */}
            </Link>
            <Link
              href="/admissions"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations[language].nav.admissions} {/* Use translation */}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations[language].nav.about} {/* Use translation */}
            </Link>
            <Link href="/admissions/apply" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" size="sm" className="w-full">
                {translations[language].nav.applyNow} {/* Use translation */}
              </Button>
            </Link>
            {/* Add Language Toggle Button for Mobile */}
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center gap-2 mt-2"
              onClick={() => {
                toggleLanguage()
                // Optionally close menu after language change
                // setIsMenuOpen(false)
              }}
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? '中文' : 'English'}</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
