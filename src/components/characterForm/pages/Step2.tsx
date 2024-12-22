import { MouseEvent, useEffect } from "react"
import { Aura } from "../../../types"
import { CiCircleQuestion } from "react-icons/ci";

import "./Step2.scss"

type StepProps = {
    setAura: React.Dispatch<React.SetStateAction<Aura>>,
    aura: Aura
}

const Step2 = ({ aura, setAura }: StepProps) => {

    const changeAura = (e: MouseEvent<HTMLButtonElement | HTMLInputElement>) => {
        e.preventDefault()
        const { value } = e.currentTarget

        setAura({ ...aura, ["nome"]: value })
    }

    const descriptions = {
        "Aura": "Escolha uma aura para ver seus detalhes.",
        "Elementos": "Transforma sua aura em elementos (Fogo, água, vento e terra).",
        "Telecinese": "Consegue controlar objetos ao seu redor, animados ou inanimados.",
        "Controle de aura": "Controla a sua aura, podendo manipular a forma dela e usá-la para atacar ou defender.",
        "Aprimoramento": "Aprimora a sua própria aura temporariamente.",
        "Intensificação de vibrações": "Você aumenta vibrações, tudo que possibilita ritmos.",
        "Emissão": "Consegue fazer disparos com a sua aura, podendo esses disparos tornarem o elemento que o usuário querer (fogo, água, raio, etc)."
    }

    useEffect(() => {
        const description = document.getElementById("description")

        if (description) {
            if (aura.nome == "Elementos") {
                description.innerText = descriptions["Elementos"]
            }

            if (aura.nome == "Telecinese") {
                description.innerText = descriptions["Telecinese"]
            }

            if (aura.nome == "Controle de aura") {
                description.innerText = descriptions["Controle de aura"]
            }

            if (aura.nome == "Aprimoramento") {
                description.innerText = descriptions["Aprimoramento"]
            }

            if (aura.nome == "Intensificação de vibrações") {
                description.innerText = descriptions["Intensificação de vibrações"]
            }

            if (aura.nome == "Emissão") {
                description.innerText = descriptions["Emissão"]
            }

            if (aura.nome == null) {
                description.innerText = descriptions["Aura"]
            }
        }
    }, [aura.nome])

    const handleChangeAura = (e: MouseEvent<HTMLButtonElement>) => {
        const buttons = document.getElementsByClassName("icon")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("selected")
        }
        const button = document.getElementById(e.currentTarget.className)
        button?.classList.add("selected")

        changeAura(e)
    }

    return (
        <div className="step step2">
            <div className="title">
                <h1>Selecione a sua aura</h1>
                <img src="/ornamented-line.png" />
            </div>
            <div className="form auraSelector">
                <div className="poligon">
                    <div className="auras">
                        <div className="columns">
                            <div className="column">
                                <button className="a1" onClick={handleChangeAura} value={"Elemental"}><CiCircleQuestion id="a1" className="icon" /></button>
                                <button className="a2" onClick={handleChangeAura} value={"Telecinese"}><CiCircleQuestion id="a2" className="icon" /></button>
                            </div>
                            <div className="column">
                                <button className="a3" onClick={handleChangeAura} value={"Controle de aura"}><CiCircleQuestion id="a3" className="icon" /></button>
                                <button className="a4" onClick={handleChangeAura} value={"Aprimoramento"}><CiCircleQuestion id="a4" className="icon" /></button>
                            </div>
                            <div className="column">
                                <button className="a5" onClick={handleChangeAura} value={"Intensificação de vibrações"}><CiCircleQuestion id="a5" className="icon" /></button>
                                <button className="a6" onClick={handleChangeAura} value={"Emissão"}><CiCircleQuestion id="a6" className="icon" /></button>
                            </div>
                        </div>
                        <img draggable={false} src="/aura-poligon.png" />
                    </div>
                    <div className="current">
                        <h4 >{aura?.nome || "Aura"}</h4>
                        <hr />
                        <p id="description"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step2