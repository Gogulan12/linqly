"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Search, Shield, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Page() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  const modalRef = useRef<HTMLDivElement>(null)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)
  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)
  const openTermsModal = () => setIsTermsModalOpen(true)
  const closeTermsModal = () => setIsTermsModalOpen(false)
  const openPrivacyModal = () => setIsPrivacyModalOpen(true)
  const closePrivacyModal = () => setIsPrivacyModalOpen(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeLoginModal()
      closeContactModal()
      closeTermsModal()
      closePrivacyModal()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/images/Linqly_Black_Thin.png"
            alt="Linqly"
            width={100}
            height={48}
          />
        </Link>
        <nav className="ml-auto flex gap-1 sm:gap-2 items-center">
          <Button variant="link" className="text-sm font-medium hover:text-[#FF4D00] px-1 sm:px-2" onClick={() => scrollToSection('features')}>
            Features
          </Button>
          <Button variant="link" className="text-sm font-medium hover:text-[#FF4D00] px-1 sm:px-2" onClick={() => scrollToSection('how-it-works')}>
            How It Works
          </Button>
          <Button variant="link" className="text-sm font-medium hover:text-[#FF4D00] px-1 sm:px-2" onClick={openContactModal}>
            Contact
          </Button>
          <Button size="sm" className="bg-[#FF4D00] text-white hover:bg-black ml-1 sm:ml-2" onClick={openLoginModal}>Free Trial</Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Legal Tasks with <span className="text-[#FF4D00]">Linqly</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Powerful conflict checking and advanced Clio search, right in your browser.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#FF4D00] text-white hover:bg-white hover:text-black" onClick={() => window.open('https://chromewebstore.google.com/', '_blank')}>
                  Install Extension
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black bg-transparent" onClick={() => scrollToSection('how-it-works')}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-[#FF4D00]">
                <CardHeader>
                  <CheckCircle className="w-10 h-10 mb-2 text-[#FF4D00]" />
                  <CardTitle>Conflict Checking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Quickly identify potential conflicts of interest with our integrated Clio conflict checker.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-[#FF4D00]">
                <CardHeader>
                  <Search className="w-10 h-10 mb-2 text-[#FF4D00]" />
                  <CardTitle>Advanced Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Powerful search capabilities to find the information you need in your Clio database.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-[#FF4D00]">
                <CardHeader>
                  <Shield className="w-10 h-10 mb-2 text-[#FF4D00]" />
                  <CardTitle>Secure Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Seamlessly and securely integrates with your Clio account, ensuring data privacy.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">How It Works</h2>
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <ul className="list-disc pl-5 space-y-4 text-gray-600 md:text-lg">
                  <li>Install Linqly as a Chrome extension with just a few clicks</li>
                  <li>Connect seamlessly to your Clio account for instant integration</li>
                  <li>Access advanced conflict checking capabilities directly in your browser</li>
                  <li>Utilize powerful search features to find information quickly and efficiently</li>
                  <li>Streamline your workflow by having all tools in one place</li>
                  <li>Boost productivity with faster access to critical information</li>
                  <li>Ensure data privacy with secure, encrypted connections</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <p className="text-gray-500 text-lg">Video Placeholder</p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to <span className="text-[#FF4D00]">Enhance</span> Your Legal Workflow?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                  Install Linqly now and experience the power of integrated conflict checking and advanced search.
                </p>
              </div>
              <Button size="lg" className="bg-[#FF4D00] text-white hover:bg-white hover:text-black" onClick={() => window.open('https://chromewebstore.google.com/', '_blank')}>
                Install Extension
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <Image
          src="/images/Linqly_Black.png"
          alt="Linqly Logo"
          width={24}
          height={24}
          className="mr-2"
        />
        <p className="text-xs text-gray-500">© 2024 Linqly. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-1 sm:gap-2">
          <Button variant="link" className="text-xs hover:underline underline-offset-4 px-1" onClick={openTermsModal}>
            Terms of Service
          </Button>
          <Button variant="link" className="text-xs hover:underline underline-offset-4 px-1" onClick={openPrivacyModal}>
            Privacy
          </Button>
        </nav>
      </footer>

      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Log in with Clio</h2>
              <Button variant="ghost" size="icon" onClick={closeLoginModal}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your Clio email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your Clio password" required />
              </div>
              <Button type="submit" className="w-full bg-[#FF4D00] text-white hover:bg-[#E64400]">
                Log In
              </Button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-500">
              Don't have a Clio account?{" "}
              <a href="https://www.clio.com" className="text-[#FF4D00] hover:underline" target="_blank" rel="noopener noreferrer">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      )}

      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <Button variant="ghost" size="icon" onClick={closeContactModal}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="space-y-4">
              <p><strong>Email:</strong> support@linqly.com</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Legal Tech Lane, San Francisco, CA 94105</p>
              <p><strong>Hours:</strong> Monday - Friday, 9am - 5pm PST</p>
            </div>
          </div>
        </div>
      )}

      {isTermsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Terms of Service</h2>
              <Button variant="ghost" size="icon" onClick={closeTermsModal}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="space-y-4">
              <p>This is a placeholder for Linqly's Terms of Service. The actual terms would include detailed information about the use of the Linqly Chrome extension, data handling practices, user responsibilities, and legal disclaimers.</p>
              <p>Key sections typically included in Terms of Service:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Acceptance of Terms</li>
                <li>Description of  Services</li>
                <li>User Registration and Account Security</li>
                <li>Privacy Policy</li>
                <li>Intellectual Property Rights</li>
                <li>User Conduct and Prohibited Activities</li>
                <li>Termination of Service</li>
                <li>Disclaimer of Warranties</li>
                <li>Limitation of Liability</li>
                <li>Governing Law and Dispute Resolution</li>
              </ul>
              <p>Please note that this is a placeholder and not a legally binding document. Consult with legal professionals to create an actual Terms of Service agreement for Linqly.</p>
            </div>
          </div>
        </div>
      )}

      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <Button variant="ghost" size="icon" onClick={closePrivacyModal}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="space-y-4">
              <p>This is a placeholder for Linqly's Privacy Policy. The actual policy would provide detailed information about how Linqly collects, uses, stores, and protects user data, especially considering the integration with Clio and handling of sensitive legal information.</p>
              <p>Key sections typically included in a Privacy Policy:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Types of Information Collected</li>
                <li>How Information is Collected</li>
                <li>Use of Collected Information</li>
                <li>Data Storage and Security Measures</li>
                <li>Third-Party Services and Data Sharing</li>
                <li>User Rights and Choices</li>
                <li>Cookie Policy</li>
                <li>Changes to the Privacy Policy</li>
                <li>Contact Information for Privacy Concerns</li>
              </ul>
              <p>Please note that this is a placeholder and not a legally binding document. Consult with legal professionals to create an actual Privacy Policy for Linqly that complies with relevant data protection laws and regulations.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}