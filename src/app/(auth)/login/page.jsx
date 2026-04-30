import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            login page


            <div>
                <Link href="/register" className='text-blue-500 btn btn-primary'>Go to Register</Link>
            </div>
        </div>
    );
};

export default page;