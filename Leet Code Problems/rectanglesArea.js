/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(r1BottomLeftX, r1BottomLeftY, r1TopRightX, r1TopRightY, r2BottomLeftX, r2BottomLeftY, r2TopRightX, r2TopRightY) {
  var totalArea, r1Area, r2Area;

  function calculateOverlappingArea(){
    var overlapWidth = Math.max(0, Math.min(r1TopRightX, r2TopRightX) - Math.max(r1BottomLeftX, r2BottomLeftX));
    var overlapHeight = Math.max(0, Math.min(r1TopRightY, r2TopRightY) - Math.max(r1BottomLeftY, r2BottomLeftY));
    return overlapWidth*overlapHeight
  }

  r1Area = (r1TopRightX - r1BottomLeftX) * (r1TopRightY - r1BottomLeftY);
  r2Area = (r2TopRightX - r2BottomLeftX) * (r2TopRightY - r2BottomLeftY);
  totalArea = r1Area + r2Area;
  totalArea -= calculateOverlappingArea();

  return totalArea;
};
