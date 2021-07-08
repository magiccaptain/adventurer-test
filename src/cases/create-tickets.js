import moment from "moment";
import { po } from "../helper/fetcher";

const projectId = "60e658bfb2ad1cb5ad4eaa51";

const boardId = "adventurer";

const tickets = [
  {
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
  },
  {
    title: "香蕉是圆的",
    content: "香蕉是圆的",
    type: "task",
    level: 3,
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
  },
  {
    title: "微信的短内容",
    content: "微信的短内容",
    type: "task",
    level: 2,
    deadline: moment()
      .add("1", "month")
      .toISOString(),
    refs: [
      {
        oid: "32",
        source: "github",
        name: "微信的短内容",
        type: "issue",
        uri: "https://github.com/36node-develop/banana/issues/32",
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
  },
  {
    title: "爸爸去哪儿了",
    content: "爸爸去哪儿了",
    type: "task",
    level: 4,
    deadline: moment()
      .add("1", "month")
      .toISOString(),
    refs: [
      {
        oid: "26",
        source: "github",
        name: "爸爸去哪儿了",
        type: "issue",
        uri: "https://github.com/36node-develop/banana/issues/26",
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
  },
  {
    title: "打造突破式产品思维——王师母",
    content: "打造突破式产品思维——王师母",
    type: "task",
    level: 5,
    deadline: moment()
      .add("1", "month")
      .toISOString(),
    refs: [
      {
        oid: "20",
        source: "github",
        name: "打造突破式产品思维——王师母",
        type: "issue",
        uri: "https://github.com/36node-develop/banana/issues/20",
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
  },
];

async function main() {
  try {
    await Promise.all(
      tickets.map((t) => {
        return po.kanban.ticket.createTicket({
          body: {
            ...t,
            board: boardId,
            project: projectId,
          },
        });
      })
    );

    // const { body: ticket1 } = await createTicket();
    // const { body: ticket2 } = await createTicket();
    // 发布ticket1
    // await po.kanban.ticket.updateTicket({
    //   ticketId: ticket1.id,
    //   body: {
    //     published: true,
    //     publishAt: moment().toISOString(),
    //     lane: "todo",
    //     publishBy: po.userId,
    //   },
    // });
    // user1 领取ticket1
    // await user1.kanban.ticket.takeTicket({
    //   ticketId: ticket1.id,
    // });
    // user1 撤销领取ticket1
    // await user1.kanban.ticket.untakeTicket({
    //   ticketId: ticket1.id,
    // });
    // user2 领取ticket1
    // await user2.kanban.ticket.takeTicket({
    //   ticketId: ticket1.id,
    // });
    // user2 提交review
    // await user2.kanban.action.createAction({
    //   body: {
    //     name: "提交 review",
    //     board: boardId,
    //     ticket: ticket1.id,
    //     flow: "submit",
    //     payload: {
    //       prUrl: "some url",
    //       timeCost: 30,
    //     },
    //   },
    // });
  } catch (error) {
    console.error(error);
  }
}

main();
