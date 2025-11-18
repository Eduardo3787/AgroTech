import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.svg";
import { Phone, User, ArrowLeft, Menu, X } from "lucide-react";
import { useState } from "react";

//  Imagens das hortaliças
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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const handleCadastro = () => {
    navigate("/cadastro");
  };

  const handleVoltarHome = () => {
    navigate("/");
  };

  // Lista de hortaliças
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
      <header className="w-full bg-emerald-950 text-white flex items-center justify-between px-6 py-4 relative">

        {/* LOGO + VOLTAR */}
        <div className="flex items-center gap-3">
          <img src={logoIcon} className="w-10 h-10" />

          <button
            onClick={handleVoltarHome}
            className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-emerald-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar à página principal</span>
          </button>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <button onClick={handleWhatsApp} className="hover:text-emerald-300">
            FALE CONOSCO
          </button>
          <button onClick={handleCadastro} className="hover:text-emerald-300">
            ÁREA DO USUÁRIO
          </button>
          <Phone className="w-5 h-5 cursor-pointer hover:text-emerald-300" />
          <User className="w-5 h-5 cursor-pointer hover:text-emerald-300" />
          <button
            onClick={handleCadastro}
            className="text-sm bg-slate-300 rounded-[16px] px-4 py-1 font-extrabold text-emerald-950 hover:bg-white"
          >
            DOAR AGORA
          </button>
        </nav>

        {/* BOTÃO MENU MOBILE */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* MENU MOBILE ABERTO */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white text-emerald-900 shadow-lg p-6 rounded-xl flex flex-col gap-4 z-50 md:hidden w-56">
            <button
              onClick={handleVoltarHome}
              className="flex items-center gap-2 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar à página principal
            </button>

            <button onClick={handleWhatsApp} className="font-semibold">
              FALE CONOSCO
            </button>

            <button onClick={handleCadastro} className="font-semibold">
              ÁREA DO USUÁRIO
            </button>

            <button
              onClick={handleCadastro}
              className="bg-emerald-700 text-white py-2 rounded-lg font-bold"
            >
              DOAR AGORA
            </button>
          </div>
        )}
      </header>

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <main className="relative flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-24">
        <div className="z-10 max-w-[600px]">
          <h1 className="text-6xl font-extrabold text-green-800 leading-[1.1]">
            Hortaliças
          </h1>

          <p
             className="mt-6 text-lg font-semibold text-black"
             style={{ textShadow: "2px 2px 6px rgba(0, 255, 120, 0.9)" }}
               >
                Juntos, podemos alimentar o mundo!
          </p>


         <p
            className="mt-4 leading-relaxed text-black"
            style={{ textShadow: "2px 2px 6px rgba(0, 255, 120, 0.9)" }}
              >
              As hortaliças são peças-chave para uma alimentação equilibrada,
              ricas em fibras, vitaminas e minerais essenciais.
          </p>

        </div>

        <div className="absolute top-0 right-0 w-[60%] h-full bg-emerald-950 rounded-bl-[400px]"></div>
      </main>

      {/* ================= TEXTO INFORMATIVO ================= */}
      <section className="flex justify-center py-20 px-6">
        <div className="max-w-5xl bg-white border border-emerald-200 shadow-lg rounded-2xl p-10 text-center">
          <p className="text-lg text-gray-800">
            <span className="font-semibold text-green-800">
              Nossas hortaliças são colhidas no ponto certo —
            </span>{" "}
            cultivadas com carinho e respeito à natureza, garantindo frescor,
            qualidade e o melhor sabor da terra!
          </p>

          <p className="mt-6 text-lg text-gray-800">
            Escolha suas hortaliças favoritas e descubra novos sabores —{" "}
            <span className="font-semibold text-green-800">
              o frescor da terra pode transformar sua mesa!
            </span>
          </p>
        </div>
      </section>

      {/* ================= LISTA ================= */}
      <section className="flex justify-center py-20 px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 max-w-6xl">
          {hortaliças.map((hort) => (
            <div
              key={hort.nome}
              className="relative bg-white border border-gray-200 rounded-xl p-4 pt-12 shadow-md flex flex-col items-center hover:scale-105 hover:shadow-[0_0_20px_2px_rgba(16,185,129,0.5)] transition"
            >
              <div className="absolute -top-10">
                <img
                  src={hort.imagem}
                  alt={hort.nome}
                  className="w-24 h-24 object-contain drop-shadow-md"
                />
              </div>

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
