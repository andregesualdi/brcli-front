export const environment = {
    production: false,
    verbose: true,

    api: {
        context: 'http://localhost:4100/brcli-gateway/brcli-bff-mobile',
        endpoints: {
            alterarImagem: '/alterar-imagem',
            avaliacaoFisica: '/avaliacao-fisica',
            cadastroPaciente: '/cadastro-paciente',
            dadosPaciente: '/dados-paciente',
            login: '/login',
            metas: '/metas',
            planoAlimentar: '/plano-alimentar',
            primeiroAcesso: '/primeiro-acesso',
            recuperarSenha: '/recupear-senha',
            salvarMetas: '/salvar-metas'
        }
    }
}