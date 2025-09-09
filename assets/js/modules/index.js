import * as params from '@params'; /// import from Hugo

const scrollOffset = 7;

let getScrollOffset = () => { return ( window.innerHeight - ( window.innerHeight / scrollOffset ) ); }

export { scrollOffset, getScrollOffset };