import { useNavigate } from "react-router-dom";
import checkImg from "../../assets/check-icon.svg";

export const ColaboradorCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 pt-16 pb-24 lg:pb-72 text-center">
      <div className="flex flex-col items-center justify-center text-base md:text-[22px]">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-[35px] font-bold mb-2 text-green-950">
          Você pode fazer parte dessa mudança!
        </h2>

        {/* H3 CLICÁVEL */}
        <h3
          onClick={() => navigate("/cadastro")}
          className="
            font-semibold 
            text-3xl 
            md:text-[35px] 
            text-green-600 
            cursor-pointer 
            hover:text-green-800 
            transition-all 
            duration-300
          "
        >
          Torne-se um colaborador!
        </h3>

        {/* TEXTOS */}
        <p className="text-gray-700 mt-6 max-w-[1147px] w-full mx-auto">
          A transformação começa com ações concretas. Ao se tornar um colaborador,
          você não apenas contribui com alimentos, mas também com esperança,
          dignidade e um futuro melhor para quem mais precisa.
        </p>

        <p className="text-gray-700 mt-11 max-w-[1464px] w-full mx-auto">
          Cada gesto de solidariedade fortalece nossa rede de apoio e amplia o
          impacto de nossas ações. Seja como doador, voluntário ou parceiro 
          institucional, sua participação é fundamental para construirmos juntos
          uma comunidade mais justa e solidária. Junte-se a nós e faça a diferença!
        </p>

        {/* BOTÃO PRINCIPAL */}
        <div className="mt-10">
          <button
            onClick={() => navigate("/cadastro")}
            className="
              bg-green-950 
              text-green-500 
              font-bold 
              text-lg 
              px-8 py-3 
              rounded-full 
              shadow-lg 
              hover:bg-green-900 
              transition
            "
          >
            Cadastre-se agora e se torne um colaborador
          </button>
        </div>

        {/* 3 BENEFÍCIOS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-row items-center gap-3">
            <img src={checkImg} alt="check-icon" />
            <p className="text-gray-500 mt-2 font-[22px]">Redução do desperdício</p>
          </div>

          <div className="flex flex-row items-center gap-3">
            <img src={checkImg} alt="check-icon" />
            <p className="text-gray-500 mt-2 font-[22px]">Sustentabilidade</p>
          </div>

          <div className="flex flex-row items-center gap-3">
            <img src={checkImg} alt="check-icon" />
            <p className="text-gray-500 mt-2 font-[22px]">Segurança Alimentar</p>
          </div>
        </div>

        {/* TEXTO FINAL */}
        <p className="text-gray-500 mt-10 max-w-[1192px] w-full mx-auto">
          Nessa área, você tem acesso a todas as ferramentas para contribuir com
          um mundo mais justo e sustentável. <br /> Gerencie suas doações, acompanhe os
          alimentos recebidos ou doados e veja como, juntos, estamos construindo
          um futuro sem fome e com menos desperdício!
        </p>
      </div>
    </section>
  );
};
