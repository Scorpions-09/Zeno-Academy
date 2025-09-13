import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Zeno Academy</h3>
            <p className="text-sm text-muted-foreground">Зено академиясы</p>
            <p className="text-sm text-muted-foreground">Empowering minds through education and innovation.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground">
                  News
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-sm text-muted-foreground hover:text-foreground">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/academic-calendar" className="text-sm text-muted-foreground hover:text-foreground">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/resources/library" className="text-sm text-muted-foreground hover:text-foreground">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/resources/student-portal" className="text-sm text-muted-foreground hover:text-foreground">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Faculty Directory
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>12 Ala-Too Street, Building 3, Room 45</p>
              <p>Ananyevo, Issyk-Kul Region 722101, Kyrgyzstan</p>
              <p className="mt-2">Email: info@zeno.edu.kg</p>
              <p>Phone: +1 (217) 858-1258</p>
            </address>
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zeno Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
