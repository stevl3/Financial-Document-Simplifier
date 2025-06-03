"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Upload, FileText, X, AlertCircle } from "lucide-react"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const acceptedTypes = [".png", ".jpg", ".jpeg", ".pdf"]
  const maxFileSize = 10 * 1024 * 1024 // 10MB

  const validateFile = (file: File): string | null => {
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()

    if (!acceptedTypes.includes(fileExtension)) {
      return `File type not supported. Please upload: ${acceptedTypes.join(", ")}`
    }

    if (file.size > maxFileSize) {
      return "File size too large. Maximum size is 10MB."
    }

    return null
  }

  const handleFileSelect = (selectedFile: File) => {
    const validationError = validateFile(selectedFile)

    if (validationError) {
      setError(validationError)
      setFile(null)
      return
    }

    setError(null)
    setFile(selectedFile)
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileSelect(droppedFile)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      handleFileSelect(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first.")
      return
    }

    setIsUploading(true)

    try {
      // Placeholder for actual upload logic
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate upload

      // Navigate to summary page (in real app, pass file data)
      router.push("/summary")
    } catch (err) {
      setError("Upload failed. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  const removeFile = () => {
    setFile(null)
    setError(null)
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="min-h-screen bg-neutral-bg py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading text-primary-text mb-2">Upload Your Document</h1>
          <p className="text-secondary-text font-body">Upload your financial document to get an AI-powered summary</p>
        </div>

        <div className="bg-card-bg rounded-lg shadow-lg p-8 border border-primary-accent/10">
          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver
                ? "border-primary-accent bg-primary-bg"
                : file
                  ? "border-button-primary bg-highlight-bg/30"
                  : "border-primary-accent/40 hover:border-primary-accent/60"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {!file ? (
              <>
                <Upload className="w-12 h-12 text-secondary-text mx-auto mb-4" />
                <h3 className="text-lg font-subheading text-primary-text mb-2">Drop a file here or click to upload</h3>
                <p className="text-secondary-text font-body mb-4">Supports: PNG, JPG, JPEG, PDF (Max 10MB)</p>
                <label className="inline-flex items-center px-6 py-3 bg-button-primary hover:bg-button-primary-hover text-white font-subheading rounded-lg cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose a File
                  <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFileInput} />
                </label>
              </>
            ) : (
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-primary-accent/20">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 text-button-primary mr-3" />
                  <div className="text-left">
                    <p className="font-subheading text-primary-text">{file.name}</p>
                    <p className="text-sm text-secondary-text font-body">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  onClick={removeFile}
                  className="p-1 hover:bg-neutral-bg rounded-full transition-colors"
                  aria-label="Remove file"
                >
                  <X className="w-5 h-5 text-secondary-text" />
                </button>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-700 font-body">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8">
            <button
              onClick={handleUpload}
              disabled={!file || isUploading}
              className={`w-full py-4 px-6 rounded-lg font-subheading text-lg transition-all ${
                !file || isUploading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-button-primary hover:bg-button-primary-hover text-white shadow-lg hover:shadow-xl"
              }`}
            >
              {isUploading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </div>
              ) : (
                "Summarize Document"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
