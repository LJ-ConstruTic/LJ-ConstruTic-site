export interface IService {
    idx: number;
    id: string;
    imageUrl: string;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
    title?: Name;
    description?: Description;
    children?: Children[];
}

type Name = {
    tagId: string;
    idxTag: number;
    keyFrontView: string;
    tag: Tag;
};

type Children = {
    tagId: string;
    idx: number;
    keyFrontViewTag: string;
    tag: Tag;
};

type Description = {
    tagId: string;
    keyFrontView: string;
    tag: Tag;
};

type Tag =
    | {
          pt: string;
          umb: string;
          en: string;
          es: string;
      }
    | any;
