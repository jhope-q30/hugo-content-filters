const pagerSize = $pagerSize ? $pagerSize : 10;
let pagerIndex = 1;
let searchResults = [];
const outputResult = ( $obj ) => {
    let output = ``;
    let taxonomy = $obj.meta.taxonomy ? JSON.parse( $obj.meta.taxonomy ) : [];
    output += `<div>
        <hr>
        <h4><a href="${$obj.url}">${$obj.meta.title}</a></h4>`;
    output += $obj.excerpt;
    output += `<p>`;
    output += `<strong>Date: </strong>${$obj.meta.date}`;
    Array.prototype.forEach.call( taxonomy, ( term, q ) => {
        output += `<br>`;
        output += `<strong>${term["@taxonomy"]}</strong>:`;
        Array.prototype.forEach.call( term.tags, ( tag, p ) => {
            output += `<a href="${tag.url}">${tag.title}</a>, `;
        });
    });
    output += `<br></p>&nbsp;</div>`;
    return output;
}
const outputPaginatedResults = ( $results ) => {
    let $pagerItems = $results;
    let $pagination = ``;
    if( $results.length > pagerSize ){
        const $startIndex = ( pagerIndex - 1 ) * pagerSize;
        const $endIndex = Math.min( $startIndex + pagerSize, $results.length );
        $pagerItems = $results.slice( $startIndex, $endIndex );
        $pagination = outputPaginationControls( $results );
    }
    let output = ``;
    Array.prototype.forEach.call( $pagerItems, ( $result, i ) => {
        output += outputResult( $result );
    });
    return output + $pagination;
}
const outputPaginationControls = ( $results ) => {
    const $totalPagers = Math.ceil( $results.length / pagerSize );
    let output = `<ul class="pagination">`;
    /** previous */
    if( pagerIndex === 1 ){
        output += `<li class="page-item disabled">
            <a aria-disabled="true" aria-label="Previous" class="page-link" role="button" tabindex="-1"><span aria-hidden="true">Prev</span></a>
        </li>`;
    } else {
        output += `<li class="page-item">
            <a href="javascript:getPager(${(pagerIndex - 1)})" aria-label="Previous" class="page-link" role="button"><span aria-hidden="true">Prev</span></a>
        </li>`;
    }
    for( let i = 1; i <= $totalPagers; i++ ) {
        if( i === pagerIndex ){
            output += `<li class="page-item active">
                <a aria-current="page" aria-label="Page ${i}" class="page-link" role="button">${i}</a>
            </li>`;
        } else {
            output += `<li class="page-item">
                <a href="javascript:getPager(${i})" aria-label="Page ${i}" class="page-link" role="button">${i}</a>
            </li>`;
        }
    }
    /** next */
    if( pagerIndex === $totalPagers ){
        output += `<li class="page-item disabled">
            <a aria-disabled="true" aria-label="Next" class="page-link" role="button" tabindex="-1"><span aria-hidden="true">Next</span></a>
        </li>`;
    } else {
        output += `<li class="page-item">
            <a href="javascript:getPager(${(pagerIndex + 1)})" aria-label="Next" class="page-link" role="button"><span aria-hidden="true">Next</span></a>
        </li>`;
    }
    output += `</ul>`;
    return output;
}
const getPager = ( pager ) => {
    const $results = document.getElementById( 'results' );
    if( $results && searchResults.length ){
        pagerIndex = pager;
        $results.innerHTML = "";
        $results.innerHTML = outputPaginatedResults( searchResults );
        console.log( 'this is pager: ' + pager );
    }
}
/** pageFind */
( async function(){

    const $results = document.getElementById( 'results' );
    const $submit = document.getElementById( 'submit' );
    const $section = document.querySelector( 'meta[name="section"]' );

    if( $results && $submit && $section ){

        /** init pagefind */
        const $pagefind = await import( "/pagefind/pagefind.js" );
        $pagefind.init();
        await $pagefind.filters();

        /** init search ( by section filter ) */
        const $search = await $pagefind.search( null, { filters: { section: String( $section.getAttribute( 'content' ) ) } } );
        await Promise.all( $search.results.map( $r => $r.data() ) ).then( ( $values ) => {
            /** output to results */
            searchResults = $values;
            $results.innerHTML = "";
            $results.innerHTML = outputPaginatedResults( $values );
        });

        /** init submit */
        $submit.addEventListener( 'click', async ( e ) => {

            const $keyword = document.getElementById( 'keyword' );
            const $category = document.getElementById( 'category' );
            const $searchTerm = ( $keyword.value != "" ) ? $keyword.value : null;
            const $searchCategory = ( $category.value != "null" ) ? $category.value : null;

            const $search = await $pagefind.search( $searchTerm, { filters: { section: String( $section.getAttribute( 'content' ) ), categories: $searchCategory } } );
            await Promise.all( $search.results.map( r => r.data() ) ).then( ( $values ) => {
                /** output to results */
                searchResults = $values;
                pagerIndex = 1;
                $results.innerHTML = "";
                $results.innerHTML = outputPaginatedResults( $values );
            });

        });
        
    }

}() );