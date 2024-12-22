import { MouseEvent, useState } from "react"
import { Aura, Character } from "../../../types"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";

import "./CharacterForm.scss"

import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";

const CharacterForm = () => {
    const [step, setStep] = useState<number>(1)
    const [aura, setAura] = useState<Aura>({
        principal: true,
        nivel: 1
    } as Aura)
    const [character, setCharacter] = useState<Character>({
        hp: 20,
        eneru: 20,
        agilidade: 20,
        intuicao: 10,
        nivelDespertar: 5,
        pontos: 10
    } as Character)

    const validateStep1 = () => {
        const nameLength = character?.nome?.length || 0
        if (nameLength < 3) {
            throw new Error("O nome precisa ter no mínimo 3 caracteres")
        }
    }

    const validateStep3 = () => {
        if (character.pontos > 0) {
            throw new Error(`Você ainda pode distribuir ${character.pontos} ponto(s).`)
        }
    }

    const nextStep = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            step == 1 && validateStep1()
            step == 3 && validateStep3()
            setStep(step + 1)

         } catch (error: any) {
            toast.info(error.message)
        }
    }

    const previousStep = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        step > 1 && setStep(step - 1)
    }

    const finish = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

    }

    return (
        <section className="charaCreation">
            {/* Páginas do formulario */}
            <section className="steps">
                {step == 1 && <Step1 character={character} setCharacter={setCharacter} />}
                {step == 2 && <Step2 aura={aura} setAura={setAura} />}
                {step == 3 && <Step3 setCharacter={setCharacter} character={character} />}

            </section>

            {/* Controle de página */}
            <div className="pageControll">
                <button className="previous" disabled={step == 1} onClick={previousStep}><IoIosArrowBack className="icon" /> Anterior</button>

                {step == 3 ?
                    <button className="next end" onClick={finish}>Finalizar<IoIosArrowForward className="icon" /></button>
                    :
                    <button className="next" onClick={nextStep}>Próximo<IoIosArrowForward className="icon" /></button>
                }
            </div>
        </section>
    )
}

export default CharacterForm