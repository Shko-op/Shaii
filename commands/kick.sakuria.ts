import { db } from "../classes/Database.sakuria";
import { IMessage } from "../types";

export default {
  name: "kick",
  description: "Kicks a user",
  requiresProcessing: false,
  execute: async (message: IMessage): Promise<string> => {
    const targetUser = message.mentions.members?.first();
    if (!targetUser) return "please meantion the user you wanna kick";
    if (!message.member?.permissions.has("KICK_MEMBERS")) return "you don't have perms cunt";

    // Kick him
    db.newKick(message.author.id, targetUser.id);

    // Get fucked
    return `Kicked user <@${targetUser.id}>`;
  },
};
