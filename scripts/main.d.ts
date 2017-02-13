declare module "modules/testModule" {
    import "jquery";
    export default class TestModule {
        init(): void;
    }
}
declare module "modules/a" {
    import "jquery";
    export default class B {
        init(): void;
    }
}
declare module "main" {
    import "jquery";
}
