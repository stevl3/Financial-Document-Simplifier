"use client"

import { useState } from "react"
import Link from "next/link"
import { Copy, Download, Upload, Check } from "lucide-react"

export default function SummaryPage() {
  const [copied, setCopied] = useState(false)

  // Mock data - in real app, this would come from props or API
  const mockOriginalText = `CREDIT CARD AGREEMENT

This Credit Card Agreement ("Agreement") is between you ("Cardholder") and ABC Bank ("Bank"). By using the credit card, you agree to the following terms:

INTEREST RATES:
- Purchase APR: 18.99% - 24.99% (Variable)
- Cash Advance APR: 26.99% (Variable)
- Penalty APR: 29.99% (Variable)

FEES:
- Annual Fee: $95
- Late Payment Fee: Up to $40
- Cash Advance Fee: 5% of transaction amount
- Foreign Transaction Fee: 3% of transaction amount
- Over-the-limit Fee: Up to $35

PAYMENT TERMS:
- Minimum Payment: 2% of balance or $25, whichever is greater
- Payment Due Date: 25 days after statement closing date
- Grace Period: 21 days for purchases (if previous balance paid in full)

CREDIT LIMIT:
Your initial credit limit will be determined based on your creditworthiness and may be adjusted from time to time.

PENALTY TERMS:
If you make a late payment or exceed your credit limit, we may increase your APR to the Penalty APR.`

  const mockSummary = `**Your Credit Card Summary:**

**Interest Rates:**
- Regular purchases: 18.99% - 24.99% per year
- Cash advances: 26.99% per year  
- Late payment penalty: 29.99% per year

**Main Fees:**
- $95 yearly fee
- Up to $40 if you pay late
- 5% fee for cash advances
- 3% fee for foreign purchases

**Payment Rules:**
- Pay at least 2% of your balance or $25 (whichever is higher)
- You have 25 days to pay after your statement
- Pay your full balance to avoid interest on new purchases

**Key Warnings:**
- Late payments or going over your limit can trigger the highest interest rate (29.99%)
- Cash advances are expensive (26.99% interest + 5% fee)
- Foreign purchases cost an extra 3%`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mockSummary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([mockSummary], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "financial-document-summary.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="min-h-screen bg-neutral-bg py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading text-primary-text mb-2">Document Summary</h1>
          <p className="text-secondary-text font-body">
            Here's your plain-language summary and the original extracted text
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plain-Language Summary */}
          <div className="bg-card-bg rounded-lg shadow-lg overflow-hidden border border-primary-accent/10">
            <div className="bg-highlight-bg px-6 py-4 border-b border-primary-accent/20">
              <h2 className="text-xl font-subheading text-primary-text">Plain-Language Summary</h2>
            </div>
            <div className="p-6">
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-line text-secondary-text leading-relaxed font-body">{mockSummary}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center px-4 py-2 bg-button-primary hover:bg-button-primary-hover text-white rounded-lg transition-colors font-subheading"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Summary
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center px-4 py-2 border-2 border-button-secondary text-button-secondary hover:bg-button-secondary-hover hover:text-primary-text rounded-lg transition-colors font-subheading"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download as .txt
                </button>
              </div>
            </div>
          </div>

          {/* Original Extracted Text */}
          <div className="bg-card-bg rounded-lg shadow-lg overflow-hidden border border-primary-accent/10">
            <div className="bg-secondary-text px-6 py-4 border-b border-primary-accent/20">
              <h2 className="text-xl font-subheading text-white">Original Extracted Text</h2>
            </div>
            <div className="p-6">
              <div className="max-h-96 overflow-y-auto bg-primary-bg p-4 rounded-lg border border-primary-accent/20">
                <pre className="whitespace-pre-wrap text-sm text-secondary-text font-mono leading-relaxed">
                  {mockOriginalText}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Another Document */}
        <div className="text-center mt-8">
          <Link
            href="/upload"
            className="inline-flex items-center px-6 py-3 bg-button-primary hover:bg-button-primary-hover text-white font-subheading rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload Another Document
          </Link>
        </div>
      </div>
    </div>
  )
}
