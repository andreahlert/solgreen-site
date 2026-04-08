import { BlurFade } from "../ui/blur-fade";
import { sectors } from "../../lib/data";
import { url } from "../../lib/base";

export function Benefits() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
              Setores
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
              Soluções por segmento
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
              Cada operação tem uma dor diferente. Entendemos a sua e dimensionamos a solução certa.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.slice(0, 5).map((s, i) => (
            <BlurFade key={s.slug} delay={i * 0.08}>
              <a
                href={url(`/setores/${s.slug}`)}
                className="group block bg-white rounded-xl border border-neutral-200 overflow-hidden h-full hover:border-green/30 hover:shadow-md transition-all duration-300"
              >
                {/* Foto vívida no topo */}
                <div className="h-36 overflow-hidden">
                  <img
                    src={url(s.cover)}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-neutral-900 text-sm mb-1.5 group-hover:text-green transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-red-500/80 font-medium mb-2">{s.pain}</p>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                    {s.description.slice(0, 100)}...
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 group-hover:text-green transition-colors">
                    Ver soluções
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </BlurFade>
          ))}

          <BlurFade delay={0.4}>
            <a
              href={url("/setores")}
              className="group flex flex-col items-center justify-center bg-white rounded-xl border border-dashed border-neutral-300 p-6 h-full min-h-[280px] hover:border-green/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-3 group-hover:bg-green/10 transition-colors">
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-sm font-medium text-neutral-500 group-hover:text-green transition-colors">Ver todos os setores</p>
            </a>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
