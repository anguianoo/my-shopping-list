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


   $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
   $(event.currentTarget).closest('li').remove();
        


});



$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
$(event.currentTarget).closest('li').find('.shopping-item').addClass('shopping-item__checked');

})
   


})