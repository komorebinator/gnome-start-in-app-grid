import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

let ranOnce = false;

export default class StartInAppGridExtension extends Extension {
    enable() {
        if (ranOnce)
            return;

        this._overviewShownId = Main.overview.connect("shown", () => {
            if (ranOnce)
                return;

            ranOnce = true;
            Main.overview.showApps();

            if (this._overviewShownId) {
                Main.overview.disconnect(this._overviewShownId);
                this._overviewShownId = 0;
            }
        });

        if (Main.overview.visible && !ranOnce) {
            ranOnce = true;
            Main.overview.showApps();

            if (this._overviewShownId) {
                Main.overview.disconnect(this._overviewShownId);
                this._overviewShownId = 0;
            }
        }
    }

    disable() {
        if (this._overviewShownId) {
            Main.overview.disconnect(this._overviewShownId);
            this._overviewShownId = 0;
        }
    }
}
