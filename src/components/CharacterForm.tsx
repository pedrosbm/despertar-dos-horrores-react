import { ChangeEvent, useState } from "react"
import { Aura, Character } from "../types"
import poligon from "../assets/aura-poligon.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "../styles/CharacterForm.scss"


const CharacterForm = () => {
    const [step, setStep] = useState<number>(1)
    const [aura, setAura] = useState<Aura>()
    const [character, setCharacter] = useState<Character>()

    const nextStep = () => {
        setStep(step + 1)
    }

    const previousStep = () => {
        step > 1 && setStep(step - 1)
    }

    const changeCharacter = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.currentTarget

        setCharacter({ ...character, [name]: value })
    }

    return (
        <div className="charaCreation">
            <section className="steps">
                {step == 1 &&
                    <div className="step1">
                        <h1>Digite seu nome de explorador</h1>
                        <div className="characterName">
                            <input required type="text" />
                        </div>
                    </div>}

                {step == 2 &&
                    <div className="step2">
                        <h1>Selecione a sua aura</h1>
                        <div className="aura">
                            <div className="poligon">
                                <img src={poligon} />
                                <h4>{aura?.auraPrincipal || "Aura"}</h4>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>}

            </section>
            <div className="pageControll">
                <button className="previous" onClick={previousStep}><IoIosArrowBack className="icon" /> Anterior</button>
                <button className="next" onClick={nextStep}>Próximo <IoIosArrowForward className="icon" /></button>
            </div>
        </div>
    )
}

export default CharacterForm