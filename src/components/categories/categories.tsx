import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { categories } from "../../constants";

export const Categories = () => {
  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const next = () => {
    if (index < categories.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-20 overflow-hidden">

      {/* TÍTULO */}
      <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-10 text-center">
        Categorias em Destaque
      </h2>

      <p className="text-gray-500 text-sm md:text-lg mb-12 text-center max-w-[750px]">
        Descubra as categorias que fazem a diferença. Alimentos essenciais para quem mais precisa!
      </p>

      {/* CARROSSEL */}
      <div className="relative w-full max-w-[1200px] flex items-center justify-center">

        {/* SETA ESQUERDA */}
        <button
          onClick={prev}
          disabled={index === 0}
          className={`absolute left-0 z-20 bg-white shadow-xl rounded-full p-3 transition
            ${index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"}`}
        >
          <ChevronLeft className="text-green-700 w-6 h-6" />
        </button>

        {/* CARDS COM EFEITO 3D */}
        <div className="relative flex w-full justify-center items-center h-[330px]">

          {categories.map((item, i) => {
            const position = i - index;

            // EFEITO 3D
            let translateX = position * 230;
            let scale = 1 - Math.abs(position) * 0.15;
            let opacity = 1 - Math.abs(position) * 0.25;
            let zIndex = 10 - Math.abs(position);
            let rotateY = position * -10;

            if (scale < 0.6) scale = 0.6;
            if (opacity < 0) opacity = 0;

            const isCenter = position === 0;

            return (
              <div
                key={item.nome}
                style={{
                  transform: `
                    translateX(${translateX}px)
                    scale(${scale})
                    rotateY(${rotateY}deg)
                  `,
                  opacity,
                  zIndex,
                  boxShadow: isCenter
                    ? "0px 0px 25px 8px rgba(0,160,70,0.4)"
                    : "0px 0px 12px rgba(0,0,0,0.15)",
                }}
                className={`
                  absolute transition-all duration-500
                  bg-white rounded-2xl p-4 pt-12
                  w-[220px] h-[260px] flex flex-col items-center justify-end
                  border border-gray-200
                  ${isCenter ? "animate-bounce-slow" : ""}
                `}
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="absolute -top-10 w-[90px] h-[90px] object-contain drop-shadow-md"
                />

                <p className="text-lg font-semibold text-gray-800 text-center mt-6">
                  {item.nome}
                </p>

                <button
                  onClick={() => toggleFavorite(item.nome)}
                  className="mt-4"
                >
                  <Heart
                    className={`w-7 h-7 transition-all ${
                      favorites.includes(item.nome)
                        ? "text-red-500 fill-red-500"
                        : "text-green-700"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* SETA DIREITA */}
        <button
          onClick={next}
          disabled={index === categories.length - 1}
          className={`absolute right-0 z-20 bg-white shadow-xl rounded-full p-3 transition
            ${
              index === categories.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
        >
          <ChevronRight className="text-green-700 w-6 h-6" />
        </button>
      </div>

      {/* INDICADORES (BOLINHAS CLICÁVEIS) */}
      <div className="flex gap-2 mt-8">
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full transition transform
              ${i === index ? "bg-green-600 scale-150" : "bg-gray-300 hover:bg-green-400"}
            `}
          ></button>
        ))}
      </div>
    </section>
  );
};
