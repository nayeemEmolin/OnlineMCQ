# OnlineMCQ Digital Book Corner

Static, GitHub Pages compatible digital library. The reader keeps each original PDF intact and adds chapter → topic → subtopic navigation, a page jump, OCR search, and page-level OCR text.

## Current book

- **Mathematics · Classes Nine–Ten (2018)** — full 390-page source PDF, including cover and introductory/back-matter pages.
- The scan itself remains the visual source of truth. OCR is provided for search/navigation and can contain recognition errors.

## Add a book using the same reader

1. Add its PDF under `books/files/`.
2. Add `books/data/<book-id>.json` with the schema below.
3. Add a matching record to `books/data/catalog.json`.
4. The book link is `./reader.html?book=<book-id>`.

```json
{
  "id": "book-id",
  "title": "Book title",
  "edition": "Edition / year",
  "publisher": "Publisher",
  "language": "English",
  "classLevel": "Level",
  "pageCount": 100,
  "printedPageCount": 95,
  "pdf": "./files/book-id.pdf",
  "chapters": [
    {
      "id": "c1",
      "name": "Chapter 1",
      "start": 1,
      "end": 10,
      "pdfStart": 6,
      "pdfEnd": 15,
      "topics": [
        {
          "id": "c1t1",
          "name": "Topic",
          "start": 1,
          "end": 10,
          "pdfStart": 6,
          "pdfEnd": 15,
          "subtopics": [
            {
              "id": "c1t1s1",
              "name": "Subtopic",
              "start": 1,
              "end": 10,
              "pdfStart": 6,
              "pdfEnd": 15
            }
          ]
        }
      ]
    }
  ],
  "pages": [
    {
      "pdfPage": 6,
      "printPage": 1,
      "chapterId": "c1",
      "topicId": "c1t1",
      "subtopicId": "c1t1s1",
      "text": "OCR text for this source page"
    }
  ]
}
```

For every source PDF page, provide one `pages[]` entry and map it to a chapter/topic/subtopic. `pdfPage` is the one-based PDF page; `printPage` is the page number printed in the book, or `null` for covers/front matter. Keep all page ranges inclusive and consistent. No backend or third-party JavaScript is needed.
