import { useState } from "react";

export const TalkToUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form enviado:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section className="flex flex-col justify-center items-center w-full px-6 py-16 gap-10 xl:flex-row">
      <div className="flex flex-col justify-center text-center px-4 w-full max-w-[670px] text-base md:text-[22px] md:leading-[28px] ">
        <h2 className="font-bold text-green-950 mb-6 text-3xl xl:text-[35px]">Fale Conosco</h2>
        <p className="text-gray-700 mb-4">
          Tem dúvidas, sugestões ou quer fazer parte dessa rede que transforma alimentos em esperança?
        </p>
        <p className="text-gray-700 mb-4">
          Nossa equipe está pronta para te ouvir. Preencha o formulário abaixo ou entre em contato pelos nossos canais.
        </p>
        <p className="text-green-950 font-semibold mb-4">
          Juntos podemos combater a fome e o desperdício de alimentos no Brasil!
        </p>
        <p className="text-gray-700 mb-4">
          Entre em contato por meio do formulário abaixo ou envie um e-mail para{" "}
          <a
            href="mailto:contato@foodlink.com.br"
            className="underline text-base md:text-[22px]"
          >
            contato@foodlink.com.br
          </a>
          .
        </p>
        <p className="text-gray-700 mb-2">
          Atendimento disponível de segunda a sexta-feira, das 9h às 18h.
        </p>
        <p className="text-gray-700">
          Juntos, podemos fortalecer nossa rede de solidariedade e transformar ainda mais vidas.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-green-600 rounded-lg shadow-md p-6 flex flex-col gap-4 px-4 w-full max-w-[670px] xl:w-[713px]"
      >
        <div>
          <label className="block text-green-800 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-green-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div>
          <label className="block text-green-800 font-medium mb-1">Surname</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full border border-green-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Digite seu sobrenome"
            required
          />
        </div>

        <div>
          <label className="block text-green-800 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-green-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div>
          <label className="block text-green-800 font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-green-600 rounded px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Digite sua mensagem"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>

      <section
  id="fale-conosco"
  
/>

    </section>
  );

  
}
