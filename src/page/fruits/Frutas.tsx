import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoIcon from "../../assets/logo-icon.svg";
import { Menu, X, ArrowLeft } from "lucide-react";

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

  // ========================= MENU MOBILE =========================
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header
        className="
          w-full 
          bg-[#0c2408] 
          flex items-center justify-between
          px-4 py-4
          shadow-md
        "
      >
        {/* Botão voltar */}
        <button
          onClick={() => navigate("/")}
          className="text-white flex items-center gap-1"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Logo central */}
        <img
          src={logoIcon}
          alt="AgroTech"
          className="w-[45px] h-[45px]"
        />

        {/* Menu hamburguer */}
        <button onClick={() => setMenuOpen(true)}>
          <Menu className="text-white w-7 h-7" />
        </button>
      </header>

      {/* ================= MENU MOBILE ================= */}
      {menuOpen && (
        <>
          {/* Fundo escuro */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          ></div>

          {/* Menu lateral */}
          <div
            className="
              fixed top-0 right-0 h-full w-[260px] bg-white 
              shadow-xl z-50 p-6 flex flex-col gap-6 
              animate-slideLeft
            "
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-emerald-900">
                Menu
              </h3>
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6 text-emerald-900" />
              </button>
            </div>

            <button
              className="text-left font-semibold text-emerald-900"
              onClick={() => navigate("/")}
            >
              Página Principal
            </button>

            <button
              className="text-left font-semibold text-emerald-900"
              onClick={() => navigate("/cadastro")}
            >
              Área do Usuário
            </button>

            <button
              className="text-left font-semibold text-emerald-900"
              onClick={() => window.open("https://wa.me/5511999999999")}
            >
              Fale Conosco (WhatsApp)
            </button>
          </div>
        </>
      )}

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <main className="relative flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-24">
        <div className="z-10 max-w-[600px] text-left">
          <h1 className="text-6xl font-extrabold text-green-800 leading-[1.1]">
            Frutas <br /> Frescas
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
            Na nossa plataforma, você pode doar alimentos que sobrariam,
            apoiar instituições sociais e ajudar famílias que enfrentam a fome.
            Aqui, cada gesto faz diferença: reduz o desperdício, fortalece
            comunidades e garante que mais pessoas tenham dignidade à mesa.
         </p>
 
        </div>

        <div className="absolute top-0 right-0 w-[60%] h-full bg-emerald-950 rounded-bl-[400px]"></div>
      </main>

      {/* ================= LISTA DE FRUTAS ================= */}
      <section className="w-full flex justify-center py-20 px-8 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-7xl">
          {frutas.map((fruta) => (
            <div
              key={fruta.nome}
              className="relative flex flex-col items-center justify-end text-center bg-white border border-gray-200 rounded-xl p-4 pt-12 shadow-md transition-transform duration-300 hover:scale-105"
            >
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
