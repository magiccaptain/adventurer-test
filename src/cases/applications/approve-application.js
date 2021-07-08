import { pm } from "../../helper/fetcher";

const applicationId = "60e6b3f13a9b24c808f2704f";

async function main() {
  await pm.club.applications.approveApplication({
    applicationId,
  });
}

main();
