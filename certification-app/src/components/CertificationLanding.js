import React from 'react';
import { CheckCircle, Award, Users, LineChart, ChevronRight, Globe, Shield, Database, Book } from 'lucide-react';

const CertificationLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Award className="text-blue-600 h-8 w-8 mr-2" />
            <span className="text-xl font-bold text-gray-800">AetherSoft</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium">How It Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</a>
            <a href="#packages" className="text-gray-600 hover:text-blue-600 font-medium">Packages</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Empower Your Manufacturing Workforce with Internal Certification Software
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Own your certification system with our specialized manufacturing training software. Certify employees on different processes, machines, and all aspects of your manufacturing business with our fully customizable solution and ongoing support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Request Demo <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 w-full max-w-md">
                <div className="flex items-center mb-6">
                  <Award className="text-blue-600 h-10 w-10 mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-800">Certification Portal</h3>
                    <p className="text-gray-500 text-sm">Employee Dashboard</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">CNC Machine Operation</span>
                      <span className="text-green-500 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" /> Completed
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">Quality Control Processes</span>
                      <span className="text-blue-500 flex items-center">
                        In Progress
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">Safety Procedures</span>
                      <span className="text-gray-500 flex items-center">
                        Not Started
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  View All Certifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All-in-One Manufacturing Certification Software</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive software solution handles everything from training to certification, with internal and external content like videos, classes, and customizable exams to validate knowledge and manage user access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <Shield className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Certification Paths</h3>
              <p className="text-gray-600">
                Design tailored certification journeys specific to departments, roles, or individual needs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <Users className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Team Performance Tracking</h3>
              <p className="text-gray-600">
                Monitor certification progress across teams with real-time dashboards and detailed reports.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <LineChart className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">
                Gain insights into skill gaps, certification completion rates, and employee development needs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <Globe className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Multi-Language Support</h3>
              <p className="text-gray-600">
                Our software delivers certification materials in multiple languages to support global manufacturing operations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <Database className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Credential Storage</h3>
              <p className="text-gray-600">
                Store and verify employee certifications with secure, tamper-proof digital credentials.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <Book className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Content Library</h3>
              <p className="text-gray-600">
                Access a growing library of training materials or easily integrate your own content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-blue-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Software Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes internal certification simple and effective for manufacturing environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Implement</h3>
              <p className="text-gray-600">
                Our team assists with software installation and configuration tailored to your manufacturing processes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customize</h3>
              <p className="text-gray-600">
                Create certification programs specific to your equipment, processes, and safety requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Train</h3>
              <p className="text-gray-600">
                Deliver training content through videos, documents, and interactive assessments with real-time tracking.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Certify</h3>
              <p className="text-gray-600">
                Validate skills through customizable exams and issue secure digital credentials for your workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section id="deployment" className="py-16 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Deployment Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide multiple ways to deploy our certification platform based on your company's needs and infrastructure preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <Globe className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cloud Hosted</h3>
              <p className="text-gray-600">
                Our secure cloud servers provide reliable access with automatic updates and no hardware to maintain.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <Database className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">On-Premises Server</h3>
              <p className="text-gray-600">
                We can install on your existing servers or provide rack server hardware for local implementation within your facility.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <Shield className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Content Creation</h3>
              <p className="text-gray-600">
                Our team can create and record custom training courses specifically for your internal manufacturing processes and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Packages */}
      <section id="packages" className="py-16 bg-blue-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that works for your organization's size and needs with one-time purchase and optional support plans.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for small manufacturing teams getting started with certification.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$4,999</span>
                <span className="text-gray-500"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Up to 100 employee licenses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">5 certification programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">1 year of support & updates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Optional cloud hosting ($99/month)</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Request Quote
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-md relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Professional</h3>
              <p className="text-gray-600 mb-6">For growing manufacturers with diverse certification needs.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$9,999</span>
                <span className="text-gray-500"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Up to 500 employee licenses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Unlimited certification programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">2 years of priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Custom branding included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Optional cloud hosting ($199/month)</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Request Quote
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large manufacturing organizations with complex certification requirements.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Unlimited employee licenses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Unlimited certification programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Advanced analytics & API access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Dedicated support engineer</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Custom integrations included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Content creation services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-gray-600">Optional dedicated cloud hosting</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your manufacturing certification process? Contact us today!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-700">Phone</h4>
                  <p className="text-blue-600 text-lg mt-1">+1 (614) 563-6233</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700">Email</h4>
                  <p className="text-blue-600 text-lg mt-1">almazan@aethersoftlabs.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700">Leadership</h4>
                  <p className="text-gray-600 mt-1">M.I. Luis Ángel Almazán López</p>
                  <p className="text-gray-600">Marco Saenz</p>
                  <p className="text-gray-600 text-sm">CO-CEOs, AetherSoft</p>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your certification needs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Internal Training?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join forward-thinking manufacturing companies that own their certification process with our powerful software solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
              Request Product Demo
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Award className="text-blue-400 h-6 w-6 mr-2" />
                <span className="text-lg font-bold text-white">AetherSoft</span>
              </div>
              <p className="text-gray-400">
                Empowering manufacturing organizations through internal certification excellence.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Software Packages</a></li>
                <li><a href="#" className="hover:text-blue-400">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-400">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Webinars</a></li>
                <li><a href="#" className="hover:text-blue-400">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 AetherSoft. All rights reserved. Created by AetherSoft - M.I. Luis Ángel Almazán López & Marco Saenz, CO-CEOs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CertificationLanding;