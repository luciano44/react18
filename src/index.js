import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"

function BookList() {
  return (
    <section>
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
      <Book
        title="Example title"
        img={"https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"}
      />
      <Book
        title="Another Book title"
        img={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"
        }
      />
    </section>
  )
}

function Book({ title, img }) {
  return (
    <article>
      <Image img={img} />
      <Title title={title} />
      <Author />
    </article>
  )
}

const Image = ({ img }) => <img src={img} />
const Title = ({ title }) => <h2>{title}</h2>
const Author = () => <h4>Author</h4>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
