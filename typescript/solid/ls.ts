export class Question {
  private _answer1: string
  private _answer2: string
  private _answer3: string
  private _answer4: string
  private _question: string
  private _correctAnser: number

  constructor (
    question: string,
    correctAnswer: number,
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string
  ) {
    this._question = question
    this._correctAnser = correctAnswer
    this._answer1 = answer1
    this._answer2 = answer2
    this._answer3 = answer3
    this._answer4 = answer4
  }
  answer1 (): string {
    return this._answer1
  }
  answer2 (): string {
    return this._answer2
  }
  answer3 (): string {
    return this._answer3
  }
  answer4 (): string {
    return this._answer4
  }
  question (): string {
    return this._question
  }
  correctAnswer (): number {
    return this._correctAnser
  }
}

function formatQuestion (question: Question) {
  console.log(`Question ${question.question()}`)
  console.log(`Answer 1 ${question.answer1()}`)
  console.log(`Answer 2 ${question.answer2()}`)
  console.log(`Answer 3 ${question.answer3()}`)
  console.log(`Answer 4 ${question.answer4()}`)
  console.log('---------------------------')
  console.log(`Correct answer ${question.correctAnswer()}`)
}

const question = new Question(
  'What is best frontend framework',
  1,
  'React',
  'Angular',
  'Svelte',
  'elm'
)

formatQuestion(question)
// Now this is where the viloation comes instead
// By Extending Question with a quiZQuestion that does not have all the four answers
// our code violates this principle
// it does because the subclass can replace the parent class in formatQuestion

export class QuizQuestion extends Question {
  constructor (question: string, correctAnswer: number) {
    super(question, correctAnswer, 'true', 'false', null, null)
  }
}

const quizQuestion = new QuizQuestion('Is React only one year old ?', 2)
formatQuestion(quizQuestion)
