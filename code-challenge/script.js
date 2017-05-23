console.log('JS loaded');

var numberOfClicks = 0;

var onReady = function() {
  console.log( 'the doc is ready' );

  // click handler for create button
  $( '#create' ).on( 'click', function(){
    console.log( 'create on click' );
    // increment counter
    numberOfClicks++;
    var appendText = '<div class="color-div">';
    appendText += '<p>' + numberOfClicks + '</p>';
    appendText += '<button class="swap">swap</button>';
    appendText += '<button class="delete">delete</button>';
    appendText += '</div>';
    $( '#container' ).append( appendText );
  }); // end create on click

  //dynamically created button click by class
  $( '#container' ).on( 'click', '.swap', function(){
    console.log( 'swap on click' );
    // use $this to id on what button the user clicked
    var thisButton = $( this );
    // use .parent() to get the button's parent element
    var myParent = thisButton.parent();
    if ( myParent.css( 'background-color' ) === 'rgb(255, 0, 0)' ){
      console.log( 'i was ketchup' );
      // set parent element's background-color css to yellow
      myParent.css( 'background-color', 'yellow' );
    }
    else{
      console.log( 'i was mustard' );
      // set parent element's background-color css to yellow
      myParent.css( 'background-color', 'red' );
    }
    // most concise, but most confusing:
    // $( this ).parent().css( 'background-color', '#bad455' );
  }); // end swap class on click

  $( '#container' ).on( 'click', '.delete', function(){
    console.log( 'delete on click' );    // use $this to id on what button the user clicked
      // var thisButton = $( this );
      // // use .parent() to get the button's parent element
      // var myParent = thisButton.parent();
      // // remove parent
      // myParent.remove();
      $( this ).parent().remove();
  }); // end delete class on click
};

// When the DOM is loaded, our code in the onReady function will run.
$( document ).ready( onReady );
