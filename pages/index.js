import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-black text-white h-screen">
        {/* Header Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">The Leader in Website Design</h1>
          <p className="text-lg md:text-2xl mt-4">Websites that inspire and captivate</p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/path-to-your-image.png')", // Replace with your actual image path
          }}
        ></div>
      </div>
    </>
  )
}
