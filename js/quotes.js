const quotes =[
    {
        quote : "\"돈 많이 벌어 올게요\"",
        author : "권윤재"
    },
    {
        quote : "\"술 많이 먹지 마\"",
        author : "권윤재"
    },
    {
        quote : "\"라면 말고 밥 먹어\"",
        author : "권윤재"
    },
    {
        quote : "\"외식 금지\"",
        author : "권윤재"
    },
    {
        quote : "\"지원아 사랑해❤️\"",
        author : "권윤재"
    },
    {
        quote : "\"권윤재 월급 날은 매달 10일\"",
        author : "권윤재"
    },
    {
        quote : "\"콩순이가 괴롭혀\"",
        author : "권윤재"
    }
]
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = todayQuote.quote
author.innerText = todayQuote.author