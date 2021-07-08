/**
 * 创建加入github 仓库 申请
 */

import { user1 } from "../../helper/fetcher";

async function main() {
  try {
    const { body: member } = await user1.club.members.getMemberByUser({
      userId: user1.userId,
    });

    const body = {
      ref: "36node-develop/apple",
      oid: member.id,
      type: "JOIN_GITHUB_REPO",
    };

    console.log(body);

    await user1.club.applications.createApplication({
      body,
    });
  } catch (error) {
    console.error(error);
  }
}

main();
