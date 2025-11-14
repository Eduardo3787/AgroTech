import { useState, FormEvent } from "react";
import { Footer } from "../../components/footer/footer";


import mainImage from "../../assets/cadastro-main.png.png";
import iconUser  from "../../assets/cadastro-icon1.png.png";
import iconChart from "../../assets/cadastro-icon2.png.png";

type PessoaTipo = "juridica" | "fisica";
type Papel = "doador" | "beneficiario";

export default function Cadastro() {
  const [pessoa, setPessoa] = useState<PessoaTipo>("juridica");
  const [papel, setPapel] = useState<Papel>("doador");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    alert("Cadastro enviado! (simulação)");
  }

  return (
    <main className="min-h-screen w-full bg-white">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* TÍTULO + IMAGENS */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight"
              style={{ color: "#02542d" }}
            >
              Cadastre-se
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed" style={{ color: "#6b6b6b" }}>
              Participe desse elo de solidariedade: junte-se ao nosso projeto que
              conecta quem quer donar alimentos com pessoas e instituições que
              realmente precisam. Seja você uma ONG, indivíduo ou instituição
              beneficiária, seu cadastro nos ajuda a tornar as doações mais
              rápidas, seguras e eficazes.
            </p>
          </div>

          {/* IMAGEM + COLUNA DE ÍCONES LADO A LADO */}
          <div className="md:col-span-5 flex justify-end">
            <div className="flex items-center gap-6">
              {/* Imagem principal */}
              <img
                src={mainImage}
                alt="Pessoa digitando em notebook"
                className="w-[360px] h-auto rounded-2xl object-cover"
              />

              {/* Coluna de ícones  */}
              <div className="flex flex-col items-center gap-4">
                <img
                  src={iconUser}
                  alt="Ícone Usuário"
                  className="w-[103px] h-[90px] object-contain"
                />
                <img
                  src={iconChart}
                  alt="Ícone Gráfico"
                  className="w-[103px] h-[90px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FORM + LISTAS */}
        <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* CARD FORM */}
          <div className="md:col-span-6">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ background: "#ecf5ef", border: "1px solid #d6eadd" }}
            >
              {/* Radios: tipo de pessoa */}
              <div className="mb-6 flex items-center gap-4">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="pessoa"
                    className="h-4 w-4"
                    style={{ accentColor: "#02542d" }}
                    checked={pessoa === "juridica"}
                    onChange={() => setPessoa("juridica")}
                  />
                  <span style={{ color: "#6b6b6b" }}>Pessoa Jurídica</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="pessoa"
                    className="h-4 w-4"
                    style={{ accentColor: "#02542d" }}
                    checked={pessoa === "fisica"}
                    onChange={() => setPessoa("fisica")}
                  />
                  <span style={{ color: "#6b6b6b" }}>Pessoa Física</span>
                </label>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  className="w-full rounded-xl border-0 bg-white/90 px-4 py-3 shadow-inner focus:outline-none focus:ring-2"
                  style={{ color: "#122900" }}
                  placeholder="Nome"
                  required
                />
                <input
                  type="email"
                  className="w-full rounded-xl border-0 bg-white/90 px-4 py-3 shadow-inner focus:outline-none focus:ring-2"
                  style={{ color: "#122900" }}
                  placeholder="Email"
                  required
                />
                <input
                  className="w-full rounded-xl border-0 bg-white/90 px-4 py-3 shadow-inner focus:outline-none focus:ring-2"
                  style={{ color: "#122900" }}
                  placeholder="Telefone"
                />

                {/* Radios: papel */}
                <div className="grid grid-cols-2 gap-3">
                  <label className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                    <input
                      type="radio"
                      name="papel"
                      className="h-4 w-4"
                      style={{ accentColor: "#02542d" }}
                      checked={papel === "doador"}
                      onChange={() => setPapel("doador")}
                    />
                    <span style={{ color: "#6b6b6b" }}>Doador</span>
                  </label>
                  <label className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                    <input
                      type="radio"
                      name="papel"
                      className="h-4 w-4"
                      style={{ accentColor: "#02542d" }}
                      checked={papel === "beneficiario"}
                      onChange={() => setPapel("beneficiario")}
                    />
                    <span style={{ color: "#6b6b6b" }}>Beneficiário</span>
                  </label>
                </div>

                <textarea
                  rows={4}
                  className="w-full resize-none rounded-xl border-0 bg-white/90 px-4 py-3 shadow-inner focus:outline-none focus:ring-2"
                  style={{ color: "#122900" }}
                  placeholder="Recado"
                />

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90"
                  style={{ background: "#02542d" }}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* LISTAS */}
          <div className="md:col-span-6" style={{ color: "#6b6b6b" }}>
            <h3 className="mb-2 font-semibold" style={{ color: "#122900" }}>
              ✍ Quem pode participar?
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pessoas físicas com alimentos para doar.</li>
              <li>ONGs, instituições sociais, igrejas e projetos comunitários.</li>
              <li>Famílias em situação de vulnerabilidade.</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
