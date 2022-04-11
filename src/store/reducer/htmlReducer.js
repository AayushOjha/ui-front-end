const reducer = (
  state = `<div class="topnav">
<a class="active" href="#home">Home</a>
<a href="#news">News</a>
<a href="#contact">Contact</a>
<a href="#about">About</a>
</div>
<div id='heroSection'> <div id='innerHeroSec'> <div class='blackBg'> </div> <!-- hero middle start --> <div id='headerMiddle'> <div id='midTop'> <p id='dynamicText'> It's time for new </p> <p id='staticText'> Adventures </p> </div> </div> <!-- hero footer start --> </div> </div>
`,
  action
) => {
  switch (action.type) {
    case 'edit':
      return state + action.payload;
    default:
      return state;
  }
};

export default reducer;
