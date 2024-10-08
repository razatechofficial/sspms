export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl text-center">
        <img
          src="https://via.placeholder.com/600x300"
          alt="School Hero"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Shining Star Public Middle School
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Empowering students to shine bright!
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
