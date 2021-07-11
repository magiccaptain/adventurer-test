import { pm } from "../helper/fetcher";

async function main() {
  // user1.kanban.ticket.takeTicket({
  //   ticketId: "60e65d24b2ad1cb5ad4eaa56",
  // });
  try {
    await pm.kanban.ticket.closeTicket({
      ticketId: "60eaeab64d5f2498b5ac1f73",
    });
  } catch (error) {
    console.error(error);
  }
}

main();
