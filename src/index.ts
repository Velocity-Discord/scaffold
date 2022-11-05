import { getAppPath } from "@util/paths";

import Module from "module";
import path from "path";
import fs from "fs";

const inject = async (channel: "canary" | "ptb" | "stable" = "stable", directory: string, options: any = {}) => {
    const { name, events } = options;

    const proposedPath = getAppPath(channel);
    events?.onDiscovered?.(proposedPath);

    const asarPath = path.join(proposedPath, "app.asar");

    if (!fs.existsSync(asarPath) && !fs.existsSync(path.join(proposedPath, "original_app.asar"))) {
        events?.onError?.("Could not find app.asar.");
        throw new Error("No Discord asar found.");
    }

    if (!fs.existsSync(path.join(proposedPath, "original_app.asar"))) {
        fs.renameSync(asarPath, asarPath.replace(/app\.asar$/, "original_app.asar"));
        events?.onRenamed?.(asarPath);
    }

    const newIndexContent = `require("${directory}");`;
    const newPackageContent = `{"name":"${name || "discord"}","main":"index.js"}`;

    if (!fs.existsSync(path.join(proposedPath, "app"))) {
        fs.mkdirSync(path.join(proposedPath, "app"));
    }

    fs.writeFileSync(path.join(proposedPath, "app", "index.js"), newIndexContent);
    fs.writeFileSync(path.join(proposedPath, "app", "package.json"), newPackageContent);
    events?.onInjected?.(proposedPath);

    return proposedPath;
};

const asarName = "original_app.asar";

const load = (app) => {
    const newAsarPath = path.join(app.getAppPath(), "..", "original_app.asar");
    const oldAsarPath = path.join(app.getAppPath(), "..", "app.asar");

    const base = fs.existsSync(newAsarPath) ? newAsarPath : oldAsarPath;

    const pkj = JSON.parse(fs.readFileSync(path.join(base, "package.json"), "utf8"));

    app.setAppPath(base);
    app.name = pkj.name;

    // @ts-ignore
    Module._load(path.join(base, pkj.main), null, true);
};

export { inject, load, asarName };
