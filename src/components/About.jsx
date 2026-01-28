import React from 'react'

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen pt-20">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center col-span-7">
          <h3 className="max-w-2xl mb-4 text-3xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            About Xpense Tracker
          </h3>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Xpense Tracker is a simple and powerful web-based expense management
            tool designed to help you take control of your finances. It allows
            you to record daily expenses, categorize your spending, and track
            your budget in real time through a clean and intuitive dashboard.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Whether you're managing personal finances or monitoring monthly
            household expenses, Xpense Tracker provides clear insights into
            where your money goes. With features like category-wise tracking,
            date-based filtering, and instant summaries, it helps you make
            smarter financial decisions with confidence.
          </p>
        </div>
        <div className=" lg:mt-0 col-span-5 flex">
          <img
            src="/images/about.jpg"
            alt="img"
            className='rounded-md'
          />
        </div>
      </div>
    </section>
  );
}

export default About