import { HTML } from "imperative-html/dist/esm/elements-strict";

export class SongPlayerLayout {
    public static layoutLookup: Map<number, SongPlayerLayout> = new Map<number, SongPlayerLayout>();
    private static readonly _spLayoutMap: {[K: string]: string} = { 
        "classic": `
        .songPlayerContainer {
            display:grid; 
            grid-template-areas: 'visualizer visualizer' 'control-center control-center'; 
            grid-template-rows: 92.6vh 7.4vh; 
            grid-template-columns: minmax(0px,0px);
        }
        div.visualizer {
            transform: scale(1);
            }
        `,
        "top": `
        .songPlayerContainer {
            display:grid; 
            grid-template-areas: 'control-center control-center' 'visualizer visualizer'; 
            grid-template-rows: 7.4vh 92.6vh; 
            grid-template-columns: minmax(0px,0px);
        }
        div.visualizer {
            transform: scale(1);
            }
        `,
        "shitbox4": `
        .songPlayerContainer {
            display:grid; 
            grid-template-areas: 'visualizer visualizer' 'control-center control-center'; 
            grid-template-rows: 92.6vh 7.4vh; 
            grid-template-columns: minmax(0px,0px);
        }
        div.visualizer {
            transform: skew(30deg,20deg) scale(0.5);
            }
        `,
        "boxbeep": `
        .songPlayerContainer {
            display:grid; 
            grid-template-areas: 'visualizer visualizer' 'control-center control-center'; 
            grid-template-rows: 92.6vh 7.4vh; 
            grid-template-columns: minmax(0px,0px);
        }
        div.visualizer {
            transform: scale(-1);
            }
        `,
    }

    private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({type: "text/css"}));

    public static setLayout(layout: string): void {
		this._styleElement.textContent = this._spLayoutMap[layout];
	}
}