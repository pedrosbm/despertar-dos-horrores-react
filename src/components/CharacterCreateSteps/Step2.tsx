import { MouseEvent } from "react"
import { Aura } from "../../types"

import line from "../../assets/ornamented-line.png"

import poligon from "../../assets/aura-poligon.png"

type StepProps = {
    changeAura: (e: MouseEvent<HTMLButtonElement>) => void,
    aura: Aura
}

const Step2 = ({aura, changeAura} : StepProps) => {

    return (
        <div className="step step2">
            <div className="title">
                <h1>Selecione a sua aura</h1>
                <img src={line} alt="" />
            </div>
            <div className="form auraSelector">
                <div className="poligon">
                    <div className="auras">
                        <button onClick={changeAura} value={"emissao"}>imagem emissao</button>
                        <button onClick={changeAura} value={"aprimoramento"}>imagem aprimoramento</button>
                    </div>
                    <h4>{aura?.auraPrincipal || "Aura"}</h4>
                    <img src={poligon} />
                </div>
            </div>
        </div>
    )
}

export default Step2