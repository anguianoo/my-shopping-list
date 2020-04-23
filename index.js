$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userTextElement = $(event.currentTarget).find('#shopping-list-entry');


        $('ul').append(
            `
            <li>
        <span class="shopping-item">${userTextElement.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li> 
            `
        );
        userTextElement.val("");
            
    });


   $('ul').on('click', 'li', function(event) {
    this.remove();
        


});
// toDos.find('.js-complete').addClass('complete');

    //$('ul').on('click', 'li', function(event) {
    //this.remove();
    // });

    //$('button.shopping-item-toggle').click(function(event) {

   // $('.shopping-list').find('.shopping-item').addClass('.shopping-item__checked')
//});

$("button.shopping-item-toggle").click(function(event) {
    $('.shopping-item').addClass('.shopping-item__checked');
});
   


})