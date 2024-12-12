const WelcomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-500">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Welcome, User!
        </h1>
        <p className="text-gray-600">You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default WelcomePage;
