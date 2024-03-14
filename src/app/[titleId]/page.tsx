import ProverbName from "@/components/ProverbName";
import { getProverb, getTitleName } from "@/utils";

interface Params {
  titleId: string;
}

export default function TitlePage({ params }: { params: Params }) {
  const { titleId } = params;

  const { titleName, notFoundTitleName } = getTitleName(parseInt(titleId));

  if (notFoundTitleName) return <div>No Found</div>;

  const proverbs = getProverb(parseInt(titleId));

  return (
    <div className="py-3 px-10 flex flex-col">
      <div className="font-bold p-1 text-white text-lg">
        {titleName} (စကားပုံ)
      </div>
      <div>
        {proverbs.map((proverb) => (
          <ProverbName
            key={proverb.ProverbId}
            proverb={proverb}
            titleName={titleName!}
          />
        ))}
      </div>
    </div>
  );
}
