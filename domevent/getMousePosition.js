/**
 * @fileoverview Get mouse position from mouse event
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isArray = require('../type/isArray');
var getRect = require('../domutil/getRect');

/**
 * Get mouse position from mouse event
 *
 * If supplied relatveElement parameter then return relative position based on
 *  element
 * @param {(MouseEvent|object|number[])} position - mouse position object
 * @param {HTMLElement} relativeElement HTML element that calculate relative
 *  position
 * @returns {number[]} mouse position
 * @name getMousePosition
 * @memberof tui.dom
 * @function
 */
function getMousePosition(position, relativeElement) {
    var positionArray = isArray(position);
    var clientX = positionArray ? position[0] : position.clientX;
    var clientY = positionArray ? position[1] : position.clientY;
    var rect;

    if (!relativeElement) {
        return [clientX, clientY];
    }

    rect = getRect(relativeElement);

    return [
        clientX - rect.left - relativeElement.clientLeft,
        clientY - rect.top - relativeElement.clientTop
    ];
}

module.exports = getMousePosition;
