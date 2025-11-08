import { links } from "@/app/drizzle/schema";
import { db } from "../db";
import { eq, sql } from "drizzle-orm";
import { nanoid } from "nanoid";

export const resolvers = {
  Query: {
    async getLink(_: any, { shortCode }: { shortCode: string }) {
      const [link] = await db
        .select()
        .from(links)
        .where(eq(links.shortCode, shortCode));
      return link;
    },

    async getAnalytics(_: any, { shortCode }: { shortCode: string }) {
      const [link] = await db
        .select()
        .from(links)
        .where(eq(links.shortCode, shortCode));
      return link ? link.clicks : 0;
    },
  },

  Mutation: {
    async createShortLink(_: any, { originalUrl }: { originalUrl: string }) {
      const shortCode = nanoid(8);
      const [newlink] = await db
        .insert(links)
        .values({ originalUrl, shortCode })
        .returning();
      return newlink;
    },
    async incrementClicks(_: any, { shortCode }: { shortCode: string }) {
      const [link] = await db
        .update(links)
        .set({ clicks: sql`${links.clicks}+1` })
        .where(eq(links.shortCode, shortCode))
        .returning();
      return link;
    },
  },
};
