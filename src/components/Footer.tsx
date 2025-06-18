'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 border-t-2 border-[#e8073b]">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e8073b]">Contact Us</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (509) 465.0131
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0 6.209-6.209m0 0L14.5 4.5m-6.209 6.209L4.5 14.5" />
                </svg>
                (509) 467.8663
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                manager@suncrestfitnesscenter.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e8073b]">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/membership" className="hover:text-[#e8073b] transition-colors">Membership</Link></li>
              <li><Link href="/schedule" className="hover:text-[#e8073b] transition-colors">Class Schedule</Link></li>
              <li><Link href="/services" className="hover:text-[#e8073b] transition-colors">Services</Link></li>
              <li><Link href="/store" className="hover:text-[#e8073b] transition-colors">Online Store</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e8073b]">Our Services</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/services#personal-training" className="hover:text-[#e8073b] transition-colors">Personal Training</Link></li>
              <li><Link href="/services#physical-therapy" className="hover:text-[#e8073b] transition-colors">Physical Therapy</Link></li>
              <li><Link href="/services#group-classes" className="hover:text-[#e8073b] transition-colors">Group Classes</Link></li>
              <li><Link href="/services#equipment" className="hover:text-[#e8073b] transition-colors">Equipment</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e8073b]">Hours</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>Monday - Friday: 5:00 AM - 9:00 PM</p>
              <p>Saturday: 7:00 AM - 7:00 PM</p>
              <p>Sunday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Suncrest Fitness Center. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#e8073b] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#e8073b] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 