import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.svg";
import { Phone, User, ArrowLeft } from "lucide-react";

//  Importando todas as imagens das hortaliças
import couve from "../../assets/couve.png";
import salsinha from "../../assets/salsinha.png";
import coentro from "../../assets/coentro.png";
import repolho from "../../assets/repolho.png";
import brocolis from "../../assets/brocolis.png";
import couverflor from "../../assets/couver-flor.png";
import berinjela from "../../assets/berigera.png";
import abobrinha from "../../assets/abobrinha.png";

export default function Hortaliças() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const handleCadastro = () => {
    navigate("/cadastro");
  };

  const handleVoltarHome = () => {
    navigate("/");
  };

  //  Lista de hortaliças
  const hortaliças = [
    { nome: "Couve", imagem: couve },
    { nome: "Salsinha", imagem: salsinha },
    { nome: "Coentro", imagem: coentro },
    { nome: "Repolho", imagem: repolho },
    { nome: "Brócolis", imagem: brocolis },
    { nome: "Couve-flor", imagem: couverflor },
    { nome: "Berinjela", imagem: berinjela },
    { nome: "Abobrinha", imagem: abobrinha },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white font-sans overflow-hidden">
      {/* ================= HEADER ================= */}
      <header className="w-full bg-emerald-950 text-white flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img src={logoIcon} alt="AgroTech" className="w-10 h-10" />

          {/* Botão voltar à página principal */}
          <button
            onClick={handleVoltarHome}
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-300 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar à página principal</span>
          </button>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-8 text-sm font-semibold">
          <button
            onClick={handleWhatsApp}
            className="hover:text-emerald-300 transition"
          >
            FALE CONOSCO
          </button>
          <button
            onClick={handleCadastro}
            className="hover:text-emerald-300 transition"
          >
            ÁREA DO USUÁRIO
          </button>
        </nav>

        {/* Ícones e botão */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleWhatsApp}
            aria-label="WhatsApp"
            className="hover:text-emerald-300 transition"
          >
            <Phone className="w-5 h-5" />
          </button>
          <button
            onClick={handleCadastro}
            aria-label="Usuário"
            className="hover:text-emerald-300 transition"
          >
            <User className="w-5 h-5" />
          </button>
          <button
            onClick={handleCadastro}
            className="text-sm bg-slate-300 rounded-[16px] px-4 py-1 font-extrabold text-emerald-950 hover:bg-white transition"
          >
            DOAR AGORA
          </button>
        </div>
      </header>

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <main className="relative flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-24">
        <div className="z-10 max-w-[600px] text-left">
          <h1 className="text-6xl font-extrabold text-green-800 leading-[1.1]">
            Hortaliças 
          </h1>

          <p className="mt-6 text-lg font-semibold text-green-950">
            Juntos, podemos alimentar o mundo!
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            As hortaliças são peças-chave de uma alimentação viva e equilibrada, cheias de fibras e vitaminas que ajudam a manter o corpo funcionando bem.
          </p>
        </div>

        {/* Fundo curvado verde à direita */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-emerald-950 rounded-bl-[400px]"></div>
      </main>

      {/* ================= TEXTO INFORMATIVO ================= */}
      <section className="relative w-full bg-white flex justify-center py-20 px-6">
        <div className="max-w-5xl bg-white border border-emerald-200 shadow-lg rounded-2xl p-10 text-center">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="font-semibold text-green-800">
              Nossas hortaliças são colhidas no ponto certo —
            </span>{" "}
            Cultivadas com carinho e respeito à natureza, garantindo frescor, qualidade e o melhor sabor da terra para a sua mesa!
Aqui você encontra uma grande variedade de folhas, legumes e temperos, ideais para uma alimentação equilibrada e nutritiva. Valorizamos o cultivo sustentável e o trabalho dos produtores locais, oferecendo produtos livres de agrotóxicos e cheios de vida.
          </p>

          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            Escolha agora suas hortaliças favoritas e descubra novos sabores —
            <span className="font-semibold text-green-800">
              o frescor da terra pode transformar sua mesa!
            </span>
          </p>
        </div>
      </section>

      {/* ================= LISTA DE HORTALIÇAS ================= */}
      <section className="w-full flex justify-center py-20 px-8 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-10 max-w-6xl">
          {hortaliças.map((hort) => (
            <div
              key={hort.nome}
              className="relative flex flex-col items-center justify-end text-center bg-white border border-gray-200 rounded-xl p-4 pt-12 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_2px_rgba(16,185,129,0.5)]"
            >
              {/* Imagem sobreposta acima do card */}
              <div className="absolute -top-10">
                <img
                  src={hort.imagem}
                  alt={hort.nome}
                  className="w-24 h-24 object-contain drop-shadow-md"
                />
              </div>

              {/* Nome da hortaliça */}
              <p className="mt-14 text-lg font-semibold text-gray-800">
                {hort.nome}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
