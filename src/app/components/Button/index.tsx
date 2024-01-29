
type Props = {
    content: string
}

const Button = ({ content }: Props) => {
    return (
        <button className="w-36 p-2 font-medium text-center rounded text-indigo-800 border-2 border-indigo-600 transition-all hover:bg-indigo-600 hover:text-white">
            {content}
        </button>
    )
}

export { Button }
