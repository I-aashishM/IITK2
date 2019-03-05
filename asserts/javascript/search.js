jQuery('.bg-img').click(function(){
  jQuery('.site-search').addClass('open');
})

jQuery('.fa12').click(function(){
  jQuery('.site-search').removeClass('open');
}).children().click(function(e) {
  return false;
});