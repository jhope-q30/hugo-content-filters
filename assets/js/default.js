import * as params from '@params'; /// import from Hugo
import { scrollOffset, getScrollOffset } from "./modules";
import { ani } from "./modules/ani";

( function(){

    console.log( "default js loaded", scrollOffset );

    let update = () => {
        console.log( "update", ani );
        console.log( getScrollOffset() );
    }

    window.addEventListener( 'scroll', update, false );
    window.addEventListener( "resize", update, false );

}() );