import Base from './components/Base/Base';
import { ArticleDetail } from './components/pages/article/ArticleDetail';
import { RegisterArticle } from './components/pages/article/RegisterArticle';

function App() {
  return (
    <Base>
      {/* <RegisterArticle /> */}
      <ArticleDetail />
    </Base>
  );
}

export default App;
