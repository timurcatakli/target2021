const { document: document2 } = new JSDOM(`
    <div id="root2">
      <div class="a" id="a-1">
        <div class="b" id="b-1">
          <div class="c" id="c-1"></div>
          <div class="c" id="c-2"></div>
        </div>
      </div>
    </div>
`).window;

// Helper function to make output easier to read
const getIds = (elements = []) => Array.from(elements).map((x) => x.id);

/**
 * Return all DOM elements who are _leaf_nodes_ that satisfy the hierarchy.
 * Hierarchy is a string of class names separated by `>`, akin to
 * CSS CHILD SELECTORS.
 *
 * ex. getByClassnameHierarchy(#root, 'a>b>c') -> [<div class="c" id="c-1"></div>,<div class="c" id="c-2"></div> ]
 * "give me all the elements with class name 'c', who have a strict parent with
 * class name 'b', who have a strict parent with class name 'a'"
 *
 * @param root DOMElement: start the search from this DOM element
 * @param hierarchy string: `>`-delimited string of classnames
 * @return Array<DOMElement>: all DOM elements that satisfy the target hierarchy
 */

function getByClassnameHierarchy(root, hierarchy) {}

const root2 = document2.getElementById("root2");

// basic case:
console.log("actual: ", getIds(getByClassnameHierarchy(root2, "a>b>c"))); // Similar to QuerySelectorAll
console.log(`a>b>c expected:`, `['c-1', 'c-2']`, "\n");

// console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b')));
// console.log(`a>b expected:` , `['b-1']`, '\n');

// // order matters!:
// console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>a')));
// console.log(`b>a expected:` , `[]`, '\n');

// // gaps in the selector shouldn't return anything:
// console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>c')));
// console.log(`a>c expected:` , `[]`, '\n');

// console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'd>a>b>c')));
// console.log(`d>a>b>c expected:` , `[]`, '\n');

// console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'c')));
// console.log(`c expected:` , `['c-1', 'c-2']`, '\n');
