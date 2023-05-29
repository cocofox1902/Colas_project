import React from "react";

const Blog = () => {
  return (
    <div className="bg-dark text-wheat">
      <div className="flex md:text-5xl text-3xl justify-center pt-32">
        <p>Blog & Evenement</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 text-dark">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="JE_CONSULTE_LA_CARTE.png" alt="Blog Post 1" className="w-full" />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Title of Blog Post 1</h3>
            <p className="text-gray-600">Date of Blog Post 1</p>
            <p className="mt-4">
              Content of Blog Post 1
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="JE_CONSULTE_LA_CARTE.png" alt="Blog Post 2" className="w-full" />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Title of Blog Post 2</h3>
            <p className="text-gray-600">Date of Blog Post 2</p>
            <p className="mt-4">
              Content of Blog Post 2
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="JE_CONSULTE_LA_CARTE.png" alt="Blog Post 3" className="w-full" />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Title of Blog Post 3</h3>
            <p className="text-gray-600">Date of Blog Post 3</p>
            <p className="mt-4">
              Content of Blog Post 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
