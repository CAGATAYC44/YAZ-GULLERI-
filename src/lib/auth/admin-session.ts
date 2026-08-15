import "server-only";
import crypto from "node:crypto";

export const ADMIN_SESSION_COOKIE = "yg_admin_session";

function timingSafeStringEqual(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  if (bufferA.length !== bufferB.length) return false;
  return crypto.timingSafeEqual(bufferA, bufferB);
}

function getExpectedSessionToken(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!password || !secret) return null;
  return crypto.createHash("sha256").update(`${password}:${secret}`).digest("hex");
}

export function verifyAdminPassword(candidate: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  return timingSafeStringEqual(candidate, password);
}

export function createSessionToken(): string | null {
  return getExpectedSessionToken();
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  const expected = getExpectedSessionToken();
  if (!expected || !token) return false;
  return timingSafeStringEqual(token, expected);
}
