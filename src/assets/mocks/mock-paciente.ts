import { Paciente } from '../../app/core/shared/models/paciente.model';

export class MockPaciente {
    public static paciente: Paciente = {
        nome: 'Amanda Theo',
        nomeAcesso: 'amanda',
        altura: '1,67',
        email: 'amandat@gmail.com',
        imagem: '',
        nutricionista: {
            nome: 'Dra. Geovana Colina',
            endereco: 'Avenida Doutor Eduardo Cotching, 1250 - Sala 12',
            telefone: '(11) 91234-5678'
        }
    };
};
