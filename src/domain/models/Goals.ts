export interface IGoal {
    idx: number;
    name: Name;
    description: Description;
    image: string;
    idTag: string;
}

type Description = {
    tagId: string;
    keyFrontView: string;
    tag: {
        pt: string;
        umb: string;
        en: string;
        es: string;
    };
};

type Name = {
    tagId: string;
    keyFrontView: string;
    tag: {
        pt: string;
        umb: string;
        en: string;
        es: string;
    };
};
