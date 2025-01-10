import DataUriParser from "datauri/parser.js"

import path from "path";
import { exitCode } from "process";


const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;