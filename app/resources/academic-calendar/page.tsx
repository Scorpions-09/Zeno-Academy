export const metadata = {
  title: "Academic Calendar | Zeno Academy",
  description: "View the academic calendar for Zeno Academy.",
}

export default function AcademicCalendarPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Calendar</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Stay updated with important dates and events at Zeno Academy.
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Fall Semester */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Fall Semester 2024</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">August 26</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fall Semester Begins</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">September 2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Labor Day (No Classes)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">October 14-18</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Midterm Examinations</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">November 28-29</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Thanksgiving Break (No Classes)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">December 9-13</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Final Examinations</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">December 16</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fall Semester Ends</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Spring Semester */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Spring Semester 2025</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">January 20</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Martin Luther King Jr. Day (No Classes)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">January 21</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Spring Semester Begins</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">March 10-14</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Spring Break (No Classes)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">April 18</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Good Friday (No Classes)</td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 5-9</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Final Examinations</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Spring Semester Ends</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">May 16</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Commencement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}