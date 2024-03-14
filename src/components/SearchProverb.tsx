import { getSearchProverbs } from "@/utils";
import ProverbName from "./ProverbName";

export default function SearchProverb({ searchText }: { searchText: string }) {
  const { searchProverbs } = getSearchProverbs(searchText);

  return (
    <div>
      {searchProverbs.map((search) => (
        <ProverbName
          key={search.ProverbId + crypto.randomUUID()}
          proverb={search}
        />
      ))}
    </div>
  );
}
