
export interface IRickModel {
    nav: INav;
    hero: IHero;
    main: IMain;
    footer: IFooter;
}

export interface INav {
    logo: Iimg;
}

export interface Iimg {
    src: string;
    alt: string;
}

export interface IHero {
    title: string;
    portada: Iimg;
}

export interface IMain {
    title: string;
}

export interface IFooter {
    copyright: string;
}