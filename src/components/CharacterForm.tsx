import { ChangeEvent, MouseEvent, useState } from "react"
import { Aura, Character } from "../types"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "../styles/CharacterForm.scss"

import Step1 from "./CharacterCreateSteps/Step1";
import Step2 from "./CharacterCreateSteps/Step2";

const CharacterForm = () => {
    const [step, setStep] = useState<number>(1)
    const [aura, setAura] = useState<Aura>({})
    const [character, setCharacter] = useState<Character>()

    const nextStep = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setStep(step + 1)
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
    
    const changeAura = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { value } = e.currentTarget

        setAura({ ...aura, "auraPrincipal": value })
    }

    return (
        <section className="charaCreation">
            <section className="steps">
                {step == 1 && <Step1 changeCharacter={changeCharacter}/>}
                {step == 2 && <Step2 aura={aura} changeAura={changeAura}/>}

            </section>
            <div className="pageControll">
                <button className="previous" onClick={previousStep}><IoIosArrowBack className="icon" /> Anterior</button>
                <button className="next" onClick={nextStep}>Próximo <IoIosArrowForward className="icon" /></button>
            </div>
        </section>
    )
}

export default CharacterForm