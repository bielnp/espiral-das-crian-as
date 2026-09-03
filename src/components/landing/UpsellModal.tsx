import { useEffect } from "react";
import { Check, X } from "lucide-react";

export interface UpsellPlan {
  name: string;
  price: string;
  items: { text: string; included: boolean }[];
}

export interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  fromPlan: UpsellPlan;
  toPlan: UpsellPlan;
  upgradeLabel: string;
  acceptText: string;
  acceptUrl: string;
  declineText: string;
  declineUrl: string;
}

export function UpsellModal({
  isOpen,
  onClose,
  title,
  subtitle,
  fromPlan,
  toPlan,
  upgradeLabel,
  acceptText,
  acceptUrl,
  declineText,
  declineUrl,
}: UpsellModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAccept = () => {
    window.location.href = acceptUrl;
  };

  const handleDecline = () => {
    window.location.href = declineUrl;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="upsell-title"
    >
      <div className="relative w-full max-w-lg scale-100 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 grid h-8 w-8 place-items-center rounded-full bg-white text-navy shadow-lg transition hover:bg-gray-100"
          aria-label="Cerrar oferta"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand to-brand-dark px-6 py-5 text-white sm:px-8">
            <p className="text-xs font-extrabold uppercase tracking-wide opacity-90">{upgradeLabel}</p>
            <h2 id="upsell-title" className="mt-1 text-xl font-extrabold sm:text-2xl">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed opacity-90">{subtitle}</p>
          </div>

          {/* Comparison */}
          <div className="px-6 py-6 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Current plan */}
              <div className="rounded-2xl border border-border bg-softgray p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Plano atual</p>
                <p className="mt-1 text-lg font-extrabold text-navy">{fromPlan.name}</p>
                <p className="mt-1 text-2xl font-extrabold text-navy">{fromPlan.price}</p>
                <ul className="mt-3 space-y-2">
                  {fromPlan.items.slice(0, 4).map((item) => (
                    <li key={item.text} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" strokeWidth={3} />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Upgrade plan */}
              <div className="relative rounded-2xl border-2 border-success bg-white p-4 shadow-md">
                <span className="absolute -top-2 left-4 rounded-full bg-success px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
                  Recomendado
                </span>
                <p className="text-xs font-bold uppercase tracking-wide text-success">Upgrade</p>
                <p className="mt-1 text-lg font-extrabold text-navy">{toPlan.name}</p>
                <p className="mt-1 text-2xl font-extrabold text-success">
                  {toPlan.price}{" "}
                  <span className="text-sm font-medium text-muted-foreground line-through">{fromPlan.price}</span>
                </p>
                <ul className="mt-3 space-y-2">
                  {toPlan.items.map((item) => (
                    <li key={item.text} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${item.included ? "text-success" : "text-muted-foreground"}`}
                        strokeWidth={3}
                      />
                      <span className={item.included ? "font-medium text-navy" : "text-muted-foreground line-through"}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price highlight */}
            <div className="mt-6 rounded-2xl bg-softblue/60 p-4 text-center">
              <p className="text-sm font-semibold text-navy">Por apenas</p>
              <p className="mt-1 text-3xl font-extrabold text-success">+US$ 1,90</p>
              <p className="mt-1 text-sm text-muted-foreground">você desbloqueia todo o Premium</p>
            </div>

            {/* CTA */}
            <div className="mt-6 space-y-3">
              <button
                onClick={handleAccept}
                className="w-full rounded-xl bg-success px-6 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:brightness-95"
              >
                {acceptText}
              </button>
              <button
                onClick={handleDecline}
                className="w-full text-center text-sm font-semibold text-muted-foreground underline underline-offset-4 transition hover:text-navy"
              >
                {declineText}
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              🔒 Compra 100% segura · Garantía de 7 días
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
