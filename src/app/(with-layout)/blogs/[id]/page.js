import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog = ({ params }) => {
    // const params2 = useParams();
    // const searchParams2 = useSearchParams();
    // console.log(params2.segments.split('/'), searchParams2.get("title"));

    return (
        <div>
            SingleBlog {params.id}
        </div>
    );
};

export default SingleBlog;