declare module '*.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    // eslint-disable-next-line no-undef
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__: boolean;
