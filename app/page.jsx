import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Welcome to Blogging</span>
    </h1>
    <p className='desc text-center'>
      Step into a world where words paint pictures, ideas spark conversations, and creativity knows no bounds. Get ready to unleash your thoughts and share your stories with the world.
    </p>

    <Feed />
  </section>
);

export default Home;
