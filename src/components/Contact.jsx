export function Contact() {
  const GETFORM_URL =
    'https://getform.io/f/022fcb9b-f264-401a-a78a-d47a217f4370'

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contato
      </h1>
      <form action={GETFORM_URL} method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Nome</label>
            <input
              type="text"
              name="name"
              required
              className="border-2 rounded-lg flex p-3 border-gray300 outline-[#001b5e]"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">
              Telefone <span className="lowercase">ou</span> WhatsApp
            </label>
            <input
              type="tel"
              name="text"
              required
              className="border-2 rounded-lg flex p-3 border-gray300 outline-[#001b5e]"
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">E-mail</label>
          <input
            type="email"
            name="email"
            required
            className="border-2 rounded-lg flex p-3 border-gray300 outline-[#001b5e]"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Assunto</label>
          <input
            type="text"
            name="subject"
            required
            className="border-2 rounded-lg flex p-3 border-gray300 outline-[#001b5e]"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Mensagem</label>
          <textarea
            rows="10"
            name="message"
            required
            placeholder="Deixa aqui sua mensagem..."
            className="border-2 rounded-lg flex p-3 border-gray300 outline-[#001b5e]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#001b5e] font-semibold text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-blue-900"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  )
}
