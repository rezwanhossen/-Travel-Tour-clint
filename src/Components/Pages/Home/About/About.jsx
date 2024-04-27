const About = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">About Us</h1>
        <p>
          Welcome to{" "}
          <span className="text-rose-500"> Southeast Asia travel & tour </span>,
          Your Partner in Memorable Travel Experiences
        </p>
      </div>
      <div className="mt-5">
        <div className="hero">
          <div className="hero-content ">
            <div className=" md:flex gap-4">
              <div className=" flex-1 p-5">
                <h1 className="text-5xl font-bold">Our Mission</h1>
                <p className="py-6 ">
                  At <span> </span>
                  <span className="text-rose-500">
                    Southeast Asia travel & tour
                  </span>
                  our mission is to create unforgettable travel experiences that
                  inspire, educate, and connect people with the world around
                  them. We strive to exceed the expectations of our clients by
                  delivering exceptional service, fostering cultural
                  understanding, and promoting sustainable tourism practices.
                </p>
              </div>
              <div className=" flex-1">
                <img src="https://i.ibb.co/Gtmqt5t/turest.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5 md:flex gap-5">
        <div className=" flex-1">
          <img
            className=" rounded-md "
            src="https://i.ibb.co/fpS4K8T/pexels-rachel-claire-4577565.jpg"
            alt=""
          />
        </div>
        <div className=" flex-1 p-3 border rounded-md">
          <h1 className="text-2xl font-bold">History</h1>
          <p>
            Southeast Asia travel & tour was founded in 2024 with a passion for
            travel and a vision to create unique and personalized experiences
            for travelers around the globe.
          </p>
          <h1 className="text-2xl font-bold mt-3">Values</h1>
          <li>
            <b>Customer Satisfaction:</b> We prioritize the needs and
            preferences of our clients, ensuring their satisfaction at every
            step of their journey.
          </li>
          <li>
            <b> Quality and Excellence:</b> We are committed to delivering
            high-quality services and experiences that exceed industry
            standards.
          </li>
          <li>
            <b>Innovation:</b> We embrace innovation and continuously seek new
            ways to enhance the travel experience for our clients.
          </li>
        </div>
      </div>
    </div>
  );
};

export default About;
