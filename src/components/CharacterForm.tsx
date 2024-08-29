import { ChangeEvent, MouseEvent, useState } from "react"
import { Aura, Character } from "../types"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";

import "../styles/CharacterForm.scss"

import Step1 from "./CharacterCreateSteps/Step1";
import Step2 from "./CharacterCreateSteps/Step2";
import Step3 from "./CharacterCreateSteps/Step3";

const CharacterForm = () => {
    const [step, setStep] = useState<number>(1)
    const [aura, setAura] = useState<Aura>({})
    const [character, setCharacter] = useState<Character>({
        vitalidade: 20,
        defesa: 0,
        eneru: 20,
        agilidade: 20,
        intuicao: 10,
        conhecimento: 0,
        forcaFisica: 20,
        pontos: 10,
        despertarNivel: 5,
    })

    const validateStep1 = () => {
        const nameLength = character?.personagemNome?.length || 0
        if (nameLength < 3) {
            throw new Error("O nome precisa ter no mínimo 3 caracteres")
        }
    }

    const validateStep3 = () => {
        if(character.pontos > 0){
            throw new Error(`Você ainda pode distribuir ${character.pontos} ponto(s).`)
        }
    }

    const nextStep = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            step == 1 && validateStep1()
            step == 3 && validateStep3()
            // TODO validação da quarta etapa
            // step == 4 && validateStep4()
            setStep(step + 1)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.info(error.message)
        }
    }

    const previousStep = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        step > 1 && setStep(step - 1)
    }

    const changeCharacter = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget

        setCharacter({ ...character, [name]: value })
    }

    return (
        <section className="charaCreation">
            <section className="steps">
                {step == 1 && <Step1 character={character} changeCharacter={changeCharacter} />}
                {step == 2 && <Step2 aura={aura} setAura={setAura} />}
                {step == 3 && <Step3 setCharacter={setCharacter} character={character} />}

            </section>
            <div className="pageControll">
                <button className="previous" disabled={step == 1} onClick={previousStep}><IoIosArrowBack className="icon" /> Anterior</button>
                <button className="next" onClick={nextStep}>{step == 3 ? "Finalizar" : "Próximo"} <IoIosArrowForward className="icon" /></button>
            </div>
        </section>
    )
}

export default CharacterForm