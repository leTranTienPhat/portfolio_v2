import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <section className="bg-bg-dark dark:bg-bg-light w-screen h-[100px] flex justify-center items-center text-white dark:text-black">
      {t('logoString')}
    </section>
  )
}