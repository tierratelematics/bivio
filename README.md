# bivio

Bivio is a [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) library to be used ideally with Typescript. 
Powered by the Metadata Reflection API, it can be used to turn on/off your app components based on a predicate.

## Installation

`
$ npm install bivio
`

## Usage

Decorate the component you want to turn on/off with a predicate.

```typescript
import {Predicates} from "bivio"

@Predicates.version("2.0.0")
class MyModule {
    
}
```

Check if the predicate is valid when registering your component.

```typescript

import {FeatureChecker} from "bivio";

let featureChecker = new FeatureChecker();
if (this.featureChecker.check(MyModule)) {
    //Class is valid, turn it on
} else {
    //Class is not valid, turn if off
}
```

### Predicates

[Here](https://github.com/tierratelematics/bivio/blob/develop/scripts/Predicates.ts) you can find all the predicates available, or you can write your own (it's just a function that returns a boolean).

## License

Copyright 2016 Tierra SpA

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
