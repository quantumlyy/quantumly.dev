import { Language } from "./components/Repo";

export interface Repo {
    name: string;
    url: string;
    lang: Language;
    description: string;
}

export interface Config {
    discordId: string;
    repos: Repo[]
};

export const config: Config = {
    discordId: '126321762483830785',
    repos: [
    ]
};
