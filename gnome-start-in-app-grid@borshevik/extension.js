import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

let ranOnce = false;

export default class StartInAppGridExtension extends Extension {
    enable() {
        if (ranOnce) return;
        Main.overview.hide();
        Main.overview.showApps();
        ranOnce = true;
    }
}