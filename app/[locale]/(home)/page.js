import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <main className="min-h-screen max-w-[600px] m-auto px-4">
            <h1>{t("title")}</h1>
         
        </main>
    );
}
