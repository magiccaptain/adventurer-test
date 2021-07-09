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

  set userInfo(info) {
    this._userInfo = info;
  }

  get userInfo() {
    return this._userInfo;
  }
}

export const po = new Fetcher({
  user: "600bb06a6a6c690011096fe1", // 小陈
  roles: ["MEMBER_MANAGER", "APPLICATION_MANAGER", "NOTIFICATION_MANAGER"],
});

po.userInfo = {
  name: "小陈",
  phone: "18611234568",
  idCard: "41020319550134113",
  position: "开发",
  email: "develop@36node.com",
  avatar:
    "https://avatars.githubusercontent.com/u/57525296?s=400&u=124655af17c93c8b4532a6430c4cf7ed10a72014&v=4",
  bank: "中国银行",
  bankCard: "324444xxxxxx",
  github: "36node-develop",
  ns: "adventurer.36node",
};

export const pm = new Fetcher({
  user: "600bba106a6c6900110970d9", // 小李
  roles: ["MEMBER_MANAGER", "APPLICATION_MANAGER", "NOTIFICATION_MANAGER"],
});

pm.userInfo = {
  name: "小李",
  phone: "18611234567",
  idCard: "123123123123",
  position: "产品",
  email: "pm@36node.com",
  avatar:
    "https://avatars.githubusercontent.com/u/77844347?s=400&u=9692dc9231923d07639c2e12e3f70708fe1b2d07&v=4",
  bank: "山东银行",
  bankCard: "12321234234",
  github: "36node-pm",
  ns: "adventurer.36node",
};

export const user1 = new Fetcher({
  user: "600bbbae6a6c6900110970f7", // 小王
  roles: [],
});

user1.userInfo = {
  name: "小王",
  phone: "18611234569",
  idCard: "1231244234234",
  position: "前端",
  email: "user1@36node.com",
  avatar:
    "https://avatars.githubusercontent.com/u/77844644?s=400&u=d6dc97bb6346a32fca0f1b23ce487a3b502207ae&v=4",
  bank: "河南银行",
  bankCard: "123124124",
  github: "36node-user1",
  ns: "adventurer.members",
};

export const user2 = new Fetcher({
  user: "600bbcd86a6c690011097115", // 小周
  roles: [],
});

user2.userInfo = {
  name: "小周",
  phone: "18611234570",
  idCard: "41020319550134199",
  position: "开发",
  email: "user2@36node.com",
  avatar:
    "https://avatars.githubusercontent.com/u/77844896?s=400&u=20c07f0ad0aebc1de3e932cd93c4e4c84495174e&v=4",
  bank: "中国工商银行",
  bankCard: "6561xxxxxxxx",
  github: "36node-user2",
  ns: "adventurer.members",
};
