import { developerValues } from "@/data/developer-values";

const DeveloperValues = () => {
  return (
    <div className="space-y-5">
      {developerValues.map((value, index) => {
        const Icon = value.icon;

        return (
          <article
            key={value.title}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-purple-100 hover:bg-white hover:shadow-lg hover:shadow-purple-200/20"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
              <Icon className={value.iconClassName} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
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
