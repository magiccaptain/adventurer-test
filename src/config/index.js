import dotenv from "dotenv";
dotenv.config();

/**
 *
 * @param {string} name environment name
 * @param {object} opt option with { required, default }
 * @returns {*} value
 */
export function env(name, init) {
  const value = process.env[name.toUpperCase()] || process.env[name] || init;

  if (value === undefined) {
    throw new Error(`environment ${name} is missing`);
  }

  return value;
}

export const FINANCE_BASE = env(
  "FINANCE_BASE",
  "https://finance.adv-uat.36node.com/v0"
);

export const CLUB_BASE = env("CLUB_BASE", "https://club.adv-uat.36node.com/v0");

export const KANBAN_BASE = env(
  "KANBAN_BASE",
  "https://kanban.adv-uat.36node.com/v0"
);
