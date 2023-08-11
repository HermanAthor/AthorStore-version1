const Cancel = () => {
  return (
    <div className="h-screen grid place-items-center mt-24">
      <div className="text-center">
        <h1 className="text-8xl font-bold">Thank You</h1>
        <p className="text-center text-2xl">
          But we are afraid you canceled your order
        </p>

        <Link href="/">
          <p className="bg-red-600 text-white py-4 px-12 mt-4 hover:bg-red-800 cursor-pointer">
            Continue Shopping
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
