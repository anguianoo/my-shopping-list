$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userTextElement = $(event.currentTarget).find('#shopping-list-entry');


        $('ul').append(
            `
            <li>
        <span class="shopping-item makeGreen">${userTextElement.val()}</span>
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

$(this).closest('li').find('.shopping-item').removeClass('makeGreen').toggleClass('makeRed').toggleClass('shopping-item__checked');

})
   


})