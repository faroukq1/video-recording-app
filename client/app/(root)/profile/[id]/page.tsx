import Header from '@/component/Header';

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="ouledmeriemfarouk1@gmail.com"
        title="farouk | ouledmeriem"
        userImg="/assets/images/dummy.jpg"
      />
      <h1>USER ID : {id}</h1>
    </div>
  );
};

export default page;
