import { ProverbInterface } from "@/interface";
import data from "../../data/MyanmarProverbs.json";

export function getTitle() {
  const titleName = data.Tbl_MMProverbsTitle.map((titles) => titles);

  return titleName;
}

export function getTitleName(id: number) {
  const titleName = data.Tbl_MMProverbsTitle.find(
    (names) => names.TitleId === id
  )?.TitleName;

  const notFoundTitleName = !titleName;

  return { titleName, notFoundTitleName };
}

export function getProverb(id: number) {
  const proverb = data.Tbl_MMProverbs.filter(
    (proverbs) => proverbs.TitleId === id
  );

  return proverb;
}

export function getRandomProverb() {
  let randomProverb: ProverbInterface[] = [];
  const removeTitleId = [4, 11, 12, 13, 14, 15, 32];

  for (let i = 0; i < 10; i++) {
    const randomTitle = Math.floor(Math.random() * 33) + 1;

    if (!removeTitleId.includes(randomTitle)) {
      // console.log(randomTitle);
      const randomPost = data.Tbl_MMProverbs.find(
        (proverb) => proverb.TitleId === randomTitle && proverb.ProverbId === 1
      );

      randomProverb.push(randomPost!);
    }
  }

  return { randomProverb };
}

export function getSearchProverbs(search: string) {
  const searchProverbs = data.Tbl_MMProverbs.filter((proverbs) =>
    proverbs.ProverbName.includes(search)
  );
  // console.log("searchProverbs >>>", searchProverbs);

  return { searchProverbs };
}
