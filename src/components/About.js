import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">About us Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UserClass name="Author 1" />
        <UserClass name="Author 2" />
        <UserClass name="Author 3" />
      </div>
    </div>
  );
};

export default About;
