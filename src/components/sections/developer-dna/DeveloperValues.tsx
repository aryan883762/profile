import { developerValues } from "@/data/developer-values";

const DeveloperValues = () => {
  return (
    <div className="space-y-2.5">
      {developerValues.map((value, index) => {
        const Icon = value.icon;

        return (
          <article
            key={value.title}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="group flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-300 hover:border-purple-100 hover:bg-white/80 hover:shadow-md hover:shadow-purple-200/20"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <Icon className={value.iconClassName} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 md:text-[15px]">
                {value.title}
              </h3>
              <p className="mt-0.5 text-xs leading-5 text-slate-600 md:text-[13px]">
                {value.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default DeveloperValues;
