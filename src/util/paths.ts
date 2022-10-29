import path from "path";
import fs from "fs";

import { knownPaths } from "./linux";

const { platform } = process;

export const getAppPath = (channel: "canary" | "ptb" | "stable" = "stable") => {
    let proposedPath: string;

    if (platform === "win32") {
        let hostVersion: string;

        switch (channel) {
            case "stable":
                proposedPath = path.join(process.env.LOCALAPPDATA, "Discord");
                break;
            case "ptb":
                proposedPath = path.join(process.env.LOCALAPPDATA, "DiscordPTB");
                break;
            case "canary":
                proposedPath = path.join(process.env.LOCALAPPDATA, "DiscordCanary");
        }

        if (!fs.existsSync(proposedPath)) {
            throw new Error("Could not find Discord installation.");
        }

        hostVersion = fs.readdirSync(proposedPath).filter((file) => file.startsWith("app-"))[0];

        proposedPath = path.join(proposedPath, hostVersion, "resources");
    } else if (platform === "darwin") {
        switch (channel) {
            case "stable":
                proposedPath = "/Applications/Discord.app/Contents/Resources/";
                break;
            case "ptb":
                proposedPath = "/Applications/Discord PTB.app/Contents/Resources/";
                break;
            case "canary":
                proposedPath = "/Applications/Discord Canary.app/Contents/Resources/";
                break;
        }

        if (!fs.existsSync(proposedPath)) {
            throw new Error("Could not find Discord installation.");
        }
    } else if (platform === "linux") {
        switch (channel) {
            case "stable":
                knownPaths.some((path) => {
                    if (fs.existsSync(path + "discord")) {
                        proposedPath = path + "discord";
                        return true;
                    }
                });
                break;
            case "ptb":
                knownPaths.some((path) => {
                    if (fs.existsSync(path + "discordptb")) {
                        proposedPath = path + "discordptb";
                        return true;
                    }
                });
                break;
            case "canary":
                knownPaths.some((path) => {
                    if (fs.existsSync(path + "discordcanary")) {
                        proposedPath = path + "discordcanary";
                        return true;
                    }
                });
                break;
        }

        if (!proposedPath) {
            throw new Error("Could not find Discord installation.");
        }
    }

    return proposedPath;
};
