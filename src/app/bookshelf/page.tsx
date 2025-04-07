type book = {
    title: string;
    author: string;
    bio: string;
}

const books: book[] = [
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        bio: "In January 2024 my uncle went to California for the 40th anniversary of the original Macintosh. Why is that you ask? Well it turns out that my Uncle Frank Fennelly was an engineer on the original Mac team from 1982 to 1984 (he is in a light brown sweatshirt on the very back right of this photo). I had always known this growing up, and his trip to Palo Alto earlier this year prompted me to read more into Apple during his time there. It was very interesting to read the book and imagine the beginnings of consumer technology, but even cooler to hear stories from Uncle Fran that aren't written about in the book.\n" +
            "\n" +
            "My Uncle Paul Fennelly also worked at Apple as an engineer at the same time too, and worked on the Apple Lisa team. He too had stories of working at Apple during Silicon Valley's heyday and both of my uncles had stories of dealing with Steve Jobs himself. This book is brilliant to begin with, but the extra untold stories from my uncles made the whole story even better.",
    },
    {
        title: "Ogilvy On Advertising\n",
        author: "David Ogilvy",
        bio: "During the COVID lockdowns I got heavily interested in ecommerce and advertising on the internet. In doing so I researched and consumed any information I could get my hands on that could ultimately make me more sales. This lead me to reading books about consumer psychology, marketing and copywriting. Ogilvy on advertising was one of my two favorites of the books that I read during this period.\n" +
            "\n" +
            "In this book David Ogilvy - known as 'The Father of Advertising' - speaks about all things advertising in the twentieth century. Mostly he speaks about advertising in newspapers during the 1950s and 1960s, but information is the information in this book is both timeless and priceless. He details methods of gaining and maintaining a potential customers interest in an advertisement and the common pitfalls of inexperience in marketing. Ogilvy is thoroughly practical and dismisses the common thought process of supposed 'good advertising' and committed his philosophy to what measurably worked.\n" +
            "\n" +
            "This was a very interesting book and would recommend it to anyone.\n" +
            "\n",
    },
    {
        title: "The Power of Habit",
        author: "Charles Duhigg",
        bio: "The Power of Habit is a book that delves into the importance of building habits, and the science of doing so. It provides a very interesting and actionable detail of how habits are built and maintained. Like any good book, after you read this you look at life with a bit of a different perspective. In this book the new perspective that I gained was the role that habits play in our life, and that to a certain extent we are our habits. This book gives you the information needed to redefine your own habits, and I guess in turn reinvent yourself - provided you employ the techniques and knowhow provided in the book.\n" +
            "\n" +
            "This is definitely one of my must-read books because the information in it is both applicable and useful to anyone and everyone.\n" +
            "\n"
    },
    {
        title: "Elon Musk",
        author: "Walter Isaacson",
        bio: "Love him or hate him, Elon Musk is one of the most interesting people of our time. I read this book at the same time I was reading Steve Jobs biography, and saw a lot of similarities in both men. They are both highly successful but also very cruel people in their own way. To be honest I wasn't very interested in Musk's personal life or his opinions, and rather focused on his corporate life and how he operated on a professional level.\n" +
            "\n" +
            "There are many anecdotes in this book that are representative of what made Musk such a success in many different fields. He is a man that has high agency in his own life, and takes huge risks. The high agency element of his character permeates Tesla, as Steve Jobs' passion for design imbues Apple to this day. While working on the starship in the Nevada desert for example, Tesla employees were breeding dragon flies in paddling pools to counteract the amount of mosquitoes that were in the desert. Another aspect of Musk's character that is similar to that of Jobs is his ability to ignore the notion of impossibility. Both men thought of what they wanted to be possible, and worried about engineering scruples after the fact, which proved to be huge for both.",
    },
    {
        title: "The Boron Letters",
        author: "Gary C. Halbert",
        bio: "This book - if I remember correctly - is about a famous copywriter that somehow ended up in prison. He thought that the best thing he could do for his son was to pass down to him his knowledge of writing for advertisement. Through a series of letters (now known as The Boron Letters), he teaches his son how to write, and think like a marketing expert. It is specific, brief and actionable training for how to write brilliant copy. This is a very short book that I definitely recommend.",
    },
    {
        title: "Beyond Good and Evil",
        author: "Friedrich Nietzsche",
        bio: "When I was 18 I started getting into philosophy, and more particularly reading about German philosophers such as Nietzsche, Hegel and Schopenhauer. While browsing on YouTube I would listen to lectures and videos about philosophy and enjoyed the depth of but also the courage of thought of these philosophers.\n" +
            "\n" +
            "Although I'm no philosopher myself, I have read the guts of Beyond Good and Evil by Nietzsche, and have to say that it is definitely the most unique book that I have ever opened. It is one of those books that you have to read for yourself, and with Beyond Good and Evil, you will find yourself reading, and rereading over and over again. I once heard somewhere that 'every sentence in Beyond Good and Evil is like a bomb' - and this is the closest description that I have seen to the experience of reading the pages of this book. It is a critique of 1800s western culture, and is an attack on \"dogma\". I'm going to leave my description at that because this is one of those books you just have to read for yourself.",
    },
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        bio: "This is another very cool and enjoyable book that is about thinking - but more importantly the downfalls of thinking, and trusting your thoughts, and how people often think with heuristics, and never second guess their sanity. This book will surprise you by showing you how pregnable your thinking really is.",
    },
]



export default function Bookshelf() {
    return (
        <>
            <Books></Books>
        </>
    )
}

function Books() {
    return (
        <>
            {books.map((book) => (
                <section key={Math.random()}>
                    <h1>{book.title}<span style={{fontWeight: 200}}> - {book.author}</span></h1>
                    <p>{book.bio}</p>
                </section>
            ))}
        </>
    )
}

