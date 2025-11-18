import banner from "../../assets/banner.png";

export const HeroSection = () => {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      <div className="relative w-full h-[550px] sm:h-[650px] md:h-[750px] lg:h-[900px] xl:h-[963px] bg-gray-600 md:bg-transparent">

        {/* Imagem */}
        <img
          src={banner}
          alt="Prato saudável"
          className="w-full h-full object-cover opacity-60 md:opacity-100"
        />

        {/* Conteúdo */}
        <div
          className="
            absolute inset-0 z-10 flex flex-col items-center justify-center 
            text-center text-white p-4 gap-4

            md:items-start md:text-left md:p-10
            xl:pl-[180px]
          "
        >
          {/* Título */}
          <h1
            className="
              leading-tight font-bold text-green-400 drop-shadow-xl

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            JUNTOS <br /> CONTRA <br /> A FOME
          </h1>

          {/* Subtítulo */}
          <p
            className="
              mt-2 md:mt-4 text-slate-900 font-medium drop-shadow

              text-base
              sm:text-lg
              md:text-xl
              lg:text-3xl
            "
          >
            Conectando Solidariedade à Sustentabilidade
          </p>

          {/* Botão */}
          <button
            className="
              mt-6 md:mt-10
              px-6 py-3
              sm:px-7 sm:py-3
              md:px-8 md:py-4
              lg:h-[80px]
              lg:text-2xl

              bg-green-600 text-white font-semibold rounded-full shadow-lg
              hover:bg-green-700 hover:scale-105 transition-transform duration-300 ease-in-out
            "
          >
            TORNE-SE UM COLABORADOR
          </button>
        </div>
      </div>

      {/* Informações abaixo */}
      <div className="flex w-full border-t py-8 mx-auto bg-white">
        <div
          className="
            flex w-full flex-col items-center justify-center text-center gap-8

            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl

            md:flex-row md:gap-16
            lg:gap-32
          "
        >
          <p>
            Combatemos o <br /> desperdício e a fome
          </p>

          <p
            className="
              relative

              md:before:content-['']
              md:before:absolute
              md:before:left-1/2
              md:before:bottom-[-25px]
              md:before:-translate-x-1/2
              md:before:w-[200px]
              md:before:h-[4px]
              md:before:bg-green-500
            "
          >
            Conectamos doadores às <br /> pessoas e instituições
          </p>

          <p>
            Transformamos excedentes em <br /> esperança
          </p>
        </div>
      </div>
    </section>
  );
};
