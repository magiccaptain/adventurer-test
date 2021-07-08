import { pm } from "../helper/fetcher";

async function main() {
  // user1.kanban.ticket.takeTicket({
  //   ticketId: "60e65d24b2ad1cb5ad4eaa56",
  // });

  pm.kanban.ticket.closeTicket({
    ticketId: "60e65d24b2ad1cb5ad4eaa5c",
  });
}

main();
