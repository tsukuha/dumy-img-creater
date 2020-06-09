declare module '*.scss' {
    interface SassClass {
        [SassClass: string]: string;
    }
    const SassClass: SassClass;
    export = SassClass;
}
