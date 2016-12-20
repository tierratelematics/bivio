export function FeatureToggle(predicate: CheckPredicate);

export interface CheckPredicate {
    (): boolean
}

export interface IFeatureChecker {
    check(feature: any): boolean;
    canCheck(feature: any): boolean;
}

export class FeatureChecker implements IFeatureChecker {
    check(feature: any): boolean;

    canCheck(feature: any): boolean;
}

interface PredicatesStatic {
    always(): boolean;
    never(): boolean;
    environment(environments: string[]): () => boolean;
    version(version: string): () => boolean;
    compose(p1: CheckPredicate, p2: CheckPredicate): () => boolean;
    negate(predicate: CheckPredicate): () => boolean;
}

export var Predicates: PredicatesStatic;