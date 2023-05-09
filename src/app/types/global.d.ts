// в данной папке - глобально декларируемые расширения файлов, которые создаются вручную, т к по умолчанию с ними typescript не умеет  работать

declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}