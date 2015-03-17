var $container = $('#container');
// init
$container.packery({
  itemSelector: '.item',
  gutter: 10
});

var $container = $('#container').packery({
  columnWidth: 80,
  rowHeight: 80
});

$container.find('.blog').each( function( i, itemElem ) {
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( itemElem );
  // bind Draggabilly events to Packery
  $container.packery( 'bindDraggabillyEvents', draggie );
});