export interface IHeaderLink extends IValuesMenuLink {
  isGetContent: boolean
  additionalMenu: IValuesMenuLink[] | null;
  additionalFooterMenu: IValuesMenuLink[] | null;
}

export interface IValuesMenuLink {
  id: string;
  name: string;
  link: string | null;
}
