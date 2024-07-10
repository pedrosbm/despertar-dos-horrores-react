type User = {
    userId?: number,
    userNome?: string,
    userPassword?: string
}

type Character = {
    personagemId?: number,

    personagemNome?: string,
    personagemImagem?: Blob,
    historia?: string

    hp?: number,
    mp?: number,

    vitalidade: number,
    defesa: number,
    eneru: number,
    agilidade: number,
    intuicao: number,
    conhecimento: number,
    forcaFisica: number,
    despertarNivel: number,
    pontos: number,

    intensidadeAura?: string,
    usuario?: User,
}

type Aura = {
    auraId?: number,
    auraPrincipal?: string
}

export type { User, Character, Aura }