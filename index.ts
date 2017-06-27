// Copyright 2017 Eli Bradley
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Pronoun from "./Pronoun";
import Men from "./Men";
import Women from "./Women";
import Children from "./Children";

function substitute(depth: number, pronoun: Pronoun = new Men("men")): string {
    if (depth == 0) {
        return `the ${pronoun}`;
    } else {
        let women = substitute(depth - 1, new Women(pronoun));
        let children = substitute(depth - 1, new Children(pronoun));
        return `not just the ${pronoun} but ${women} and ${children} too`;
    }
}

console.log(substitute(Number(process.argv[2])));
