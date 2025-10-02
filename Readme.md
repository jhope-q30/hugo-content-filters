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