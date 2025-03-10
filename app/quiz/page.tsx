"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import QuizNavigation from "@/components/quiz-navigation"

const questions = [
  {
    id: 1,
    question: "What are your shoulders like in relation to your hips?",
    options: [
      { id: "a", text: "My shoulders are wider than my hips" },
      { id: "b", text: "My shoulders and hips are about the same width" },
      { id: "c", text: "My hips are wider than my shoulders" },
      { id: "d", text: "I'm not sure" },
    ],
  },
  {
    id: 2,
    question: "How would you describe your waistline?",
    options: [
      { id: "a", text: "I have a very defined waist that's significantly smaller than my bust and hips" },
      { id: "b", text: "I have a somewhat defined waist" },
      { id: "c", text: "My waist is not very defined - my torso is fairly straight up and down" },
      { id: "d", text: "My waist is wider than my hips and bust" },
    ],
  },
  {
    id: 3,
    question: "Where do you typically gain weight first?",
    options: [
      { id: "a", text: "Evenly all over" },
      { id: "b", text: "Around my midsection/stomach" },
      { id: "c", text: "In my lower body (hips, thighs, buttocks)" },
      { id: "d", text: "In my upper body (arms, chest, back)" },
    ],
  },
  {
    id: 4,
    question: "Which of these clothing challenges do you face most often?",
    options: [
      { id: "a", text: "Tops that fit my shoulders are too loose at the waist" },
      { id: "b", text: "Pants that fit my hips are too big at the waist" },
      { id: "c", text: "Clothes don't create enough curves on my frame" },
      { id: "d", text: "Clothes that fit my midsection are too tight elsewhere" },
    ],
  },
  {
    id: 5,
    question: "Which celebrity's body type is most similar to yours?",
    options: [
      { id: "a", text: "Scarlett Johansson or Halle Berry (balanced proportions)" },
      { id: "b", text: "Jennifer Lopez or Beyoncé (curvy hips)" },
      { id: "c", text: "Cameron Diaz or Gwyneth Paltrow (athletic/straight)" },
      { id: "d", text: "Angelina Jolie or Naomi Campbell (narrow hips)" },
    ],
    images: true,
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const router = useRouter()

  const handleNext = () => {
    if (selectedOption) {
      const updatedAnswers = { ...answers, [questions[currentQuestion].id]: selectedOption }
      setAnswers(updatedAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(updatedAnswers[questions[currentQuestion + 1]?.id] || null)
      } else {
        // Navigate to results page with the answers
        const bodyType = determineBodyType(updatedAnswers)
        localStorage.setItem("quizAnswers", JSON.stringify(updatedAnswers))
        localStorage.setItem("bodyType", bodyType)
        router.push("/results")
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[questions[currentQuestion - 1].id] || null)
    }
  }

  const currentQ = questions[currentQuestion]

  const determineBodyType = (answers: Record<number, string>) => {
    // Count the frequency of each answer type
    const counts = { a: 0, b: 0, c: 0, d: 0 }

    Object.values(answers).forEach((answer) => {
      if (counts[answer as keyof typeof counts] !== undefined) {
        counts[answer as keyof typeof counts]++
      }
    })

    // Determine the most frequent answer
    let maxCount = 0
    let bodyType = "Hourglass"

    if (counts.a > maxCount) {
      maxCount = counts.a
      bodyType = "Hourglass"
    }
    if (counts.b > maxCount) {
      maxCount = counts.b
      bodyType = "Pear"
    }
    if (counts.c > maxCount) {
      maxCount = counts.c
      bodyType = "Rectangle"
    }
    if (counts.d > maxCount) {
      maxCount = counts.d
      bodyType = "Inverted Triangle"
    }

    return bodyType
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-r from-pink-50 to-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Discover Your Body Type</h1>
              <p className="text-gray-600">
                Answer a few questions to find your body shape and get personalized style recommendations.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span>{Math.round(progress)}% Complete</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-gray-100"  />
                </div>

                <h2 className="text-xl md:text-2xl font-semibold mb-6">{currentQ.question}</h2>

                {currentQ.images ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {currentQ.options.map((option) => (
                      <div key={option.id} className="flex flex-col items-center">
                        <div
                          className={`relative h-40 w-full rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                            selectedOption === option.id
                              ? "border-pink-400 shadow-md"
                              : "border-transparent hover:border-pink-200"
                          }`}
                          onClick={() => setSelectedOption(option.id)}
                        >
                          <Image
                            src={`/placeholder.svg?height=160&width=120&text=${option.id.toUpperCase()}`}
                            alt={option.text}
                            fill
                            className="object-cover"
                          />
                          {selectedOption === option.id && (
                            <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-pink-400 flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                        </div>
                        <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={option.id} id={`option-${option.id}`} className="text-pink-400" />
                            <Label htmlFor={`option-${option.id}`} className="text-sm cursor-pointer">
                              {option.text}
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    ))}
                  </div>
                ) : (
                  <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3 mb-8">
                    {currentQ.options.map((option) => (
                      <div
                        key={option.id}
                        className={`flex items-center border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedOption === option.id
                            ? "border-pink-400 bg-pink-50"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedOption(option.id)}
                      >
                        <RadioGroupItem value={option.id} id={`option-${option.id}`} className="text-pink-400" />
                        <Label htmlFor={`option-${option.id}`} className="ml-3 cursor-pointer w-full">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>

                  <Button onClick={handleNext} disabled={!selectedOption} size="sm" className="rounded-full">
                    {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                    {currentQuestion !== questions.length - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <QuizNavigation
                totalQuestions={questions.length}
                currentQuestion={currentQuestion}
                answers={answers}
                onNavigate={(index) => {
                  setCurrentQuestion(index)
                  setSelectedOption(answers[questions[index].id] || null)
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

