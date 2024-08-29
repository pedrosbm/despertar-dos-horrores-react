import { ChangeEvent } from "react"

import "../../styles/CharacterCreationSteps/Step1.scss"
import { Character } from "../../types"
import { CiSquarePlus } from "react-icons/ci";

type StepProps = {
    changeCharacter: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
    character: Character | undefined
}

const Step1 = ({ changeCharacter, character }: StepProps) => {
    return (
        <div className="step step1">
            <div className="title">
                <h1>Fale sobre o seu explorador</h1>
                <img src="/ornamented-line.png" />
            </div>
            <div className="form characterData">
                <div className="fields">
                    <div className="inputBox">
                        <label htmlFor="">Nome</label>
                        <input onChange={changeCharacter} value={character?.personagemNome} autoComplete="off" name="personagemNome" minLength={3} required type="text" placeholder="Norland" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="">História</label>
                        <textarea className="history" required onChange={changeCharacter} name="historia" placeholder="Era uma vez um principe..."></textarea>
                    </div>
                </div>
                <div className="characterImage">
                    {/* TODO implementar easy crop */}
                    <div className="cropperContainer">
                        {/* <img src="" alt="" className="characterPreview" /> */}
                        <CiSquarePlus className="plus" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step1