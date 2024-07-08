import { ChangeEvent, MouseEvent, useState } from "react"
import { Aura, Character } from "../types"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "../styles/CharacterForm.scss"

import Step1 from "./CharacterCreateSteps/Step1";
import Step2 from "./CharacterCreateSteps/Step2";
import { toast } from "react-toastify";
import Step3 from "./CharacterCreateSteps/Step3";

const CharacterForm = () => {
    const [step, setStep] = useState<number>(1)
    const [aura, setAura] = useState<Aura>({})
    const [character, setCharacter] = useState<Character>({
        vitalidade:20,
        defesa:0,
        eneru:20,
        agilidade:20,
        intuicao:10,
        conhecimento:0,
        forcaFisica:20,
        pontos:10,
        despertarNivel:5,
    })

    const validateStep1 = () => {
        const nameLength = character?.personagemNome?.length || 0
        if(nameLength < 3){
            throw new Error("O nome precisa ter no mínimo 3 caracteres")
        }
    }

    const nextStep = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            step == 1 && validateStep1()
            setStep(step + 1)
        } catch(error : any) {
            toast.warn(error.message)
        }
    }

    const previousStep = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        step > 1 && setStep(step - 1)
    }

    const changeCharacter = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget
        
        setCharacter({ ...character, [name]: value })
    }

    const changeAtribute
    
    const changeAura = (e: MouseEvent<HTMLButtonElement | HTMLInputElement>) => {
        e.preventDefault()
        const { value } = e.currentTarget

        setAura({ ...aura, "auraPrincipal": value })
    }

    return (
        <section className="charaCreation">
            <section className="steps">
                {step == 1 && <Step1 character={character} changeCharacter={changeCharacter}/>}
                {step == 2 && <Step2 aura={aura} changeAura={changeAura}/>}
                {step == 3 && <Step3 changeCharacters={changeCharacter} character={character}/>}

            </section>
            <div className="pageControll">
                <button className="previous" onClick={previousStep}><IoIosArrowBack className="icon" /> Anterior</button>
                <button className="next" onClick={nextStep}>Próximo <IoIosArrowForward className="icon" /></button>
            </div>
        </section>
    )
}

export default CharacterForm