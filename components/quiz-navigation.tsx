"use client"

interface QuizNavigationProps {
  totalQuestions: number
  currentQuestion: number
  answers: Record<number, string>
  onNavigate: (index: number) => void
}

export default function QuizNavigation({ totalQuestions, currentQuestion, answers, onNavigate }: QuizNavigationProps) {
  return (
    <div className="bg-gray-50 px-6 py-4 flex items-center justify-center space-x-2">
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`h-8 w-8 rounded-full flex items-center justify-center text-sm transition-colors ${
            index === currentQuestion
              ? "bg-pink-400 text-white"
              : answers[index + 1]
                ? "bg-pink-100 text-pink-600"
                : "bg-gray-200 text-gray-500"
          }`}
          disabled={!answers[index + 1] && index !== currentQuestion}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

