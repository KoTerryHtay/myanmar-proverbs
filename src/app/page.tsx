import ProverbName from "@/components/ProverbName";
import SearchProverb from "@/components/SearchProverb";
import { getRandomProverb } from "@/utils";

interface SearchParam {
  search: string;
}

export default function HomePage({
  searchParams,
}: {
  searchParams: SearchParam;
}) {
  const { randomProverb } = getRandomProverb();

  return (
    <div className="py-3 px-10 flex flex-col">
      <div className="font-bold p-1 text-white text-lg">
        {`${searchParams.search ? "Search" : "Random"}`} Proverbs
      </div>
      <div>
        {!!searchParams.search ? (
          <div>
            <SearchProverb searchText={searchParams.search} />
          </div>
        ) : (
          randomProverb.map((proverbs) => (
            <ProverbName
              key={proverbs?.ProverbId + crypto.randomUUID()}
              proverb={proverbs}
            />
          ))
        )}
      </div>
    </div>
  );
}
