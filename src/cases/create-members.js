import { po, pm, user1, user2, system } from "../helper/fetcher";

async function main() {
  // await Promise.all(
  //   [po, pm, user1, user2].map((u) => {
  //     return u.club.members.createMember({
  //       body: {
  //         user: u.userId,
  //         ...u.userInfo,
  //       },
  //     });
  //   })
  // );

  await Promise.all(
    [system].map(u => {
      return u.club.members.createMember({
        body: {
          user: u.userId,
          ...u.userInfo,
        },
      });
    })
  );
}

main();
