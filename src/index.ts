import { getAppPath } from "@util/paths";

import Module from "module";
import path from "path";
import fs from "fs";

export const inject = async (channel: "canary" | "ptb" | "stable" = "stable", directory: string, options: any = {}) => {
    const { name, events } = options;

    const proposedPath = getAppPath(channel);
    events?.onDiscovered?.(proposedPath);

    const asarPath = path.join(proposedPath, "app.asar");

    if (!fs.existsSync(asarPath)) {
        events?.onError?.("Could not find app.asar.");
        throw new Error("No Discord asar found.");
    }

    fs.renameSync(asarPath, asarPath.replace(/app\.asar$/, "original_app.asar"));
    events?.onRenamed?.(asarPath);

    const newIndexContent = `require("${directory}");`;
    const newPackageContent = `{"name":"${name || "discord"}","main":"index.js"}`;

    fs.writeFileSync(path.join(proposedPath, "app", "index.js"), newIndexContent);
    fs.writeFileSync(path.join(proposedPath, "app", "package.json"), newPackageContent);
    events?.onInjected?.(proposedPath);

    return proposedPath;
};

export const asarName = "original_app.asar";

export const load = (app) => {
    const { setAppPath } = app;

    const newAsarPath = path.join(app.getAppPath(), "..", "original_app.asar");
    const oldAsarPath = path.join(app.getAppPath(), "..", "app.asar");

    const base = fs.existsSync(newAsarPath) ? newAsarPath : oldAsarPath;

    const pkj = JSON.parse(fs.readFileSync(path.join(base, "package.json"), "utf8"));

    setAppPath(base);
    app.name = pkj.name;

    // @ts-ignore
    Module._load(path.join(base, pkj.main), null, true);
};
