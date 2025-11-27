import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

export default class StartInAppGridExtension extends Extension {
    enable() {
        Main.overview.showApps();
    }
}
