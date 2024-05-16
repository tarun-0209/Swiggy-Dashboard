const Shimmer = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="grid grid-cols-4 gap-12">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 w-64 h-96 animate-pulse"
          >
            <div className="mb-4">
              <div className="bg-gray-300 h-40 mb-4 rounded-t-lg" />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="bg-gray-300 h-6 w-32 mb-2 rounded" />
                  <div className="bg-gray-300 h-4 w-40" />
                </div>
                <div>
                  <div className="bg-gray-300 h-4 w-24 mb-2 rounded" />
                  <div className="bg-gray-300 h-4 w-32 mb-2 rounded" />
                  <div className="bg-gray-300 h-4 w-20 rounded" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
