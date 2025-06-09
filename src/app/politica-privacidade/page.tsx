import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PoliticaPrivacidade() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 flex flex-col items-center justify-center">
                <div className="max-w-3xl w-full">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Política de Privacidade</h1>
                    <p className="mb-4 text-gray-700">
                        Este é um portal de <span className="font-bold text-red-500">acesso privado</span> da Academia Naval da Marinha de Guerra Angolana. O acesso e uso deste sistema são restritos exclusivamente a utilizadores autorizados.
                    </p>
                    <p className="mb-4 text-gray-700">
                        Todas as informações aqui contidas são reservadas e protegidas por regulamentos internos da Academia Naval. O uso indevido, divulgação não autorizada ou qualquer tentativa de violação de segurança será tratada conforme a legislação vigente e poderá resultar em sanções administrativas, civis e criminais.
                    </p>
                    <p className="mb-4 text-gray-700">
                        Ao acessar este portal, o utilizador concorda em cumprir todas as normas de segurança e privacidade estabelecidas pela Academia Naval da Marinha de Guerra Angolana, estando ciente de que todas as atividades podem ser monitoradas e registradas para garantir a integridade e a segurança das informações.
                    </p>
                    <p className="mb-4 text-gray-700">
                        Em conformidade com a lei, serão aplicadas as medidas cabíveis em caso de descumprimento das políticas de privacidade e segurança.
                    </p>
                    <p className="text-gray-700">
                        Para mais informações ou dúvidas sobre esta política, entre em contato com a administração da Academia Naval.
                    </p>
                </div>
            </main>
        </>
    );
}
