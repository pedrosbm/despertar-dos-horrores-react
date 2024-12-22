import { ChangeEvent } from "react"

import "./Step1.scss"
import { Character } from "../../../types"
import { CiSquarePlus } from "react-icons/ci";

type StepProps = {
    setCharacter: React.Dispatch<React.SetStateAction<Character>>,
    character: Character
}

const Step1 = ({ setCharacter, character }: StepProps) => {

    const changeCharacter = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget

        setCharacter({ ...character, [name]: value })
    }

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
                        <input onChange={changeCharacter} value={character?.nome} autoComplete="off" name="personagemNome" minLength={3} required type="text" placeholder="Norland" />
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