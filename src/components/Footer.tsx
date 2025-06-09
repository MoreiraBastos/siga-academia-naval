export default function Footer() {
  return (
    <footer className="w-full text-white text-center p-4 text-sm bg-white/30 backdrop-blur-md shadow-lg mt-8">
      <div className="container mx-auto">
        <p className="mb-2">Academia Naval da Marinha de Guerra Angolana</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
          <span className="hidden sm:inline">|</span>
          <a 
            href="/politica-privacidade" 
            className="hover:underline transition-all duration-200 hover:text-blue-200"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}