export interface ValidationMessages {
    [controlName: string]: {
        [errorKey: string]: string;
    };
}
