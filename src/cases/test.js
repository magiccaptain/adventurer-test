const e = {
  level: 30,
  time: 1626018747337,
  pid: 1160294,
  hostname: "sc-xubuntu",
  event: "TICKET_UPDATE",
  payload: {
    diff: {
      labels: {
        _t: "a",
        _1: ["chore", 0, 0],
        _2: ["design", 0, 0],
      },
    },
    ticket: {
      board: "adventurer",
      content: "爸爸去哪儿了",
      data: {
        prUrl: "测试",
      },
      deadline: "2021-08-11T15:59:59.999Z",
      labels: ["bug"],
      lane: "todo",
      level: 4,
      priority: 0,
      project: "60e658bfb2ad1cb5ad4eaa51",
      published: false,
      refs: [
        {
          oid: "26",
          source: "github",
          name: "爸爸去哪儿了",
          type: "issue",
          uri: "https://github.com/36node-develop/banana/issues/26",
          id: "60eaeab64d5f2498b5ac1f7a",
        },
        {
          oid: "36node-develop/banana",
          source: "github",
          name: "banana",
          description: "banana",
          type: "repository",
          uri: "https://github.com/36node-develop/banana",
          id: "60eaeab64d5f2498b5ac1f7b",
        },
      ],
      reopen: false,
      stage: "INIT",
      state: "OPEN",
      takeBy: null,
      title: "爸爸去哪儿了",
      type: "STORY",
      risk: "NO_RISK",
      createBy: "600bb06a6a6c690011096fe1",
      updateAt: "2021-07-11T15:52:27.330Z",
      createAt: "2021-07-11T12:57:26.117Z",
      id: "60eaeab64d5f2498b5ac1f79",
    },
  },
};

function main() {
  const { payload } = e;
  const { diff, ticket } = payload;

  const ret = Object.keys(diff).reduce((acc, cur) => {
    console.log(cur, acc);
    acc[cur] = ticket[cur];
    return acc;
  }, {});

  console.log(ret);
  console.log(ticket.labels);
}

main();
