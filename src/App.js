import logo from './logo.svg';
import './App.css';
import {
  PrismicRichText,
  useFirstPrismicDocument,
  usePrismicDocuments,
  PrismicImage,
  Heading,
  // useAllPrismicDocumentsByType,
  // usePrismicDocumentByUID,
  useSinglePrismicDocument,
} from '@prismicio/react';
import * as prismic from '@prismicio/client'

// import * as prismicH from '@prismicio/helpers'

function CreateMarkup(document) {
  return {
    __html: "<div>{document && <div>aaaaaa</div>)}</div>"
  }
}

function App() {
  const [document] = useFirstPrismicDocument()
  const [document1] = usePrismicDocuments()
  // const contentHTML = prismicH.asHTML(prismicDoc.data.example_rich_text)
  // console.log(document);
  // const test_single = useSinglePrismicDocument("test_single");
  // const [documents] = useAllPrismicDocumentsByType('article')
  // const [page, { state }] = usePrismicDocumentByUID('page', 'hello-world')
  return (
    <>
      <div className="App">
        {document && (
          <div>
            {/* <PrismicImage field={document.data.body[0].primary.test_image} /> */}
            <PrismicRichText
              field={document.data.body[0].primary.test_rich_text}
              // components={{
              //   heading1: ({ children }) => <h1>{children}</h1>,
              //   paragraph: ({ children }) => <p className="paragraph">{children}</p>,
              // }}
            />
          </div>
        )}
      </div>

      {/* <div
        className='App'
        dangerouslySetInnerHTML={CreateMarkup(document)}
      >
      </div> */}
  </>
  );
}

export default App;
