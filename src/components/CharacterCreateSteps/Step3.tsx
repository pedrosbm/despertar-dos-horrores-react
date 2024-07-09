import { MouseEvent } from "react"
import { Character } from "../../types"
import { FaPlus, FaMinus } from "react-icons/fa6";
import line from "../../assets/ornamented-line.png"
import "../../styles/CharacterCreationSteps/Step3.scss"

import '@carbon/charts-react/styles.css'
import { RadarChart, ChartOptions } from "@carbon/charts-react";

type StepProps = {
    changeAtribute: (e: MouseEvent<HTMLButtonElement>) => void,
    character: Character
}

const Step3 = ({ changeAtribute, character }: StepProps) => {

    const data = [
        {
            atribute: 'vitalidade',
            score: character.vitalidade
        },
        {
            atribute: 'defesa',
            score: character.defesa
        },
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
        {
            atribute: 'forcaFisica',
            score: character.forcaFisica
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
                <img src={line} />
            </div>
            <div className="form points">
                <p>Pontos distribuidos entre os atributos adicionarão 2 níveis.</p>
                <p>Pontos restantes: <strong>{character?.pontos}</strong></p>
                <div className="atributes">
                    <div className="atribute">
                        <p>Vitalidade</p>
                        <div className="switch">
                            <button disabled={character.vitalidade - 2 < 20} onClick={changeAtribute} name="vitalidade" value={"remove"}><FaMinus /></button>
                            <p className="vitalidade">{character?.vitalidade}</p>
                            <button onClick={changeAtribute} name="vitalidade" value={"add"}><FaPlus /></button>
                        </div>
                    </div>
                    <hr />
                    <div className="atribute">
                        <p>Defesa</p>
                        <div className="switch">
                            <button disabled={character.defesa - 2 < 0} onClick={changeAtribute} name="defesa" value={"remove"}><FaMinus /></button>
                            <p className="defesa">{character?.defesa}</p>
                            <button onClick={changeAtribute} name="defesa" value={"add"}><FaPlus /></button>
                        </div>
                    </div>
                    <hr />
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
                    <hr />
                    <div className="atribute">
                        <p>Forca Fisica</p>
                        <div className="switch">
                            <button disabled={character.forcaFisica - 2 < 20} onClick={changeAtribute} name="forcaFisica" value={"remove"}><FaMinus /></button>
                            <p className="forcaFisica">{character?.forcaFisica}</p>
                            <button onClick={changeAtribute} name="forcaFisica" value={"add"}><FaPlus /></button>
                        </div>
                    </div>
                </div>
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