const HeroSection = () => (
    <div className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Movie World</h1>
          <p className="text-lg mb-6">Stream the latest movies now</p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-full">Explore Now</button>
        </div>
      </div>
    </div>
  );
  
  export default HeroSection;