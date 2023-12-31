export class ObjFile {

}

function copy(from, to, index, count) {
    for (var i = 0; i < count; i++) {
        to.push(from[index + i]);
    }
}

/**
 * This function is horribly inefficient, but I'm literally making it cuz I couldn't find anything simple enough
 */
export function parseObjFile(src) {
    var tmpV: number[] = [];
    var tmpN: number[] = [];
    var tmpT: number[] = [];

    var uniqueVertTracker: Map<string, number> = new Map<string, number>();
    
    var v: number[] = [];
    var n: number[] = [];
    var t: number[] = [];
    var i: number[] = [];

    src.split('\n').forEach(line => {
        if (line.length > 0) {
            var components = line.split(' ');
            switch (components[0]) {
                case "v":
                    tmpV.push(parseFloat(components[1]), parseFloat(components[2]), parseFloat(components[3]));
                    break;
                case "vn":
                    tmpN.push(parseFloat(components[1]), parseFloat(components[2]), parseFloat(components[3]));
                    break;
                case "vt":
                    tmpT.push(parseFloat(components[1]), parseFloat(components[2]));
                    break;
                case "f":
                    for (var j = 1; j < components.length; j++) {
                        if (!(components[j] in uniqueVertTracker)) {
                            var index = Object.keys(uniqueVertTracker).length;
                            const [vIndex, tIndex, nIndex] = components[j].split('/');
                            copy(tmpV, v, ((parseInt(vIndex) - 1) * 3), 3);
                            copy(tmpT, t, ((parseInt(tIndex) - 1) * 2), 2);
                            copy(tmpN, n, ((parseInt(nIndex) - 1) * 3), 3);
                            uniqueVertTracker[components[j]] = index;
                        }
                        i.push(uniqueVertTracker[components[j]]);
                    }
                default:
                    break;
            }
        }
    });
}

export function ParseObjFileFromString(src: string): ObjFile {

    var currentTokenType: ObjTokenType | null = null;
    var tokenContents: string = "";

    

    return new ObjFile();
}