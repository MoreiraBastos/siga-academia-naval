import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contactos() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 flex flex-col items-center justify-center">
                <div className="max-w-3xl w-full">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Contactos</h1>
                    <p className="mb-4 text-gray-700">
                        Para assuntos urgentes ou dúvidas relacionadas ao acesso ao portal, entre em contato com o Oficial de Dia da Academia Naval:
                    </p>
                    <div className="mb-4 p-4 bg-white rounded shadow flex flex-col sm:flex-row items-center gap-2">
                        <span className="font-semibold text-gray-800">Oficial de Dia:</span>
                        <span className="text-blue-700 text-lg select-all">+244 932 022 916</span>
                    </div>
                    <p className="text-gray-700">
                        O atendimento está disponível 24 horas por dia para suporte institucional e emergências.
                    </p>
                </div>
            </main>
        </>
    );
}
