import { MouseEvent, useEffect } from "react"
import { Aura } from "../../types"
import { CiCircleQuestion } from "react-icons/ci";

import line from "../../assets/ornamented-line.png"
import poligon from "../../assets/aura-poligon.png"

import "../../styles/CharacterCreationSteps/Step2.scss"

type StepProps = {
    changeAura: (e: MouseEvent<HTMLButtonElement>) => void,
    aura: Aura
}

const Step2 = ({ aura, changeAura }: StepProps) => {

    const descriptions = {
        "Aura": "Forma de poder manifestadas em eneru",
        "Elementos": "Transforma sua aura em elementos (Fogo, água, vento e terra)",
        "Telecinese": "Consegue controlar objetos ao seu redor, animados ou inanimados.",
        "Controle de aura": "Controla a sua aura, podendo manipular a forma dela e usá-la para atacar ou defender.",
        "Aprimoramento": "Aprimora a sua própria aura temporariamente.",
        "Intensificação de vibrações": "Você aumenta vibrações, tudo que possibilita ritmos",
        "Emissão": "Consegue fazer disparos com a sua aura, podendo esses disparos tornarem o elemento que o usuário querer (fogo, água, raio, etc)"  
    }

    useEffect(() => {
        let description = document.getElementById("description")

        if(description){
            if(aura.auraPrincipal == "Elementos"){
                description.innerText = descriptions["Elementos"]
            }

            if(aura.auraPrincipal == "Telecinese"){
                description.innerText = descriptions["Telecinese"]
            }

            if(aura.auraPrincipal == "Controle de aura"){
                description.innerText = descriptions["Controle de aura"]
            }

            if(aura.auraPrincipal == "Aprimoramento"){
                description.innerText = descriptions["Aprimoramento"]
            }

            if(aura.auraPrincipal == "Intensificação de vibrações"){
                description.innerText = descriptions["Intensificação de vibrações"]
            }

            if(aura.auraPrincipal == "Emissão"){
                description.innerText = descriptions["Emissão"]
            }

            if(aura.auraPrincipal == null){
                description.innerText = descriptions["Aura"]
            }

        }
    }, [aura.auraPrincipal])

    return (
        <div className="step step2">
            <div className="title">
                <h1>Selecione a sua aura</h1>
                <img src={line} alt="" />
            </div>
            <div className="form auraSelector">
                <div className="poligon">
                    <div className="auras">
                        <div className="columns">
                            <div className="column">
                                <button className="a1" onClick={changeAura} value={"Elementos"}><CiCircleQuestion className="icon" /></button>
                                <button className="a2" onClick={changeAura} value={"Telecinese"}><CiCircleQuestion className="icon" /></button>
                            </div>
                            <div className="column">
                                <button className="a3" onClick={changeAura} value={"Controle de aura"}><CiCircleQuestion className="icon" /></button>
                                <button className="a4" onClick={changeAura} value={"Aprimoramento"}><CiCircleQuestion className="icon" /></button>
                            </div>
                            <div className="column">
                                <button className="a5" onClick={changeAura} value={"Intensificação de vibrações"}><CiCircleQuestion className="icon" /></button>
                                <button className="a6" onClick={changeAura} value={"Emissão"}><CiCircleQuestion className="icon" /></button>
                            </div>
                        </div>
                        <img draggable={false} src={poligon} />
                    </div>
                    <div className="selected">
                        <h4 >{aura?.auraPrincipal || "Aura"}</h4>
                        <hr />
                        <p id="description"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step2