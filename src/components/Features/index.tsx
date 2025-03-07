import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-[#18181a] lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          title="Fitur Utama MrCarWash"
          paragraph="Ada banyak ragam fitur yang tersedia untuk manajemen bisnis cuci mobil Anda, namun MrCarWash menghadirkan fitur terlengkap dan terpenting dalam satu platform terpadu."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
