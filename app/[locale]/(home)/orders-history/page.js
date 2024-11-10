import { useTranslations } from "next-intl";


export default function OrderHistory() {
    const t = useTranslations("OrderHistory")
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{t('title')}</h1>
        </main>
    );
}
