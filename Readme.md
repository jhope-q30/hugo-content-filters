# PageFind

pass null for all search results tied to filter

[github link](https://jhope-q30.github.io/hugo-content-filters/)


{{- range $k, $v := site.Taxonomies }}
        <p>
            <span></span>:
            <br>
            {{- range $currentPage.GetTerms $k }}
            <a href="{{ .RelPermalink }}" data-pagefind-filter="{{ $k }}" data-pagefind-meta="options:{title:example, url:/google.ca}">{{ .Title }}</a>,
            {{- end }}
        </p>
        {{- end }}
        {
          "@context": "https://schema.org",
          "@type": "Taxonomy",
          "taxonomies": {
            {{- range $k, $v := site.Taxonomies }}
            {{- range $currentPage.GetTerms $k }}
            
            {{- end }}
            {{- end }}
            "@type": "{{ strings.FirstUpper $k }}",
            "name": "John Doe"
          }
        }

        "tags": [
                    {{- range $currentPage.GetTerms $k }}
                    {
                        "title": {{ .Title | safeHTML }},
                        "url": {{ .RelPermalink }},
                    },
                    {{- end }}
                ],


{{- with site.Taxonomies.categories }}
<h2>Categories</h2>
<p>
{{- range . }}
{{ with .Page }}
<a href="{{ .RelPermalink }}">{{ .Name | safeHTML }}</a>, 
{{ end }}
{{- end }}
</p>

{{- end }}

<script>
const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Example data
const itemsPerPage = 10;
let currentPage = 1;

function displayPage(pageNumber) {
    currentPage = pageNumber;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    const currentItems = data.slice(startIndex, endIndex);

    // Render currentItems to your HTML element (e.g., a list)
    const container = document.getElementById('item-container');
    container.innerHTML = ''; // Clear previous items
    currentItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        container.appendChild(li);
    });

    updatePaginationControls();
}

function updatePaginationControls() {

  
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = ''; // Clear previous controls

    // Add Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => displayPage(currentPage - 1));
    paginationControls.appendChild(prevButton);

    // Add page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => displayPage(i));
        paginationControls.appendChild(pageButton);
    }

    // Add Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => displayPage(currentPage + 1));
    paginationControls.appendChild(nextButton);
}

// Initial display
displayPage(1);
</script>



<script>/*
( async function(){

    const pagefind = await import( "/pagefind/pagefind.js" );
    const results = document.getElementById( "results" );
    const keyword = document.getElementById( "keyword" );
    const submit = document.getElementById( "submit" );
    const form = document.getElementById( "form" );
    const selectCategory = document.getElementById( "category" );

    if( results ) {

        pagefind.init();

        const filters = await pagefind.filters();
        const search = await pagefind.search( null, { filters: { type: "blog" } } );
        const searchResults = await Promise.all( search.results.map( r => r.data() ) );

        submit.addEventListener( 'click', async ( e ) => {

            const searchTerm = ( keyword.value != "" ) ? keyword.value : null;
            const search = await pagefind.search( searchTerm, { filters: { categories: selectCategory.value } } );
            const searchResults = await Promise.all( search.results.map( r => r.data() ) );

            let output = "";
            Array.prototype.forEach.call( searchResults, ( searchResult, i ) => {
                const taxonomy = JSON.parse( searchResult.meta.taxonomy );
                output += `<div>
                    <hr>
                    <h4><a href="${searchResult.url}">${searchResult.meta.title}</a></h4>`;
                output += searchResult.excerpt;
                output += `<p>`;
                output += `<strong>Date: </strong>${searchResult.meta.date}`;
                Array.prototype.forEach.call( taxonomy, ( term, q ) => {
                    output += `<br>`;
                    output += `<strong>${term["@taxonomy"]}</strong>:`;
                    Array.prototype.forEach.call( term.tags, ( tag, p ) => {
                        output += `<a href="${tag.url}">${tag.title}</a>, `;
                    });
                });
                output += `<br></p>&nbsp;`;
                output += `</div>`;
            });
            results.innerHTML = "";
            results.innerHTML = output;

        });

        let output = "";
        Array.prototype.forEach.call( searchResults, ( searchResult, i ) => {
            const taxonomy = JSON.parse( searchResult.meta.taxonomy );
            output += `<div>
                <hr>
                <h4><a href="${searchResult.url}">${searchResult.meta.title}</a></h4>`;
            output += searchResult.meta.description;
            output += `<p>`;
            output += `<strong>Date: </strong>${searchResult.meta.date}`;
            Array.prototype.forEach.call( taxonomy, ( term, q ) => {
                output += `<br>`;
                output += `<strong>${term["@taxonomy"]}</strong>:`;
                Array.prototype.forEach.call( term.tags, ( tag, p ) => {
                    output += `<a href="${tag.url}">${tag.title}</a>, `;
                });
            });
            output += `<br></p>&nbsp;`;
            output += `</div>`;
		});
        results.innerHTML = "";
        results.innerHTML = output;

    }

}() );*/
</script>




<ul class="pagination pagination-default">
      <li class="page-item disabled">
        <a aria-disabled="true" aria-label="First" class="page-link" role="button" tabindex="-1"><span aria-hidden="true">««</span></a>
      </li>
      <li class="page-item disabled">
        <a aria-disabled="true" aria-label="Previous" class="page-link" role="button" tabindex="-1"><span aria-hidden="true">«</span></a>
      </li>
      <li class="page-item active">
        <a aria-current="page" aria-label="Page 1" class="page-link" role="button">1</a>
      </li>
      <li class="page-item">
        <a href="/categories/hugo/page/2/" aria-label="Page 2" class="page-link" role="button">2</a>
      </li>
      <li class="page-item">
        <a href="/categories/hugo/page/3/" aria-label="Page 3" class="page-link" role="button">3</a>
      </li>
      <li class="page-item">
        <a href="/categories/hugo/page/4/" aria-label="Page 4" class="page-link" role="button">4</a>
      </li>
      <li class="page-item">
        <a href="/categories/hugo/page/2/" aria-label="Next" class="page-link" role="button"><span aria-hidden="true">»</span></a>
      </li>
      <li class="page-item">
        <a href="/categories/hugo/page/4/" aria-label="Last" class="page-link" role="button"><span aria-hidden="true">»»</span></a>
      </li>
    </ul>

    "command": "hugo --buildDrafts --cleanDestinationDir; npx -y pageFind --site public;",