export interface IService {
    idx: number;
    id: number;
    urlImg: string;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
    name?: Name;
    description?: Description;
}

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

type Description = {
    tagId: string;
    keyFrontView: string;
    tag: Tag;
};

type Tag = {
    pt: string;
    umb: string;
    en: string;
    es: string;
};
