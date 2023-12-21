import { ApI_URl } from "../urIs.js";

console.log(ApI_URl)

async function searchArticleFetch() {
    let response = await fetch(ApI_URl + 'search-article')
    let data = await response.json()
    console.log(data);

    data.map(search => {
        console.log(search)
        const ele = document.createElement("search-article")
        ele.setAttribute("src", search.img_uri)
        ele.setAttribute("href", search.link)
        ele.setAttribute("title", search.title)
        ele.setAttribute("paragraph", search.paragraph)
        ele.setAttribute("datetime",moment(parseInt(search.date)).format("dddd") + moment(parseInt(search.date)).format("LL"))
        ele.classList.add("col-md-4","col-md-8",)

        document.getElementById("search").appendChild(ele)
    })

}

searchArticleFetch();