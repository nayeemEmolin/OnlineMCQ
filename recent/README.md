# Recent Exam Corner

A static, GitHub Pages-ready hub for recent competitive-exam papers and interactive mocks. The CAAB and Bank links reuse their existing practice/exam pages; BPSC Assistant Director (Non-Technical), Set 3 is kept as an original scanned question/answer/solution PDF reader.

## Add a future test

1. Add the question data and answer explanations to the repository.
2. Add a paper record to `data/exams.json` with the exam name, set/date, duration, marks, link, and a `topics` tree: subject → topic → subtopic → count.
3. For interactive tests, point `href` to the test page. For source-only scanned papers, set `type` to `source-pdf`, set `pdf`, and make a reader page that can navigate question, answer-key, and solution pages.
4. Use explicit `subtopic` tags in new question records. Older CAAB/Bank records have subject/topic tags only; the catalog labels those as pending rather than inventing subtopic counts.

The corner's topic counts are generated from the question metadata already present in the CAAB and Bank test datasets. The BPSC PDF is retained as a source document; it has not been represented as an interactive quiz because it is a scan and its text has not been independently digitized and checked.
