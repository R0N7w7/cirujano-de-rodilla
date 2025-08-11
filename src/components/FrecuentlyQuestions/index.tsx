import Question from "./Question"

type Questions = {
    question: string,
    answer: Array<string>
}

const questions: Array<Questions> = [
    {
        question: "¿Qué debo esperar en mi primera visita?",
        answer: ["En tu primera visita, el doctor te hará una serie de preguntas sobre tu historial médico, tus síntomas y cualquier lesión anterior.", "Probablemente realice un examen físico y quizás solicite algunas pruebas adicionales como radiografías o resonancias magnéticas para ayudar a diagnosticar tu problema."]
    },
    {
        question: "¿Cómo sabré si necesito cirugía?",
        answer: ["El doctor evaluará tu condición, los síntomas y los resultados de cualquier prueba que hayas tenido.", "Con base en esta información, él discutirá contigo las opciones de tratamiento y juntos podrán decidir si la cirugía es la mejor opción."]
    },
    {
        question: "¿Cuánto tiempo llevará mi recuperación?",
        answer: ["El tiempo de recuperación depende del tipo de lesión y del tratamiento que se realice.", "Algunas personas pueden recuperarse en unas pocas semanas, mientras que otras pueden necesitar varios meses.", "El doctor te dará una estimación basada en tu caso específico."]
    },
    {
        question: "¿Se necesita terapia física para la recuperación?",
        answer: ["Sí, en la mayoría de los casos será necesario terapias físicas para ayudarte a recuperar la fuerza, la movilidad y la función después de la cirugía.", "Estas pueden incluir ejercicios de fortalecimiento, estiramiento, equilibrio y movimiento."]
    },
    {
        question: "¿El doctor tiene experiencia en tratar mi tipo de lesión?",
        answer: ["Sí, el doctor tiene amplia experiencia en el tratamiento de una amplia gama de lesiones y condiciones de la rodilla. Él está comprometido en utilizar los últimos avances y técnicas para asegurar el mejor resultado posible para sus pacientes."]
    },
    {
        question: "¿Cómo puedo programar una cita?",
        answer: ["Puedes programar una cita llamando a nuestra oficina o dando clic en el botón de WhatsApp de nuestra página.", "Nuestro equipo de atención al paciente se pondrá en contacto contigo para confirmar la fecha y hora de tu cita.", "También puedes generar tu cita dando clic en mi perfil de Doctoralia."]
    }
]

const FrecuentlyQuestions = () => {
    return (
        <article className="acordeon-container w-full grid justify-items-center grid-cols-1 mt-5 mb-5 lg:grid-cols-2 max-w-7xl popup" id="questions">
            <section className="grid grid-cols-1 justify-items-center mt-3 gap-5 w-full">
                <h2 className="text-3xl font-medium text-indigo-800">Preguntas Frecuentes</h2>
                {questions.map(question => (
                    <Question key={question.question} question={question.question} answer={question.answer} />
                ))}
            </section>
            <section className="w-96">
                <picture className="w-full h-full hidden lg:flex">
                    <img src="/images/iphone.webp" alt="Imagen de celular en mano" className="w-full" loading="lazy"/>
                </picture>
            </section>
        </article>
    )
}

export default FrecuentlyQuestions
