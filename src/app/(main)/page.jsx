import BreakingNews from '@/components/shared/BreakingNews';
import Hader from '@/components/shared/Hader';
import ReadingSection from '@/components/shared/ReadingSection';
import WhyChoose from '@/components/shared/WhyChoose';
import React from 'react';

const page = () => {
    return (
        <>

            <Hader></Hader>
            <BreakingNews></BreakingNews>
            <div>
                <h1>home page</h1>
            </div>

            <WhyChoose></WhyChoose>
            <ReadingSection></ReadingSection>
        </>
    );
};

export default page;