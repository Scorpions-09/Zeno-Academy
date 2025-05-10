export const metadata = {
  title: "Library | Zeno Academy",
  description: "Explore the resources and services offered by the Zeno Academy Library.",
}

export default function LibraryPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Zeno Academy Library</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Your gateway to knowledge, research, and learning resources.
          </p>
        </div>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">About Our Library</h2>
          <div className="prose max-w-none">
            <p>
              The Zeno Academy Library is a vital center for learning, research, and intellectual exploration. We are committed to providing comprehensive resources, innovative services, and a welcoming environment to support the academic pursuits of our students, faculty, and staff.
            </p>
            <p>
              Our extensive collection includes over 500,000 volumes, a vast array of digital resources including e-books, academic journals, and databases, as well as special collections of rare manuscripts and archives. 
            </p>
            <p>
              The library offers a variety of study spaces, from quiet individual carrels to collaborative group study rooms, all equipped with modern technology and comfortable furnishings. Our knowledgeable librarians are always available to assist with research, information literacy, and accessing our diverse collections.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Library Services</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Access to physical and digital collections</li>
            <li>Research assistance and consultations</li>
            <li>Information literacy workshops</li>
            <li>Interlibrary loan services</li>
            <li>Quiet and group study spaces</li>
            <li>Computer workstations and printing facilities</li>
            <li>Access to special collections and archives</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Operating Hours</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Monday - Friday</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8:00 AM - 10:00 PM</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Saturday</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sunday</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12:00 PM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Holidays</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Closed (or special hours, please check announcements)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p className="text-muted-foreground">
            For any inquiries, please contact the library staff at <a href="mailto:library@zeno.edu.kg" className="text-primary hover:underline">library@zeno.edu.kg</a> or call us at +1 (217) 555-0102.
          </p>
        </section>
      </div>
    </div>
  )
}