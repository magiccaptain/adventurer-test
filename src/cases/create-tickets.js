import moment from "moment";
import { po, user1, user2 } from "../helper/fetcher";

const projectId = "60e555efe8e63e0012b84487";

const boardId = "adventurer";

/**
 * 创建ticket
 * @param {import("@adventurer-tech/kanban-sdk").TicketCreateDoc} body
 */
async function createTicket(body) {
  return await po.kanban.ticket.createTicket({
    body: {
      ...body,
      board: boardId,
      project: projectId,
    },
  });
}

async function main() {
  try {
    const { body: ticket1 } = await createTicket({
      title: "新建一个苹果",
      content: "新建一个苹果",
      type: "task",
      level: 1,
      deadline: moment()
        .add("1", "month")
        .toISOString(),
      refs: [
        {
          oid: "21",
          source: "github",
          name: "创建一个苹果",
          type: "issue",
          uri: "https://github.com/36node-develop/apple/issues/21",
        },
        {
          oid: "36node-develop/apple",
          source: "github",
          name: "apple",
          description: "apple",
          type: "repository",
          uri: "https://github.com/36node-develop/apple",
        },
      ],
    });

    const { body: ticket2 } = await createTicket({
      title: "香蕉是圆的",
      content: "香蕉是圆的",
      type: "task",
      level: 1,
      deadline: moment()
        .add("1", "month")
        .toISOString(),
      refs: [
        {
          oid: "9",
          source: "github",
          name: "香蕉是圆的",
          type: "issue",
          uri: "https://github.com/36node-develop/banana/issues/9",
        },
        {
          oid: "36node-develop/banana",
          source: "github",
          name: "banana",
          description: "banana",
          type: "repository",
          uri: "https://github.com/36node-develop/banana",
        },
      ],
    });

    // 发布ticket1
    await po.kanban.ticket.updateTicket({
      ticketId: ticket1.id,
      body: {
        published: true,
        publishAt: moment().toISOString(),
        lane: "todo",
        publishBy: po.userId,
      },
    });

    // user1 领取ticket1
    await user1.kanban.ticket.takeTicket({
      ticketId: ticket1.id,
    });

    // user1 撤销领取ticket1
    await user1.kanban.ticket.untakeTicket({
      ticketId: ticket1.id,
    });

    // user2 领取ticket1
    await user2.kanban.ticket.takeTicket({
      ticketId: ticket1.id,
    });

    // user2 提交review
    await user2.kanban.action.createAction({
      body: {
        name: "提交 review",
        board: boardId,
        ticket: ticket1.id,
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
