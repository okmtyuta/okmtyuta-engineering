import { SingleFrame } from '../../styled/frame/SingleFrame';
import { SH2, SParagraph } from '../../styled/document';
import { ArticleTitle } from '../../ui/Article/ArticleTitle';
import { SContainer } from '../../styled/container/SContainer';
import { ArticleCard } from '../../ui/Article/ArticleCard';

export const Article = () => {
  return (
    <SContainer margin="20px">
      <SingleFrame>
        <ArticleTitle
          tags={['Development', 'Organization']}
          title="メルペイVPoEによる2022年の振り返り"
          dateCreated="2022/12/01"
        />
        <SH2 margin="0 0 12px 0">はじめに</SH2>
        <SParagraph>
          こんにちは！ソリューション事業本部 オープンプラットフォーム事業部
          ゲームプラットフォーム部のサーバーグループに所属している多田です。
          主に Mobage
          のプラットフォームでサーバーサイドに関するプロジェクトマネジメント(PM)
          or
          プロジェクトマネジメントオフィス(PMO)に携っております。入社してからおよそ1年ほど経ちましたので、振り返りつつプロジェクトマネジメントについてお話ししたいと思います。
        </SParagraph>
        <SParagraph>
          前職では動画系のアプリの開発PMや通信システムに関する運用・開発のマネジメントを行なっておりました。
          更に昔では、以下のような経験もあります。
        </SParagraph>

        <SH2 margin="0 0 12px 0">入社経緯</SH2>
        <SParagraph textAlign="justify">
          前職では動画系のアプリの開発PMや通信システムに関する運用・開発のマネジメントを行なっておりました。
          更に昔では、以下のような経験もあります。
        </SParagraph>
        <SParagraph textAlign="justify">
          他には企画や戦略寄りのプロダクトマネジメント、Pythonでの大規模データの解析などデータサイエンティストのような事もしてたりと、広範囲なジェネラリストでしょうか。そのため開発よりのPMとしての意見と思って頂けたらと思います。
          働き方に関しても、独立して仕事をしていた期間もあったりして色んな立場を知ることができました。
          そのように経験として多くの事を学んでいく中で、やはりもっと事業の中心でコアな部分にも携って行きたい思いも感じていきます。
        </SParagraph>

        <ArticleCard
          tags={['Development', 'Organization']}
          title="メルペイVPoEによる2022年の振り返り"
          dateCreated="2022/12/01"
        />
        <ArticleCard
          tags={['Development', 'Organization']}
          title="メルペイVPoEによる2022年の振り返り"
          dateCreated="2022/12/01"
        />
        <ArticleCard
          tags={['Development', 'Organization']}
          title="メルペイVPoEによる2022年の振り返り"
          dateCreated="2022/12/01"
        />
      </SingleFrame>
    </SContainer>
  );
};
