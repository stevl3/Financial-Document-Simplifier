import Link from "next/link"
import { FileText, Zap, Clock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          {/* Hero Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-button-primary rounded-full flex items-center justify-center shadow-lg">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-accent rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary-text mb-6">
            Understand Your <span className="text-button-primary">Finances</span> in Seconds
          </h1>

          <p className="text-xl sm:text-2xl text-secondary-text mb-8 max-w-3xl mx-auto leading-relaxed font-body-medium">
            Upload your loan agreements or credit card statements and receive a plain-language summary in under 5
            seconds.
          </p>

          {/* CTA Button */}
          <Link
            href="/upload"
            className="inline-flex items-center px-8 py-4 bg-button-primary hover:bg-button-primary-hover text-white font-subheading text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <FileText className="w-5 h-5 mr-2" />
            Upload Document
          </Link>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card-bg rounded-lg shadow-md border border-primary-accent/10">
              <div className="w-12 h-12 bg-highlight-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-button-primary" />
              </div>
              <h3 className="text-lg font-subheading text-primary-text mb-2">Lightning Fast</h3>
              <p className="text-secondary-text font-body">Get summaries in under 5 seconds with AI-powered analysis</p>
            </div>

            <div className="text-center p-6 bg-card-bg rounded-lg shadow-md border border-primary-accent/10">
              <div className="w-12 h-12 bg-highlight-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-button-primary" />
              </div>
              <h3 className="text-lg font-subheading text-primary-text mb-2">Multiple Formats</h3>
              <p className="text-secondary-text font-body">Support for PDFs, images, and various document types</p>
            </div>

            <div className="text-center p-6 bg-card-bg rounded-lg shadow-md border border-primary-accent/10">
              <div className="w-12 h-12 bg-highlight-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-button-primary" />
              </div>
              <h3 className="text-lg font-subheading text-primary-text mb-2">Plain Language</h3>
              <p className="text-secondary-text font-body">Complex financial terms simplified for easy understanding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
