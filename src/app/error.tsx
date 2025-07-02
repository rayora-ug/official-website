'use client'

import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950 px-6 py-16">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We&apos;re sorry for the inconvenience. An unexpected error has occurred.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block px-6 py-3 bg-rayora-blue-primary text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <div>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors ml-3"
            >
              Go Home
            </Link>
          </div>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-3 rounded overflow-auto">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
