import * as params from '@params'; /// import from Hugo
import { scrollOffset } from "./modules";

( function(){

    console.log( "default js loaded" );

    const $scrollOffset = 7;

    let $scrollTop = document.documentElement.scrollTop;

    let getScrollOffset = () => { return ( window.innerHeight - ( window.innerHeight / $scrollOffset ) ); }
    let getScrollTargetPos = ( $target ) => { return ( $target.getBoundingClientRect().y + $scrollTop ) - getScrollOffset(); }
    let update = () => {
        console.log( "update" );
        console.log( getScrollOffset() );
    }

    window.addEventListener( 'scroll', update, false );
    window.addEventListener( "resize", update, false );

}() );