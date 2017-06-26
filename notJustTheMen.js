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

function substitute(depth, pronoun) {
  if (depth == 0) {
    return `the ${pronoun}`;
  } else {
    let women = substitute(depth - 1, womenify(pronoun));
    let children = substitute(depth - 1, childrenify(pronoun));
    return `not just the ${pronoun} but ${women} and ${children} too`;
  }
}

function womenify(pronoun) {
  let array = pronoun.split(' ');
  array[array.length - 1] = `wo${array[array.length - 1]}`;
  return array.join(' ');
}

function childrenify(pronoun) {
  let array = pronoun.split(' ');

  if (array[array.length - 1].includes('men')) {
    array[array.length - 1] = array[array.length - 1].replace('men', 'children');
  } else {
    array[array.length - 1] = `${array[array.length - 1]}'s children`;
  }

  return array.join(' ');
}

console.log(substitute(process.argv[2], 'men'));
