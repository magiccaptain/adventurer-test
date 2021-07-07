import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

import FinanceSdk from "@adventurer-tech/finance-sdk-js";
import ClubSdk from "@adventurer-tech/club-sdk-js";
import KanbanSdk from "@adventurer-tech/kanban-sdk";
import * as config from "../config";

const privateKey = fs.readFileSync(
  path.join(__dirname, "..", "..", "ssl", "rsa_jwt.key")
);

class Fetcher {
  constructor(user = {}) {
    this._user = user;
    this._token = jwt.sign(user, privateKey, { algorithm: "RS256" });

    // 初始化sdk
    this.kanban = new KanbanSdk({
      base: config.KANBAN_BASE,
      token: this._token,
    });

    this.club = new ClubSdk({
      base: config.CLUB_BASE,
      token: this._token,
    });

    this.finance = new FinanceSdk({
      base: config.FINANCE_BASE,
      token: this._token,
    });
  }

  get userId() {
    return this._user.user;
  }
}

export const po = new Fetcher({
  user: "600bb06a6a6c690011096fe1", // 小陈
  roles: ["MEMBER_MANAGER"],
});

export const pm = new Fetcher({
  user: "600bba106a6c6900110970d9", // 小李
  roles: ["MEMBER_MANAGER"],
});

export const user1 = new Fetcher({
  user: "600bbbae6a6c6900110970f7", // 小王
  roles: [],
});

export const user2 = new Fetcher({
  user: "600bbcd86a6c690011097115", // 小周
  roles: [],
});
