import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.svg";
import { Phone, User, ArrowLeft } from "lucide-react"; 

//  Importando todas as imagens das frutas
import manga from "../../assets/manga.png";
import abacaxi from "../../assets/abacaxi.png";
import melancia from "../../assets/melancia.png";
import mamao from "../../assets/mamao.png";
import maracuja from "../../assets/maracuja.png";
import banana from "../../assets/banana.png";
import maca from "../../assets/maça.png";
import laranja from "../../assets/laranja.png";
import limao from "../../assets/limao.png";
import goiaba from "../../assets/goiaba.png";
import caju from "../../assets/caju.png";
import pera from "../../assets/pera.png";
import uva from "../../assets/uva.png";
import kiwi from "../../assets/kiwi.png";
import ameixa from "../../assets/ameixa.png";
import caqui from "../../assets/caqui.png";
import melao from "../../assets/melao.png";
import morango from "../../assets/morango.png";

export default function Frutas() {
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

  const frutas = [
    { nome: "Manga", imagem: manga },
    { nome: "Abacaxi", imagem: abacaxi },
    { nome: "Melancia", imagem: melancia },
    { nome: "Mamão", imagem: mamao },
    { nome: "Maracujá", imagem: maracuja },
    { nome: "Banana", imagem: banana },
    { nome: "Maçã", imagem: maca },
    { nome: "Laranja", imagem: laranja },
    { nome: "Limão", imagem: limao },
    { nome: "Goiaba", imagem: goiaba },
    { nome: "Caju", imagem: caju },
    { nome: "Pera", imagem: pera },
    { nome: "Uva", imagem: uva },
    { nome: "Kiwi", imagem: kiwi },
    { nome: "Ameixa", imagem: ameixa },
    { nome: "Caqui", imagem: caqui },
    { nome: "Melão", imagem: melao },
    { nome: "Morango", imagem: morango },
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
            Frutas <br /> Frescas
          </h1>

          <p className="mt-6 text-lg font-semibold text-green-950">
            Juntos, podemos alimentar o mundo!
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Na nossa plataforma, você pode doar alimentos que sobrariam,
            apoiar instituições sociais e ajudar famílias que enfrentam a fome.
            Aqui, cada gesto faz diferença: reduz o desperdício, fortalece
            comunidades e garante que mais pessoas tenham dignidade à mesa.
          </p>
        </div>

        <div className="absolute top-0 right-0 w-[60%] h-full bg-emerald-950 rounded-bl-[400px]"></div>
      </main>

      {/* ================= TEXTO INFORMATIVO ================= */}
      <section className="relative w-full bg-white flex justify-center py-20 px-6">
        <div className="max-w-5xl bg-white border border-emerald-200 shadow-lg rounded-2xl p-10 text-center">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="font-semibold text-green-800">
              As frutas são mais que sobremesas deliciosas,
            </span>{" "}
            são aliadas fundamentais da saúde. São ricas em fibras, vitaminas,
            minerais e compostos bioativos que ajudam a regular o intestino,
            fortalecer o sistema imunológico e prevenir doenças.
          </p>

          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            E o melhor: temos uma variedade extraordinária ao nosso alcance.
            Escolha agora suas frutas favoritas e experimente algo novo —{" "}
            <span className="font-semibold text-green-800">
              sua próxima mordida pode surpreender!
            </span>
          </p>
        </div>
      </section>

      {/* ================= LISTA DE FRUTAS ================= */}
      <section className="w-full flex justify-center py-20 px-8 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-7xl">
          {frutas.map((fruta) => (
            <div
              key={fruta.nome}
              className="relative flex flex-col items-center justify-end text-center bg-white border border-gray-200 rounded-xl p-4 pt-12 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_2px_rgba(16,185,129,0.5)]"
            >
              {/* Imagem sobreposta */}
              <div className="absolute -top-10">
                <img
                  src={fruta.imagem}
                  alt={fruta.nome}
                  className="w-24 h-24 object-contain drop-shadow-md"
                />
              </div>
              <p className="mt-14 text-lg font-semibold text-gray-800">
                {fruta.nome}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
