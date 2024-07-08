import { ChangeEvent } from "react"
import { Character } from "../../types"

import line from "../../assets/ornamented-line.png"

type StepProps = {
    changeCharacters: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    character: Character | undefined
}

const Step3 = ({changeCharacter, character} : StepProps) => {

    // vitalidade?: number,
    // defesa?: number,
    // eneru?: number,
    // agilidade?: number,
    // intuicao?: number,
    // conhecimento?: number,
    // forcaFisica?: number,
    // despertarNivel?: number,
    // intensidadeAura?: string,
    // pontos?: number,

    const addPoint = () => {
        changeCharacter()
    }

    const removePoint = () => {

    }

    return(
        <div className="step step3">
            <div className="title">
                <h1>Distribua seus pontos</h1>
                <img src={line} />
            </div>
            <div className="form points">
                <p>Pontos distribuidos entre os atributos adicionarão 2 níveis.</p>
                <p>Pontos restantes: {character?.pontos}</p>
                <div className="atributes">
                    <div className="atribute">
                        <p>Vitalidade</p>
                        <div className="tweak">
                            <button name="vitalidade"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step3