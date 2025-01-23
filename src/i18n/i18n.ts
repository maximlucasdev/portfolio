import { language } from "../Signals"
import en from "./en.json";
import fr from "./fr.json";

// Had to @ts-ignore because of key types
// will probably do that one day

const t = (key: string) => {
    // @ts-ignore
    if (language.value === 'fr') return fr[key];
    // @ts-ignore
    return en[key] || key;
}

export default t