import FeatureToggle from "../../scripts/FeatureToggleDecorator";
import {always, environment, version, compose, domain} from "../../scripts/Predicates";

@FeatureToggle(always)
export class AlwaysValid {

}

@FeatureToggle(version("2.0.0"))
export class VersionToggle {

}

@FeatureToggle(environment(["dev", "test"]))
export class EnvToggle {

}

@FeatureToggle(domain(/brand/))
export class DomainToggle {

}

export class NotDecoratedToggle {

}

@FeatureToggle(compose(environment(["dev", "test"]), version("2.0.0")))
export class MixedToggle {

}