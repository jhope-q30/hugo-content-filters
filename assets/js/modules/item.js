let itemHTML = ( url, title, description ) => {
    return `<div>
    <hr>
    <h4><a href="${url}">${title}</a></h4>
    ${description}
    <p>
    <strong>Date:</strong> Aug 1, 2025<br>
    <strong>Categories</strong>:
    <a href="/categories/hugo/">Hugo</a>,
    <a href="/categories/tutorial/">Tutorial</a>,
    <a href="/categories/category-a/">Category A</a>,
    <br>
    <strong>Tags</strong>:
    <a href="/tags/static-site/">Static Site</a>,
    <a href="/tags/beginner/">Beginner</a>,
    <a href="/tags/setup/">Setup</a>,
    <br>
    </p>
    &nbsp;
    </div>`;
}

/*

<ul id="myList"></ul>

<script>
const fruits = ["Apple", "Banana", "Orange", "Grape"];
const listElement = document.getElementById("myList");

// Map the fruits array to an array of <li> elements
const listItems = fruits.map(fruit => `<li>${fruit}</li>`);

// Join the array of <li> elements into a single string and set it as innerHTML
listElement.innerHTML = listItems.join('');
</script>

</li>

*/