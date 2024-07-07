import { ChangeEvent } from "react"

import line from "../../assets/ornamented-line.png"
import "../../styles/CharacterCreationSteps/Step1.scss"
import { Character } from "../../types"

type StepProps = {
    changeCharacter: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    character: Character | undefined
}

const Step1 = ({changeCharacter, character} : StepProps) => {
    return (
        <div className="step step1">
            <div className="title">
                <h1>Diga seu nome de explorador</h1>
                <img src={line} />
            </div>
            <div className="form characterName">
                <input onChange={changeCharacter} value={character?.personagemNome} autoComplete="off" name="personagemNome" minLength={3} required type="text" placeholder="Norland" />
            </div>
        </div>
    )
}

export default Step1