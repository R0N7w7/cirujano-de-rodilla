import { GrAdd } from "react-icons/gr";

type Props = {
    question: string,
    answer: Array<string>,
}

const Question = ({ question, answer }: Props) => {



    return (
        <details className="pl-5 pr-5 w-full" name="questions">
            <summary id={question} className="acordeon text-left text-lg border-b border-gray-300 pb-2 flex justify-between items-center gap-3">
                <h3 className="w-full">{question}</h3><GrAdd className="w-4 h-4" />
            </summary>

            {answer.map((ans, i) => (
                <p key={i} className="text-base text-gray-500 mt-2">
                    {ans}
                </p>
            ))}
        </details>
    )
}

export default Question
