import { FileText, Eye, Brain, CheckCircle } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: FileText,
      title: "Upload Your Document",
      description:
        "Upload your financial document (PDF, PNG, JPG, JPEG). We support loan agreements, credit card statements, and more.",
      color: "primary",
    },
    {
      icon: Eye,
      title: "OCR Text Extraction",
      description: "Our advanced OCR technology extracts all text from your document, even from scanned images.",
      color: "secondary",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "OpenAI analyzes the extracted text and identifies key financial terms, rates, and conditions.",
      color: "accent",
    },
    {
      icon: CheckCircle,
      title: "Plain-Language Summary",
      description:
        "Receive a clear, easy-to-understand summary that explains complex financial terms in simple language.",
      color: "highlight",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary-bg text-button-primary",
      secondary: "bg-highlight-bg text-secondary-text",
      accent: "bg-primary-accent/10 text-primary-accent",
      highlight: "bg-highlight-bg text-button-primary",
    }
    return colors[color as keyof typeof colors] || colors.primary
  }

  return (
    <div className="min-h-screen bg-neutral-bg py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading text-primary-text mb-4">How It Works</h1>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto font-body-medium">
            Our AI-powered platform makes complex financial documents easy to understand in just four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="bg-card-bg rounded-lg shadow-lg p-6 border border-primary-accent/10">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(step.color)}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-subheading text-secondary-text">STEP {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-subheading text-primary-text mb-2">{step.title}</h3>
                    <p className="text-secondary-text leading-relaxed font-body">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-card-bg rounded-lg shadow-lg p-8 border border-primary-accent/10">
          <h2 className="text-2xl font-heading text-primary-text mb-6 text-center">Why Use Our Service?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-highlight-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading text-button-primary">5s</span>
              </div>
              <h3 className="font-subheading text-primary-text mb-2">Lightning Fast</h3>
              <p className="text-secondary-text text-sm font-body">Get summaries in under 5 seconds</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-highlight-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading text-button-primary">AI</span>
              </div>
              <h3 className="font-subheading text-primary-text mb-2">AI-Powered</h3>
              <p className="text-secondary-text text-sm font-body">Advanced AI understands financial context</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-highlight-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading text-button-primary">📄</span>
              </div>
              <h3 className="font-subheading text-primary-text mb-2">Multiple Formats</h3>
              <p className="text-secondary-text text-sm font-body">Supports PDFs and image files</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
