export interface IProduct {
    id: string;
    idx: number;
    title?: Title;
    description?: {
        tag: { pt: string; umb: string; en: string; es: string } | any;
    };
    imageUrl: string;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
    children?: any;
}

type Title = {
    tagId: string;
    idxTag: number;
    keyFrontView: string;
    tag:
        | {
              pt: string;
              umb: string;
              en: string;
              es: string;
          }
        | any;
};
