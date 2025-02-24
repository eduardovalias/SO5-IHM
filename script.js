// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista de objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false },
  { id: 2, formato: "padrao", status: true, acessivel: false },
  { id: 3, formato: "padrao", status: true, acessivel: false },
  { id: 4, formato: "padrao", status: false, acessivel: true },
  { id: 5, formato: "padrao", status: false, acessivel: true },
  { id: 6, formato: "duplo", status: true, acessivel: true },
  { id: 7, formato: "duplo", status: false, acessivel: true },
  { id: 8, formato: "duplo", status: false, acessivel: true },
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  
  // Obtém o tipo de armário selecionado no HTML.
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  // Filtra os armários disponíveis que atendem às necessidades do usuário.
  let armariosDisponiveis = armarios.filter(a => 
    a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel
  );
  
  // Se não houver armário disponível, exibe mensagem e encerra.
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }
  
  // Sorteia um armário disponível.
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
  // Registra a data e hora da reserva.
  armarioSorteado.dataReserva = new Date();
  
  // Calcula a data e hora para entrega das chaves (24h após a reserva)
  const dataEntrega = new Date(armarioSorteado.dataReserva.getTime() + 24 * 60 * 60 * 1000);
  armarioSorteado.dataEntregaChaves = dataEntrega;
  
  // Atualiza o status do armário para indicar que está reservado.
  armarioSorteado.status = false;
  
  // Atualiza a pendência do usuário.
  usuario.pendencia = true;
  
  // Exibe mensagem de confirmação com data/hora da reserva e previsão de entrega das chaves.
  document.getElementById("resultado").innerText = 
    `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso em ${armarioSorteado.dataReserva.toLocaleString()}! A entrega das chaves está prevista para ${armarioSorteado.dataEntregaChaves.toLocaleString()}.`;

  console.log(usuario);
  console.log(armarios);
}
