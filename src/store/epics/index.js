import * as globals from "./globals";
import trivials from "./trivials";

const epics = [...trivials, ...Object.values(globals)];

export default epics;
