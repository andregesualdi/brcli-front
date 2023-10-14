export const environment = {
    production: true,
    verbose: true,

    api: {
        context: '/brcli-gateway',
        endpoints: {
            alterarImagem: '/api/mobile/paciente',
            agendamento: '/api/mobile/agendamento',
            avaliacaoFisica: '/api/mobile/avaliacao',
            cadastroPaciente: '/cadastro-paciente',
            dadosPaciente: '/api/mobile/paciente',
            login: '/login',
            metas: '/api/mobile/metas',
            planoAlimentar: '/api/mobile/plano-alimentar',
            primeiroAcesso: '/primeiro-acesso',
            recuperarSenha: '/recuperar-senha',
            salvarMetas: '/api/mobile/metas'
        }
    }
}