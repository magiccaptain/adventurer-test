import { po, pm } from "../helper/fetcher";

const projectName = "36node-develop";

async function main() {
  const { body: project } = await po.kanban.project.createProject({
    body: {
      name: projectName,
      owner: po.userId,
      pm: [pm.userId],
      refs: [
        {
          oid: "36node-develop/pocket",
          source: "github",
          name: "pocket",
          description: "pocket",
          type: "repository",
          uri: "https://github.com/36node-develop/pocket",
        },
        {
          oid: "36node-develop/apple",
          source: "github",
          name: "apple",
          description: "apple",
          type: "repository",
          uri: "https://github.com/36node-develop/apple",
        },
        {
          oid: "36node-develop/bus",
          source: "github",
          name: "bus",
          description: "bus",
          type: "repository",
          uri: "https://github.com/36node-develop/bus",
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
  });
}

main();
