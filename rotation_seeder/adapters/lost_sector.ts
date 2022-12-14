import type { DestinyActivity } from "../types/DestinyActivity.ts";
import type { LostSector } from "../types/LostSector.ts";
import type { Modifier } from "../types/Modifier.ts";

export const lostSectorAdapter =
  (modifiers: Record<string, Modifier>) =>
  (activity: DestinyActivity): LostSector => ({
    id: activity.hash,
    image: `${Deno.env.get("BUNGIE_BASE_URL")}${activity.pgcrImage}`,
    modifiers: activity.modifiers.map((mod) =>
      modifiers[mod.activityModifierHash]
    ).filter((mod) => !!mod && !!mod.name),
    name: activity.originalDisplayProperties.name,
  });
