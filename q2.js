const { JSDOM } = require("jsdom");
const { document } = new JSDOM(`
  <div id="root" class='a'>
      <div class='b' id='b-1'>
          <div class='a' id='a-2'>
               <div class='d' id='d-1'></div>
          </div>
          <div class='c' id='c-1'>
              <div class='a' id='a-3'>
                   <div class='d' id='d-2'></div>
              </div>
          </div>
      </div>
  </div>
`).window;

/**
 * Return all DOM elements with the target class name.
 * ex)
 * const root = document.querySelector('#root');
 * getByClassName(root, 'a') -> [<div id="root" class='a'>, <div class='a' id='a-2'>, <div class='a' id='a-3'>]
 *
 * @param root DOMElement: start the search from this DOM element
 * @param className string: target class name
 * @return Array<DOMElement>: all DOM elements that have the target classname
 */
function getByClassName(root, className) {}
