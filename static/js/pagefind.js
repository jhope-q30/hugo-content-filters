const outputResult = ( $obj ) => {
    let output = "";
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

}

/** pageFind */
( async function(){

    const $results = document.getElementById( 'results' );
    const $submit = document.getElementById( 'submit' );
    const $section = document.querySelector( 'meta[name="section"]' );

    if( $results && $submit && $section ){

        const $pagefind = await import( "/pagefind/pagefind.js" );
        $pagefind.init();
        await $pagefind.filters();

        /** init search ( by page type filter ) */
        const $search = await $pagefind.search( null, { filters: { type: String( $section.getAttribute( 'content' ) ) } } );
        const $searchResults = await Promise.all( $search.results.map( $r => $r.data() ) );

        /** init submit */
        $submit.addEventListener( 'click', async ( e ) => {

            const $keyword = document.getElementById( 'keyword' );
            const $category = document.getElementById( 'category' );

            const $searchTerm = ( $keyword.value != "" ) ? $keyword.value : null;
            const $searchCategory = ( $category.value != "null" ) ? $category.value : null;

            if( $searchTerm != null && $searchCategory != null ){

                const $search = await $pagefind.search( $searchTerm, { filters: { categories: $searchCategory } } );
                const $searchResults = await Promise.all( $search.results.map( r => r.data() ) );

                /** output to results */
                outputPaginatedResults( $searchResults );

            }

        });

        /** output to results */
        outputPaginatedResults( $searchResults );
        
    }

}() );