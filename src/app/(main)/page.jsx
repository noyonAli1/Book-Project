import BreakingNews from '@/components/shared/BreakingNews';
import Hader from '@/components/shared/Hader';
import ReadingSection from '@/components/shared/ReadingSection';
import WhyChoose from '@/components/shared/WhyChoose';
import FeaturedBooks from '@/components/shared/FeaturedBooks';

const page =  () => {

  // const res = await fetch("http://localhost:3000/book.json");
  // const data = await res.json();

  return (
    <>
      <Hader />
      <BreakingNews />

    
      {/* <FeaturedBooks data={data} /> */}


      <WhyChoose />
      <ReadingSection />
    </>
  );
};

export default page;