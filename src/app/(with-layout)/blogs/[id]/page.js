import loadBlogData from '@/utilities/loadBlogData';
import loadSingleBlogData from '@/utilities/loadSingleBlogData';

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);

    return {
        title: title
    }
}

export const generateStaticParams = async () => {
    const blogs = await loadBlogData();

    return blogs.map(blog => ({
        id: blog.id.toString()
    }))
}


const SingleBlog = async ({ params }) => {
    const { id, body, title } = await loadSingleBlogData(params.id);

    return (
        <div className="border border-blue-500 p-4 my-2 mx-2">
          <h2 className="text-2xl">{id}. {title}</h2>
          <p>{body}</p>
        </div>
    );
};

export default SingleBlog;