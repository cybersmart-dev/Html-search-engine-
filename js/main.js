
const datas = [
    {"title":"Python","body":"Python is a programming language with a clean syntax"},
    {"title":"JavaScript","body":"JavaScript is a client-site as well as server-site scripting language "},
    {"title":"Django","body":"Django is a powerful python web framework"},
    {"title":"React js","body":"React js is front-end JavaScript web library developed by facebook in 2011"},
    {"title":"TypeScript","body":"TypeScript is a super set of JavaScript"},
    {"title":"WebPack","body":"webpack is a static module builder in a particular project"},
    {"title":"JQuery","body":"JQuery is a fast and concise javascript library"},
    {"title":"MySQL","body":"Database is a separate application that stores a collection of data "}
]

const box = document.getElementsByClassName("box")
// load datas to html whie function called
const loadToHtml = objs => {
    var html = ''
    objs.forEach((data) => {
        doc = `
            <div style="transition: all 1s;" class="item-box p-2 shadow-sm border-3 rounded m-2 mt-3">
                <span style="font-variant: small-caps;" class="h3 title">${data.title}</span>
                <p class="text-muted body">${data.body}</p>
            </div>
        `
        html += doc
    })
    box[0].innerHTML = html
}
// on webpage loaded
window.onload = function () {
    loadToHtml(datas)
}

function Search(){
    const search_field = document.getElementById("search-field")
    let search_text = search_field.value.trim()
    const searched_objs = []
    datas.forEach((obj) =>{
        // reguler expression for searching matching querys
        let re = obj.body.match(new RegExp(search_text.trimStart(),"gi"))
        let ori = obj.body.replace(new RegExp("<mark>","gi"),"".trim())
        obj.body = ori.replace(new RegExp("</mark>","gi"),"".trim())
        if(re != undefined){
            if(re.length >= 1){
                if(re[0].trim() != ""){
                    obj.body = obj.body.replace(new RegExp(search_text,"gi"),`<mark>${search_text}</mark>`)
                    searched_objs.push(obj)
                    // console.log(re)
                }
            }
        }
    })
    // console.log(searched_objs)
    if(searched_objs.length > 0){
        loadToHtml(searched_objs)
    }else{
        box[0].innerHTML = `
            <div class="search-empty-box mt-3 m-3 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-emoticon-sad-outline" width="60" height="60" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
                <p>No Matching Query <b>"${search_text}"</b></p>
            </div>
        `
    }
    console.log(searched_objs)
}
