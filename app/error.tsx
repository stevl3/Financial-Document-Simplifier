"use client"

import Link from "next/link"
import { AlertTriangle, Home, Upload } from "lucide-react"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-card-bg rounded-lg shadow-lg p-8 border border-primary-accent/10">
          {/* Error Icon */}
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>

          {/* Error Message */}
          <h1 className="text-2xl font-heading text-primary-text mb-4">Oops! Something went wrong</h1>

          <p className="text-secondary-text font-body mb-6">
            We encountered an error while processing your document. This could be due to:
          </p>

          <ul className="text-left text-secondary-text font-body mb-6 space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-text rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Document format not supported
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-text rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Network connection issues
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary-text rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Temporary server problems
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full px-6 py-3 bg-button-primary hover:bg-button-primary-hover text-white font-subheading rounded-lg transition-colors"
            >
              Try Again
            </button>

            <Link
              href="/upload"
              className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-button-secondary text-button-secondary hover:bg-button-secondary-hover hover:text-primary-text font-subheading rounded-lg transition-colors"
            >
              <Upload className="w-4 h-4 mr-2" />
              Go back to Upload
            </Link>

            <Link
              href="/"
              className="w-full inline-flex items-center justify-center px-6 py-3 text-secondary-text hover:text-primary-text font-body-medium transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
