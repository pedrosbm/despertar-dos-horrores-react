import { MouseEvent } from "react"
import { Character } from "../../types"
import { FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";
import "../../styles/CharacterCreationSteps/Step3.scss"

import '@carbon/charts-react/styles.css'
import { RadarChart, ChartOptions } from "@carbon/charts-react";

type StepProps = {
    setCharacter: React.Dispatch<React.SetStateAction<Character>>,
    character: Character
}

const Step3 = ({ setCharacter, character }: StepProps) => {

    const changeAtribute = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget
        
        const currentValue = character[name as keyof Character] as number
        
        if (value === "add") {
            character.pontos > 0 ? setCharacter({ ...character, [name]: currentValue + 2, ["pontos"]: character.pontos - 1 }): toast.warn("Você não possui mais pontos")
        } else if (value === "remove") {
            setCharacter({ ...character, [name]: currentValue - 2, ["pontos"]: character.pontos + 1 })
        }
    }

    const data = [
        {
            atribute: 'eneru',
            score: character.eneru
        },
        {
            atribute: 'agilidade',
            score: character.agilidade
        },
        {
            atribute: 'intuicao',
            score: character.intuicao
        },
    ]

    const options: ChartOptions = {
        radar: {
            axes: {
                angle: 'atribute',
                value: 'score',
            },
            alignment: 'center'
        },
        height: '300px',
        theme: "g90",
        toolbar: {
            enabled: false,
        },
        legend: { enabled: false },
    }

    return (
        <div className="step step3">
            <div className="title">
                <h1>Distribua seus pontos</h1>
                <img src="/ornamented-line.png" />
            </div>
            <div className="form points">
                <p>Atributos sobem 2 níveis por ponto distribuido.</p>
                <div className="atributes">
                    <div className="atribute">
                        <p>Eneru</p>
                        <div className="switch">
                            <button disabled={character.eneru - 2 < 20} onClick={changeAtribute} name="eneru" value={"remove"}><FaMinus /></button>
                            <p className="eneru">{character?.eneru}</p>
                            <button onClick={changeAtribute} name="eneru" value={"add"}><FaPlus /></button>
                        </div>
                    </div>
                    <hr />
                    <div className="atribute">
                        <p>Agilidade</p>
                        <div className="switch">
                            <button disabled={character.agilidade - 2 < 20} onClick={changeAtribute} name="agilidade" value={"remove"}><FaMinus /></button>
                            <p className="agilidade">{character?.agilidade}</p>
                            <button onClick={changeAtribute} name="agilidade" value={"add"}><FaPlus /></button>
                        </div>
                    </div>
                    <hr />
                    <div className="atribute">
                        <p>Intuicao</p>
                        <div className="switch">
                            <button disabled={character.intuicao - 2 < 10} onClick={changeAtribute} name="intuicao" value={"remove"}><FaMinus /></button>
                            <p className="intuicao">{character?.intuicao}</p>
                            <button onClick={changeAtribute} name="intuicao" value={"add"}><FaPlus /></button>
                        </div>
                    </div>
                </div>
                <p className="remaining">Pontos restantes: <strong>{character?.pontos}</strong></p>
                <div className="radarChart">
                    <RadarChart
                        data={data}
                        options={options}
                    ></ RadarChart>
                </div>
            </div>
        </div>
    )
}

export default Step3