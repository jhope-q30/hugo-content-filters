const scrollOffset = 7;

let getScrollOffset = () => { return ( window.innerHeight - ( window.innerHeight / scrollOffset ) ); }

export { scrollOffset, getScrollOffset };