export interface MainDataInterface {
    output: string;
    theme: string;
    extTheme: string;
    serve: boolean;
    port: number;
    open: boolean;
    assetsFolder: string;
    documentationMainName: string;
    documentationMainDescription: string;
    base: string;
    hideGenerator: boolean;
    modules: any;
    readme: string;
    additionalPages: any;
    pipes: any;
    classes: any;
    interfaces: any;
    components: any;
    directives: any;
    injectables: any;
    miscellaneous: any;
    routes: any;
    tsconfig: string;
    toggleMenuItems: string[];
    includes: string;
    includesName: string;
    includesFolder: string;
    disableSourceCode: boolean;
    disableGraph: boolean;
    disableCoverage: boolean;
    disablePrivateOrInternalSupport: boolean;
    watch: boolean;
    mainGraph: string;
    coverageTest: boolean;
    coverageTestThreshold: number;
}
