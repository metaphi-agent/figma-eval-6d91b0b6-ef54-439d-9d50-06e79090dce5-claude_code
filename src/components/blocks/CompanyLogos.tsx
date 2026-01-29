export default function CompanyLogos() {
  return (
    <section className="py-12 bg-[--color-background]">
      <div className="max-w-[1180px] mx-auto px-6">
        <h3 className="text-[40px] font-bold text-center text-[--color-text-primary] mb-12">
          More than 25,000 teams use Collabs
        </h3>

        <div className="flex items-center justify-center">
          <img
            src="./assets/images/company-logos.png"
            alt="Companies using Collabs: Unsplash, Notion, Intercom, descript, grammarly"
            className="w-full max-w-[1076px] h-auto opacity-60"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
