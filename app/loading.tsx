export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-16 h-16 border-4 border-highlight-bg border-t-loader rounded-full animate-spin"></div>
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-loader rounded-full animate-pulse"></div>
          </div>
        </div>

        <h2 className="text-xl font-subheading text-primary-text mt-6 mb-2">Analyzing your document...</h2>
        <p className="text-secondary-text font-body">This may take a few seconds.</p>

        {/* Progress dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-loader rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-loader rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-loader rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
