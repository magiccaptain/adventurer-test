import { user1 } from "../helper/fetcher";

async function main() {
  // user1.kanban.ticket.takeTicket({
  //   ticketId: "60e65d24b2ad1cb5ad4eaa56",
  // });

  user1.kanban.ticket.takeTicket({
    ticketId: "60e65d24b2ad1cb5ad4eaa62",
  });
}

main();
