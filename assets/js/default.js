import * as params from '@params'; /// import from Hugo
import { scrollOffset, getScrollOffset, ani } from "./modules";

( function(){

    console.log( "default js loaded" );

    let update = () => {
        console.log( "update", ani );
        console.log( getScrollOffset() );
    }

    window.addEventListener( 'scroll', update, false );
    window.addEventListener( "resize", update, false );

}() );