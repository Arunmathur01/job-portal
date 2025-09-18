import React from 'react'
import Navbar from '../components_lite/Navbar'
import { ShieldCheck, Zap, BadgeCheck, LifeBuoy } from 'lucide-react'


const Creator = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              About Job Portal
            </h1>
            <p className="mt-4 text-gray-600 leading-7">
              We connect ambitious talent with meaningful opportunities. Whether you are exploring your
              first role or hiring at scale, our platform streamlines discovery, applications, and
              communication so you can focus on what matters.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-lg border bg-white p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">10k+</p>
                <p className="text-xs text-gray-500">Active jobs</p>
              </div>
              <div className="rounded-lg border bg-white p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">4k+</p>
                <p className="text-xs text-gray-500">Hiring companies</p>
              </div>
              <div className="rounded-lg border bg-white p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-xs text-gray-500">User satisfaction</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="rounded-xl min-h-28 bg-gradient-to-tr from-primary/10 to-accent/10 flex items-center justify-center text-center p-3">
                <div>
                  <ShieldCheck className="mx-auto text-primary" />
                  <p className="mt-2 text-sm text-gray-700">Secure & private</p>
                </div>
              </div>
              <div className="rounded-xl min-h-28 bg-gradient-to-tr from-accent/10 to-primary/10 flex items-center justify-center text-center p-3">
                <div>
                  <Zap className="mx-auto text-primary" />
                  <p className="mt-2 text-sm text-gray-700">Fast applications</p>
                </div>
              </div>
              <div className="rounded-xl min-h-28 bg-gradient-to-tr from-primary/10 to-accent/10 flex items-center justify-center text-center p-3">
                <div>
                  <BadgeCheck className="mx-auto text-primary" />
                  <p className="mt-2 text-sm text-gray-700">Verified jobs</p>
                </div>
              </div>
              <div className="rounded-xl min-h-28 bg-gradient-to-tr from-accent/10 to-primary/10 flex items-center justify-center text-center p-3">
                <div>
                  <LifeBuoy className="mx-auto text-primary" />
                  <p className="mt-2 text-sm text-gray-700">Real support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What makes us different</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-900">Smart matching</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Personalized recommendations powered by skills, interests, and market trends.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-900">Fair and transparent</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Real-time status tracking and clear communication for every application.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-900">Built for speed</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Lightning-fast experience with a modern, mobile-first design.
            </p>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl border bg-white p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to find your next role?</h3>
          <p className="mt-3 text-gray-600">Browse thousands of openings from top companies hiring now.</p>
        </div>
      </section>
    </div>
  )
}

export default Creator
