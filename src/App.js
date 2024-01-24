import logo from './logo.svg';
import './App.css';
import {
  PrismicRichText,
  useFirstPrismicDocument,
  PrismicImage,
  // useAllPrismicDocumentsByType,
  // usePrismicDocumentByUID,
  useSinglePrismicDocument,
} from '@prismicio/react';
import * as prismic from '@prismicio/client'

function App() {
  const [document] = useFirstPrismicDocument()
  console.log(document);
  const test_single = useSinglePrismicDocument("test_single");
  console.log(test_single);
  // const [documents] = useAllPrismicDocumentsByType('article')
  // const [page, { state }] = usePrismicDocumentByUID('page', 'hello-world')
  return (
    <div className="App">
      {document && (
        <div>
          <PrismicImage field={document.data.body[0].primary.test_image} />
          <time
            dateTime={prismic.asDate(document.data.body[1].items[0].test_timestamp).toISOString()}
          >
            {prismic.asDate(document.data.body[1].items[0].test_timestamp).toISOString()}
          </time>
        </div>
      )}
    </div>
  );
}

export default App;
