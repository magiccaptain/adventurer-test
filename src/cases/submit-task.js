import { user2 } from "../helper/fetcher";

const ticketId = "60eaeab64d5f2498b5ac1f73";

async function main() {
  try {
    await user2.kanban.action.createAction({
      body: {
        name: "提交 review",
        board: "adventurer",
        ticket: ticketId,
        flow: "submit",
        payload: {
          prUrl: "some url",
          timeCost: 30,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
}

main();
