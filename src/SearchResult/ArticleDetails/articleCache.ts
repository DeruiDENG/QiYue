import { useEffect, useState } from "react";

export interface ArticleDetails {
  title?: string;
  content: string[];
}

const cache = new Map<string, ArticleDetails>();

export function useArticleDetails(
  articleId: string,
  isPopup: boolean
): ArticleDetails {
  const [articleDetails, setArticleDetails] = useState<ArticleDetails>(null);
  useEffect(() => {
    if (isPopup) {
      setArticleDetails(null);
      getArticleDetails(articleId).then(articleDetails => {
        setArticleDetails(articleDetails);
      });
    }
  }, [articleId, isPopup]);

  return articleDetails;
}

async function getArticleDetails(articleId: string): Promise<ArticleDetails> {
  const cachedDetails = cache.get(articleId);
  if (cachedDetails) {
    return cachedDetails;
  }

  const articleDetails = await fetchArticleDetails(articleId);
  cache.set(articleId, articleDetails);
  return articleDetails;
}

async function fetchArticleDetails(articleId: string): Promise<ArticleDetails> {
  return new Promise<ArticleDetails>(resolve => {
    setTimeout(() => {
      resolve({
        title: "《清嘉庆十五年（1810）□（孝）义县任永慎砖窑红契》",
        content: [
          `立卖砖窑契人任永慎，因为度日不便，今将自己分到之业东边上窑壹眼，上厦窑壹眼，大门外婆窑壹眼，东至古路，南至大河，西至院中，北至古路。四至明白，上下土木石相连，情愿出卖 与堂叔任福佑居柱作业。同中言定，时值死价 元丝银弍拾伍两整。其银当日交足，并无 短少。倘有族内人等争论，有卖主壹面承当，不 与买主相干，并无异说。恐后无凭，放立卖 窑契为证。`,
          "嘉庆十五​​​​年十一月初二日立窑契人 任永慎",
          "在中人 李之福 任世炳",
          "写人 任永福",
        ],
      });
    }, 2000);
  });
}
