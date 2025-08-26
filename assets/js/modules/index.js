import * as params from '@params'; /// import from Hugo

const scrollOffset = 7;
const ani = ( typeof params.ani !== 'undefined' ) ? params.ani : 'ani';

let getScrollOffset = () => { return ( window.innerHeight - ( window.innerHeight / scrollOffset ) ); }

export { scrollOffset, getScrollOffset, ani };